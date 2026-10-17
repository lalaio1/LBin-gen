from __future__ import annotations

import json
import os
import random
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import asdict, dataclass, field
from typing import Any, Callable, Dict, Iterable, Iterator, List, Optional, Sequence, Tuple

from . import brands as brands_mod

__all__ = [
    "BinInfo",
    "LOCAL_BINS",
    "Cache",
    "HttpClient",
    "ProxyPool",
    "BinResolver",
    "flag_for",
    "normalize_bin",
]

USER_AGENTS = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
    "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36",
    "LBinGen/3.0 (+https://github.com/lalaio1/LBin-gen)",
)


def normalize_bin(value: str, size: int = 6) -> str:
    digits = "".join(ch for ch in value if ch.isdigit())
    return digits[:size]


def flag_for(alpha2: str) -> str:
    code = (alpha2 or "").strip().upper()
    if len(code) != 2 or not code.isalpha():
        return "🏳️"
    return chr(0x1F1E6 + ord(code[0]) - 65) + chr(0x1F1E6 + ord(code[1]) - 65)


COUNTRY_FALLBACK = {
    "BR": "Brasil",
    "US": "Estados Unidos",
    "GB": "Reino Unido",
    "DK": "Dinamarca",
    "DE": "Alemanha",
    "FR": "França",
    "CA": "Canadá",
    "JP": "Japão",
    "CN": "China",
    "IN": "Índia",
    "AR": "Argentina",
    "MX": "México",
    "PT": "Portugal",
    "ES": "Espanha",
    "IT": "Itália",
    "NL": "Países Baixos",
    "TR": "Turquia",
    "RU": "Rússia",
    "KR": "Coreia do Sul",
    "NG": "Nigéria",
}


@dataclass
class BinInfo:
    bin: str
    scheme: str = ""
    kind: str = ""
    category: str = ""
    bank: str = ""
    country: str = ""
    country_code: str = ""
    brand_key: str = ""
    brand_label: str = ""
    length: Optional[int] = None
    luhn: Optional[bool] = None
    source: str = "offline"
    approx: bool = False
    latency_ms: float = 0.0
    note: str = ""

    @property
    def flag(self) -> str:
        return flag_for(self.country_code)

    @property
    def kind_label(self) -> str:
        mapping = {
            "credit": "Crédito",
            "debit": "Débito",
            "prepaid": "Pré-pago",
            "charge": "Charge",
            "both": "Crédito/Débito",
        }
        return mapping.get(self.kind.lower(), self.kind or "—")

    @property
    def category_label(self) -> str:
        mapping = {
            "classic": "Classic",
            "gold": "Gold",
            "platinum": "Platinum",
            "black": "Black",
            "infinite": "Infinite",
            "signature": "Signature",
            "standard": "Standard",
            "business": "Business",
            "corporate": "Corporate",
            "premium": "Premium",
            "titanium": "Titanium",
            "world": "World",
            "electron": "Electron",
        }
        return mapping.get(self.category.lower(), self.category or "—")

    def as_dict(self) -> Dict[str, Any]:
        payload = asdict(self)
        payload["flag"] = self.flag
        payload["kind_label"] = self.kind_label
        return payload

    @classmethod
    def from_dict(cls, payload: Dict[str, Any]) -> "BinInfo":
        allowed = {key: value for key, value in payload.items() if key in cls.__dataclass_fields__}
        return cls(**allowed)


