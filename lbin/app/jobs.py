from __future__ import annotations

import queue
import random
import threading
import time
from typing import Any, Callable, Dict, List, Optional

from ..core import combos as combos_mod
from ..core import generator as generator_mod

__all__ = ["BaseJob", "EnrichJob", "BulkJob", "ComboJob"]


class BaseJob:
    def __init__(self, total: int = 0) -> None:
        self.total = int(total)
        self.results: "queue.Queue[Any]" = queue.Queue(maxsize=4096)
        self.stop_event = threading.Event()
        self.pause_event = threading.Event()
        self.pause_event.set()
        self.done_event = threading.Event()
        self.lock = threading.Lock()
        self.generated = 0
        self.enriched = 0
        self.errors = 0
        self.brands: Dict[str, int] = {}
        self.note = ""
        self.error = ""
        self.started = time.monotonic()
        self.finished_at: Optional[float] = None
        self._threads: List[threading.Thread] = []

    def start(self) -> "BaseJob":
        self.started = time.monotonic()
        self._spawn()
        return self

    def _spawn(self) -> None:
        raise NotImplementedError

    def _track(self, thread: threading.Thread) -> None:
        thread.daemon = True
        thread.start()
        self._threads.append(thread)

    def stop(self) -> None:
        self.stop_event.set()
        self.pause_event.set()
        threading.Thread(target=self._watchdog, daemon=True).start()

    def _watchdog(self) -> None:
        deadline = time.monotonic() + 10.0
        for thread in list(self._threads):
            remaining = max(0.05, deadline - time.monotonic())
            thread.join(timeout=remaining)
        self._finish()

    def pause(self, value: Optional[bool] = None) -> bool:
        if value is None:
            value = self.pause_event.is_set()
        if value:
            self.pause_event.clear()
        else:
            self.pause_event.set()
        return not self.pause_event.is_set()

    def _wait_if_paused(self) -> None:
        while not self.pause_event.is_set() and not self.stop_event.is_set():
            time.sleep(0.05)

    def _finish(self) -> None:
        with self.lock:
            if self.finished_at is None:
                self.finished_at = time.monotonic()
        self.done_event.set()

    @property
    def finished(self) -> bool:
        return self.done_event.is_set()

    def join(self, timeout: Optional[float] = None) -> bool:
        deadline = None if timeout is None else time.monotonic() + timeout
        while not self.done_event.is_set():
            if deadline is not None and time.monotonic() > deadline:
                return False
            time.sleep(0.05)
        for thread in self._threads:
            thread.join(timeout=0.5)
        return True

    def elapsed(self) -> float:
        end = self.finished_at or time.monotonic()
        return max(0.0001, end - self.started)

    def rate(self) -> float:
        return self.generated / self.elapsed()

    def drain(self, limit: int = 512) -> List[Any]:
        items: List[Any] = []
        for _ in range(limit):
            try:
                item = self.results.get_nowait()
            except queue.Empty:
                break
            if item is None:
                continue
            items.append(item)
        return items

    def progress(self) -> float:
        if self.total <= 0:
            return 0.0
        return min(1.0, self.generated / float(self.total))

    def snapshot(self) -> Dict[str, Any]:
        with self.lock:
            data = {
                "generated": self.generated,
                "enriched": self.enriched,
                "errors": self.errors,
                "brands": dict(self.brands),
                "note": self.note,
                "error": self.error,
                "done": self.done_event.is_set(),
                "paused": not self.pause_event.is_set(),
                "total": self.total,
            }
        data["elapsed"] = self.elapsed()
        data["rate"] = data["generated"] / data["elapsed"]
        return data


class GeneratorMixin:
    def _setup_generator(
        self,
        spec: str,
        count: int,
        length: Optional[int],
        brand: Optional[str],
        with_expiry: bool,
        with_cvv: bool,
        with_holder: bool,
        span_years: int,
        seed: Optional[int],
    ) -> None:
        self.spec = spec
        self.count = count
        self.length = length
        self.brand = brand
        self.with_expiry = with_expiry
        self.with_cvv = with_cvv
        self.with_holder = with_holder
        self.span_years = span_years
        self.seed = seed

    def _generate_loop(self) -> None:
        rng = random.Random(self.seed) if self.seed is not None else random.Random()
        try:
            for card in generator_mod.generate(
                spec=self.spec,
                count=self.count,
                length=self.length,
                brand=self.brand,
                with_expiry=self.with_expiry,
                with_cvv=self.with_cvv,
                with_holder=self.with_holder,
                span_years=self.span_years,
                rng=rng,
            ):
                if self.stop_event.is_set():
                    break
                self._wait_if_paused()
                self._on_card(card)
            with self.lock:
                self.note = self.note or "geracao concluida"
        except Exception as error:
            self.error = str(error)
        finally:
            self._publish(None)
            self._after_generate()

    def _publish(self, item: Any) -> None:
        raise NotImplementedError

    def _on_card(self, card: Any) -> None:
        raise NotImplementedError

    def _after_generate(self) -> None:
        raise NotImplementedError


