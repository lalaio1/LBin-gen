from __future__ import annotations

import random
import re
from dataclasses import dataclass, field
from typing import Dict, Iterable, Iterator, List, Optional, Sequence, Tuple

from . import brands as brands_mod
from .generator import format_number, mask_number

__all__ = [
    "ComboSpec",
    "parse_months",
    "parse_years",
    "total",
    "iter_records",
    "DEFAULT_TEMPLATE",
    "TEMPLATES",
]

DEFAULT_TEMPLATE = "{number}|{month}|{year}|{cvc}"

TEMPLATES: Tuple[Tuple[str, str, str], ...] = (
    ("pipe", "{number}|{month}|{year}|{cvc}", "numero|mes|ano|cvv"),
    ("pipe_slash", "{number}|{month}/{year}|{cvc}", "numero|mes/ano|cvv"),
    ("extended", "{number}|{month}|{year}|{cvc}|{brand}|{bin}", "com marca e bin"),
    ("csv_row", "{number},{month},{year},{cvc}", "linha csv"),
    ("dashed", "{dashed}|{month}/{year}|{cvc}", "numero formatado"),
    ("label", "NUM {number} EXP {month}/{year} CVV {cvc}", "rotulado"),
)

_TOKEN = re.compile(r"\{([a-z_0-9]+)\}")


@dataclass
class ComboSpec:
    numbers: Sequence[str]
    months: Sequence[int]
    years: Sequence[int]
    cvc_length: int = 3
    cvc_from: int = 0
    cvc_to: int = 999
    cvc_mode: str = "range"
    cvc_values: Sequence[str] = field(default_factory=tuple)
    sample: int = 0
    seed: Optional[int] = None
    template: str = DEFAULT_TEMPLATE
    year_full: bool = False
    brand_key: Optional[str] = None

    def values(self) -> Tuple[str, ...]:
        if self.cvc_mode == "list":
            return tuple(self.cvc_values)
        if self.cvc_mode == "range":
            width = self.cvc_length
            return tuple(
                "%0*d" % (width, value) for value in range(self.cvc_from, self.cvc_to + 1)
            )
        return tuple()


def parse_months(value: str) -> List[int]:
    return _parse_int_set(value, 1, 12, "meses")


def parse_years(value: str) -> List[int]:
    return _parse_int_set(value, 0, 99, "anos", pad=True)


def _parse_int_set(value: str, low: int, high: int, label: str, pad: bool = False) -> List[int]:
    text = (value or "").strip().lower()
    if not text or text in ("todos", "all", "*"):
        return list(range(low, high + 1))
    items: List[int] = []
    for chunk in re.split(r"[,\s;]+", text):
        if not chunk:
            continue
        if "-" in chunk[1:]:
            start_text, _, end_text = chunk.partition("-")
            start = _to_int(start_text, label, pad)
            end = _to_int(end_text, label, pad)
            if end < start:
                start, end = end, start
            items.extend(range(start, end + 1))
        else:
            items.append(_to_int(chunk, label, pad))
    result: List[int] = []
    for item in items:
        if item < low or item > high:
            raise ValueError("%s fora do intervalo %d-%d: %s" % (label, low, high, item))
        if item not in result:
            result.append(item)
    return sorted(result)


def _to_int(text: str, label: str, pad: bool) -> int:
    text = text.strip()
    if not text.isdigit():
        raise ValueError("valor invalido para %s: %r" % (label, text))
    value = int(text)
    if pad and value >= 100:
        value -= 2000
    return value


def _year_value(year: int, full: bool) -> object:
    if full:
        return 2000 + year
    return year


def total(spec: ComboSpec) -> int:
    if spec.cvc_mode == "random":
        return len(spec.numbers) * len(spec.months) * len(spec.years) * max(0, spec.sample)
    return len(spec.numbers) * len(spec.months) * len(spec.years) * len(spec.values())


def iter_records(spec: ComboSpec) -> Iterator[Dict[str, object]]:
    values = spec.values()
    rng = random.Random(spec.seed)
    for number in spec.numbers:
        digits = "".join(ch for ch in number if ch.isdigit())
        brand = brands_mod.detect(digits) or brands_mod.by_key(spec.brand_key or "")
        base = {
            "number": digits,
            "dashed": format_number(digits, "dashed"),
            "masked": mask_number(digits),
            "bin": digits[:6],
            "last4": digits[-4:] if len(digits) >= 4 else digits,
            "brand": brand.key if brand else "",
            "brand_name": brand.name if brand else "",
            "scheme": brand.scheme if brand else "",
            "type": brand.kind if brand else "",
            "country": brand.country if brand else "",
            "length": len(digits),
        }
        for month in spec.months:
            for year in spec.years:
                base["month"] = "%02d" % month
                base["year"] = "%02d" % year if not spec.year_full else str(2000 + year)
                base["yy"] = "%02d" % year
                base["yyyy"] = str(2000 + year)
                if spec.cvc_mode == "random":
                    for _ in range(max(0, spec.sample)):
                        record = dict(base)
                        record["cvc"] = "%0*d" % (
                            spec.cvc_length,
                            rng.randrange(0, 10 ** spec.cvc_length),
                        )
                        yield record
                else:
                    for cvc in values:
                        record = dict(base)
                        record["cvc"] = cvc
                        yield record


def render_line(template: str, record: Dict[str, object]) -> str:
    return _TOKEN.sub(lambda match: str(record.get(match.group(1), match.group(0))), template)