TEST_BIN_BANKS: Dict[str, Tuple[str, str, str, str]] = {
    "411111": ("Visa", "credit", "BIN de teste da industria", "US"),
    "424242": ("Visa", "credit", "BIN de teste da industria", "US"),
    "401288": ("Visa", "credit", "BIN de teste da industria", "US"),
    "400005": ("Visa", "debit", "BIN de teste da industria", "US"),
    "555555": ("Mastercard", "credit", "BIN de teste da industria", "US"),
    "520082": ("Mastercard", "debit", "BIN de teste da industria", "US"),
    "510510": ("Mastercard", "credit", "BIN de teste da industria", "US"),
    "222300": ("Mastercard", "credit", "BIN de teste da industria", "US"),
    "378282": ("Amex", "credit", "BIN de teste da industria", "US"),
    "371449": ("Amex", "credit", "BIN de teste da industria", "US"),
    "305693": ("Diners", "credit", "BIN de teste da industria", "US"),
    "385200": ("Diners", "credit", "BIN de teste da industria", "US"),
    "601111": ("Discover", "credit", "BIN de teste da industria", "US"),
    "601100": ("Discover", "credit", "BIN de teste da industria", "US"),
    "353011": ("JCB", "credit", "BIN de teste da industria", "JP"),
    "356600": ("JCB", "credit", "BIN de teste da industria", "JP"),
    "620000": ("UnionPay", "credit", "BIN de teste da industria", "CN"),
    "636297": ("Elo", "credit", "BIN de teste Elo", "BR"),
    "506699": ("Elo", "credit", "BIN de teste Elo", "BR"),
    "606282": ("Hipercard", "credit", "BIN de teste Hipercard", "BR"),
    "384100": ("Hipercard", "credit", "BIN de teste Hipercard", "BR"),
    "457173": ("Visa", "debit", "Jyske Bank", "DK"),
    "516230": ("Mastercard", "credit", "banco digital brasileiro", "BR"),
    "516231": ("Mastercard", "credit", "banco digital brasileiro", "BR"),
    "516292": ("Mastercard", "credit", "banco digital brasileiro", "BR"),
    "518364": ("Mastercard", "credit", "banco digital brasileiro", "BR"),
}

LOCAL_BINS: Dict[str, Dict[str, Any]] = {}
for _bin, (_bank, _kind, _bank_name, _country) in TEST_BIN_BANKS.items():
    LOCAL_BINS[_bin] = {
        "bank": _bank_name,
        "kind": _kind,
        "country_code": _country,
        "country": COUNTRY_FALLBACK.get(_country, _country),
        "approx": not _bank_name.startswith("BIN"),
        "source": "base-offline",
    }


class ProxyPool:
    def __init__(self, proxies: Optional[Sequence[str]] = None) -> None:
        self.proxies = [item.strip() for item in (proxies or []) if item and item.strip()]
        self._lock = threading.Lock()
        self._index = 0

    def __bool__(self) -> bool:
        return bool(self.proxies)

    def next(self) -> Optional[str]:
        if not self.proxies:
            return None
        with self._lock:
            proxy = self.proxies[self._index % len(self.proxies)]
            self._index += 1
            return proxy

    @classmethod
    def from_env(cls) -> "ProxyPool":
        values: List[str] = []
        for key in ("LBIN_PROXY", "HTTPS_PROXY", "https_proxy", "ALL_PROXY", "all_proxy"):
            raw = os.environ.get(key, "")
            if raw:
                values.extend(part.strip() for part in raw.split(",") if part.strip())
        return cls(values)