class BulkJob(GeneratorMixin, BaseJob):
    def __init__(
        self,
        spec: str,
        count: int,
        length: Optional[int] = None,
        brand: Optional[str] = None,
        with_expiry: bool = True,
        with_cvv: bool = True,
        with_holder: bool = False,
        span_years: int = 5,
        seed: Optional[int] = None,
    ) -> None:
        BaseJob.__init__(self, total=count)
        self._setup_generator(
            spec, count, length, brand, with_expiry, with_cvv, with_holder, span_years, seed
        )

    def _spawn(self) -> None:
        self._track(threading.Thread(target=self._generate_loop, name="lbin-generator"))

    def _publish(self, item: Any) -> None:
        while not self.stop_event.is_set():
            try:
                self.results.put(item, timeout=0.2)
                return
            except queue.Full:
                continue

    def _on_card(self, card: Any) -> None:
        with self.lock:
            self.generated += 1
            key = card.brand_key or "outros"
            self.brands[key] = self.brands.get(key, 0) + 1
        self._publish(card)

    def _after_generate(self) -> None:
        self._finish()


class EnrichJob(GeneratorMixin, BaseJob):
    def __init__(
        self,
        spec: str,
        count: int,
        resolver: Any,
        workers: int = 8,
        allow_network: bool = True,
        length: Optional[int] = None,
        brand: Optional[str] = None,
        with_expiry: bool = True,
        with_cvv: bool = True,
        with_holder: bool = False,
        span_years: int = 5,
        seed: Optional[int] = None,
    ) -> None:
        BaseJob.__init__(self, total=count)
        self._setup_generator(
            spec, count, length, brand, with_expiry, with_cvv, with_holder, span_years, seed
        )
        self.resolver = resolver
        self.workers = max(1, min(int(workers), 32))
        self.allow_network = allow_network
        self.pending: "queue.Queue[Any]" = queue.Queue(maxsize=512)
        self._generator_done = threading.Event()

    def _spawn(self) -> None:
        self._track(threading.Thread(target=self._generate_loop, name="lbin-generator"))
        for index in range(self.workers):
            self._track(threading.Thread(target=self._worker_loop, name="lbin-resolver-%d" % index))

    def _publish(self, item: Any) -> None:
        if item is None:
            self._generator_done.set()
            for _ in range(self.workers):
                while not self.stop_event.is_set():
                    try:
                        self.pending.put(None, timeout=0.2)
                        break
                    except queue.Full:
                        continue
            return
        while not self.stop_event.is_set():
            try:
                self.pending.put(item, timeout=0.2)
                return
            except queue.Full:
                continue

    def _on_card(self, card: Any) -> None:
        with self.lock:
            self.generated += 1
        self._publish(card)

    def _after_generate(self) -> None:
        if self.stop_event.is_set():
            self._finish()

    def _worker_loop(self) -> None:
        while not self.stop_event.is_set():
            try:
                item = self.pending.get(timeout=0.3)
            except queue.Empty:
                if self._generator_done.is_set() and self.pending.empty():
                    break
                continue
            if item is None:
                break
            self._wait_if_paused()
            card = item
            try:
                info = self.resolver.resolve(item.number, allow_network=self.allow_network)
                card = self._apply(item, info)
            except Exception as error:
                with self.lock:
                    self.errors += 1
                    self.note = "falha na consulta: %s" % error
            with self.lock:
                self.enriched += 1
                key = card.brand_key or "outros"
                self.brands[key] = self.brands.get(key, 0) + 1
            self._emit(card)
        self._check_finished()

    def _apply(self, card: Any, info: Any) -> Any:
        if info is None:
            return card
        if info.brand_key:
            card.brand_key = info.brand_key
        if info.scheme:
            card.scheme = info.scheme
        if info.kind:
            card.card_type = info.kind
        card.bank = info.bank or card.bank
        card.country = info.country or card.country
        card.source = info.source or card.source
        card.meta.update(
            {
                "bank": info.bank,
                "country": info.country,
                "country_code": info.country_code,
                "category": info.category,
                "source": info.source,
                "latency_ms": "%.0f" % info.latency_ms,
                "approx": "1" if info.approx else "",
                "note": info.note,
            }
        )
        return card

    def _emit(self, card: Any) -> None:
        while not self.stop_event.is_set():
            try:
                self.results.put(card, timeout=0.2)
                return
            except queue.Full:
                continue

    def _check_finished(self) -> None:
        with self.lock:
            complete = self._generator_done.is_set() and self.enriched >= self.generated
        if complete or self.stop_event.is_set():
            self._finish()


class ComboJob(BaseJob):
    def __init__(self, spec: Any, formatter: Callable[[Dict[str, Any]], str]) -> None:
        BaseJob.__init__(self, total=combos_mod.total(spec))
        self.spec = spec
        self.formatter = formatter

    def _spawn(self) -> None:
        self._track(threading.Thread(target=self._loop, name="lbin-combos"))

    def _loop(self) -> None:
        try:
            for record in combos_mod.iter_records(self.spec):
                if self.stop_event.is_set():
                    break
                self._wait_if_paused()
                line = self.formatter(record)
                with self.lock:
                    self.generated += 1
                while not self.stop_event.is_set():
                    try:
                        self.results.put(line, timeout=0.2)
                        break
                    except queue.Full:
                        continue
        except Exception as error:
            self.error = str(error)
        finally:
            self._finish()