class HttpClient:
    def __init__(
        self,
        timeout: float = 6.0,
        retries: int = 2,
        rate: float = 4.0,
        proxies: Optional[ProxyPool] = None,
        user_agents: Sequence[str] = USER_AGENTS,
        verbose: bool = False,
    ) -> None:
        self.timeout = max(1.0, float(timeout))
        self.retries = max(0, int(retries))
        self.rate = max(0.1, float(rate))
        self.proxies = proxies or ProxyPool.from_env()
        self.user_agents = tuple(user_agents) or USER_AGENTS
        self.verbose = verbose
        self._lock = threading.Lock()
        self._last = 0.0
        self._rng = random.Random()
        self._openers: Dict[Optional[str], urllib.request.OpenerDirector] = {}

    def _throttle(self) -> None:
        with self._lock:
            now = time.monotonic()
            wait = self._last + (1.0 / self.rate) - now
            if wait > 0:
                time.sleep(wait)
                now = time.monotonic()
            self._last = now

    def _opener(self, proxy: Optional[str]) -> urllib.request.OpenerDirector:
        opener = self._openers.get(proxy)
        if opener is None:
            handlers: List[Any] = []
            if proxy:
                handlers.append(urllib.request.ProxyHandler({"http": proxy, "https": proxy}))
            else:
                handlers.append(urllib.request.ProxyHandler({}))
            opener = urllib.request.build_opener(*handlers)
            self._openers[proxy] = opener
        return opener

    def get_json(
        self, url: str, headers: Optional[Dict[str, str]] = None
    ) -> Tuple[Optional[Dict[str, Any]], float, Optional[str]]:
        attempt = 0
        started = time.monotonic()
        last_error = "falha desconhecida"
        while attempt <= self.retries:
            attempt += 1
            proxy = self.proxies.next()
            request_headers = {
                "User-Agent": self._rng.choice(self.user_agents),
                "Accept": "application/json",
                "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
            }
            request_headers.update(headers or {})
            request = urllib.request.Request(url, headers=request_headers)
            self._throttle()
            try:
                with self._opener(proxy).open(request, timeout=self.timeout) as response:
                    payload = response.read().decode("utf-8", "replace")
                data = json.loads(payload) if payload.strip() else {}
                return data, (time.monotonic() - started) * 1000.0, None
            except urllib.error.HTTPError as error:
                if error.code == 404:
                    return None, (time.monotonic() - started) * 1000.0, "nao encontrado"
                if error.code in (429, 403):
                    last_error = "rate limit do provedor (HTTP %d)" % error.code
                    time.sleep(min(8.0, 1.5 * attempt))
                    continue
                last_error = "HTTP %d" % error.code
            except (urllib.error.URLError, TimeoutError, OSError, ValueError) as error:
                last_error = "%s" % (getattr(error, "reason", error),)
            time.sleep(min(4.0, 0.4 * attempt))
        return None, (time.monotonic() - started) * 1000.0, last_error


class Cache:
    def __init__(self, path: Any, ttl_days: int = 30) -> None:
        self.path = path
        self.ttl = ttl_days * 86400
        self._lock = threading.Lock()
        self._data: Dict[str, Any] = {}
        self._dirty = 0
        self.load()

    def load(self) -> None:
        try:
            self._data = json.loads(self.path.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            self._data = {}

    def save(self) -> None:
        try:
            self.path.parent.mkdir(parents=True, exist_ok=True)
            tmp = self.path.with_suffix(".tmp")
            tmp.write_text(json.dumps(self._data, ensure_ascii=False), encoding="utf-8")
            os.replace(str(tmp), str(self.path))
            self._dirty = 0
        except OSError:
            pass

    def get(self, key: str) -> Optional[BinInfo]:
        with self._lock:
            entry = self._data.get(key)
        if not entry:
            return None
        if time.time() - float(entry.get("ts", 0)) > self.ttl:
            return None
        try:
            return BinInfo.from_dict(entry.get("data", {}))
        except TypeError:
            return None

    def put(self, key: str, info: BinInfo) -> None:
        with self._lock:
            self._data[key] = {"ts": time.time(), "data": info.as_dict()}
            self._dirty += 1
            flush = self._dirty >= 25
        if flush:
            self.save()

    def __len__(self) -> int:
        return len(self._data)

    def clear(self) -> int:
        with self._lock:
            size = len(self._data)
            self._data = {}
        self.save()
        return size


def enrich_from_brand(info: BinInfo, bin6: str) -> BinInfo:
    brand = brands_mod.detect(bin6)
    if brand is not None:
        info.brand_key = brand.key
        info.brand_label = brand.name
        if not info.scheme:
            info.scheme = brand.scheme
        if not info.kind:
            info.kind = brand.kind
        if not info.country:
            info.country = brand.country
        if brand.approx:
            info.approx = True
    return info


def local_lookup(bin6: str) -> BinInfo:
    info = BinInfo(bin=bin6, source="offline")
    entry = LOCAL_BINS.get(bin6)
    if entry is None and len(bin6) > 6:
        for size in (8, 7, 6, 5, 4):
            entry = LOCAL_BINS.get(bin6[:size])
            if entry:
                break
    if entry:
        info.bank = entry.get("bank", "")
        info.kind = entry.get("kind", "")
        info.country = entry.get("country", "")
        info.country_code = entry.get("country_code", "")
        info.approx = bool(entry.get("approx", False))
        info.source = entry.get("source", "base-offline")
    return enrich_from_brand(info, bin6)


def parse_binlist(payload: Dict[str, Any], bin6: str, latency: float) -> BinInfo:
    country = payload.get("country") or {}
    bank = payload.get("bank") or {}
    number = payload.get("number") or {}
    info = BinInfo(bin=bin6, source="binlist.net", latency_ms=latency)
    info.scheme = str(payload.get("scheme", "")).title()
    info.kind = str(payload.get("type", ""))
    info.category = str(payload.get("brand", ""))
    info.bank = str(bank.get("name", ""))
    info.country = str(country.get("name", ""))
    info.country_code = str(country.get("alpha2", ""))
    info.length = number.get("length")
    info.luhn = number.get("luhn")
    return enrich_from_brand(info, bin6)


def parse_bincodes(payload: Dict[str, Any], bin6: str, latency: float) -> BinInfo:
    info = BinInfo(bin=bin6, source="bincodes.com", latency_ms=latency)
    info.scheme = str(payload.get("card", "") or payload.get("brand", "")).title()
    info.kind = str(payload.get("type", "")).lower()
    info.category = str(payload.get("level", ""))
    info.bank = str(payload.get("bank", ""))
    info.country = str(payload.get("country", ""))
    info.country_code = str(payload.get("iso", "") or payload.get("countrycode", "")).upper()
    return enrich_from_brand(info, bin6)


class DemoProvider:
    BANKS = (
        ("Nubank", "BR", "credit", "black"),
        ("Itaú Unibanco", "BR", "credit", "platinum"),
        ("Banco do Brasil", "BR", "credit", "ouro"),
        ("Santander Brasil", "BR", "credit", "classic"),
        ("Intermedium", "BR", "debit", "standard"),
        ("C6 Bank", "BR", "credit", "black"),
        ("Bradesco", "BR", "credit", "platinum"),
        ("Caixa Econômica", "BR", "debit", "standard"),
        ("Mercado Pago", "BR", "prepaid", "standard"),
        ("JPMorgan Chase", "US", "credit", "signature"),
        ("Barclays", "GB", "debit", "standard"),
        ("Jyske Bank", "DK", "debit", "standard"),
        ("Banco Nacional", "AR", "credit", "gold"),
        ("Bancolombia", "CO", "credit", "classic"),
        ("Revolut", "LT", "prepaid", "standard"),
    )

    def lookup(self, bin6: str) -> BinInfo:
        seed = int(bin6 or "0")
        bank, country, kind, category = self.BANKS[seed % len(self.BANKS)]
        info = BinInfo(
            bin=bin6,
            scheme="",
            kind=kind,
            category=category,
            bank=bank,
            country=COUNTRY_FALLBACK.get(country, country),
            country_code=country,
            source="demo",
            latency_ms=18.0 + (seed % 90) / 2.0,
            note="modo demonstracao",
        )
        return enrich_from_brand(info, bin6)


class BinResolver:
    def __init__(
        self,
        config: Any = None,
        cache: Optional[Cache] = None,
        client: Optional[HttpClient] = None,
        demo: bool = False,
    ) -> None:
        self.config = config
        self.demo = demo
        self.cache = cache
        self.client = client
        self.demo_provider = DemoProvider()
        self._memory: Dict[str, BinInfo] = {}
        self._lock = threading.Lock()

    @property
    def providers(self) -> List[str]:
        if self.config is None:
            return ["binlist"]
        return list(self.config.get("network", "providers", ["binlist"]) or [])

    @property
    def offline_first(self) -> bool:
        if self.config is None:
            return True
        return bool(self.config.get("network", "offline_first", True))

    def resolve(
        self,
        value: str,
        allow_network: bool = True,
        bank_hint: str = "",
        kind_hint: str = "",
    ) -> BinInfo:
        bin6 = normalize_bin(value)
        if len(bin6) < 6:
            info = local_lookup(bin6)
            info.note = info.note or "BIN incompleto"
            return info
        if self.demo:
            return self._apply_hints(self.demo_provider.lookup(bin6), bank_hint, kind_hint)
        with self._lock:
            cached = self._memory.get(bin6)
        if cached is not None:
            return self._apply_hints(cached, bank_hint, kind_hint)
        if self.cache is not None:
            stored = self.cache.get(bin6)
            if stored is not None:
                with self._lock:
                    self._memory[bin6] = stored
                return self._apply_hints(stored, bank_hint, kind_hint)
        info = local_lookup(bin6) if self.offline_first else BinInfo(bin=bin6, source="offline")
        needs_network = allow_network and (not self.offline_first or not info.bank or info.approx)
        if needs_network and self.client is not None:
            remote = self._fetch_remote(bin6)
            if remote is not None and (remote.bank or remote.scheme):
                merged = self._merge(info, remote)
                info = merged
        if not info.bank:
            info.note = info.note or "sem dados de banco (modo offline)"
        with self._lock:
            self._memory[bin6] = info
        if self.cache is not None and info.source != "offline":
            self.cache.put(bin6, info)
        return self._apply_hints(info, bank_hint, kind_hint)

    def _apply_hints(self, info: BinInfo, bank_hint: str, kind_hint: str) -> BinInfo:
        if bank_hint and not info.bank:
            info.bank = bank_hint
        if kind_hint and not info.kind:
            info.kind = kind_hint
        return info

    def _merge(self, local: BinInfo, remote: BinInfo) -> BinInfo:
        merged = BinInfo(bin=local.bin)
        merged.scheme = remote.scheme or local.scheme
        merged.kind = remote.kind or local.kind
        merged.category = remote.category or local.category
        merged.bank = remote.bank or local.bank
        merged.country = remote.country or local.country
        merged.country_code = remote.country_code or local.country_code
        merged.brand_key = remote.brand_key or local.brand_key
        merged.brand_label = remote.brand_label or local.brand_label
        merged.length = remote.length or local.length
        merged.luhn = remote.luhn
        merged.source = remote.source
        merged.approx = False
        merged.latency_ms = remote.latency_ms
        merged.note = remote.note
        return merged

    def _fetch_remote(self, bin6: str) -> Optional[BinInfo]:
        for provider in self.providers:
            if provider == "binlist":
                data, latency, error = self.client.get_json(
                    "https://lookup.binlist.net/" + bin6, {"Accept-Version": "3"}
                )
                if data:
                    return parse_binlist(data, bin6, latency)
                if error:
                    self._last_error(bin6, error)
            elif provider == "bincodes":
                key = ""
                if self.config is not None:
                    key = str(self.config.get("network", "bincodes_key", "") or "")
                if not key:
                    continue
                url = "https://api.bincodes.com/bin/?format=json&api_key=%s&bin=%s" % (
                    urllib.parse.quote(key),
                    bin6,
                )
                data, latency, error = self.client.get_json(url)
                if data:
                    return parse_bincodes(data, bin6, latency)
                if error:
                    self._last_error(bin6, error)
        return None

    def _last_error(self, bin6: str, error: str) -> None:
        with self._lock:
            current = self._memory.get(bin6)
        if current is None:
            return
        current.note = error

    def resolve_many(
        self,
        values: Sequence[str],
        workers: int = 8,
        allow_network: bool = True,
        on_result: Optional[Callable[[int, BinInfo], None]] = None,
        should_stop: Optional[Callable[[], bool]] = None,
    ) -> List[BinInfo]:
        results: List[Optional[BinInfo]] = [None] * len(values)
        if not values:
            return []
        max_workers = max(1, min(int(workers), 32, len(values)))
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            futures = {
                executor.submit(self.resolve, value, allow_network): index
                for index, value in enumerate(values)
            }
            done = 0
            for future in as_completed(futures):
                index = futures[future]
                try:
                    info = future.result()
                except Exception as error:
                    info = BinInfo(bin=normalize_bin(values[index]), note="erro: %s" % error)
                results[index] = info
                done += 1
                if on_result is not None:
                    on_result(done, info)
                if should_stop is not None and should_stop():
                    for pending in futures:
                        pending.cancel()
                    break
        return [item for item in results if item is not None]
