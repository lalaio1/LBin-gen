from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Dict, Iterable, List, Optional, Tuple

__all__ = [
    "Brand",
    "BRANDS",
    "TEST_BINS",
    "detect",
    "by_key",
    "by_name",
    "keys",
    "labels",
    "guess_lengths",
    "brand_color",
    "DEFAULT_COLOR",
]

DEFAULT_COLOR = "#9aa4b2"


@dataclass(frozen=True)
class Brand:
    key: str
    name: str
    scheme: str
    kind: str
    country: str
    lengths: Tuple[int, ...]
    patterns: Tuple[str, ...]
    color: str
    debit_only: bool = False
    approx: bool = False
    aliases: Tuple[str, ...] = field(default=())

    def matches(self, number: str) -> bool:
        clean = "".join(ch for ch in number if ch.isdigit())
        if not clean:
            return False
        return any(pattern.match(clean) for pattern in compile_patterns(self.patterns))

    @property
    def kind_label(self) -> str:
        mapping = {
            "credit": "Crédito",
            "debit": "Débito",
            "prepaid": "Pré-pago",
            "charge": "Charge",
            "both": "Crédito/Débito",
        }
        return mapping.get((self.kind or "").lower(), self.kind or "—")

    def allows_length(self, length: int) -> bool:
        return length in self.lengths


_PATTERN_CACHE: Dict[Tuple[str, ...], Tuple[re.Pattern[str], ...]] = {}


def compile_patterns(patterns: Iterable[str]) -> Tuple[re.Pattern[str], ...]:
    key = tuple(patterns)
    cached = _PATTERN_CACHE.get(key)
    if cached is None:
        cached = tuple(re.compile(pattern) for pattern in key)
        _PATTERN_CACHE[key] = cached
    return cached


BRANDS: Tuple[Brand, ...] = (
    Brand(
        key="hipercard",
        name="Hipercard",
        scheme="Hipercard",
        kind="credit",
        country="Brasil",
        lengths=(16,),
        patterns=(r"^(606282|3841\d\d|637095|637568|637599|637609|637612)",),
        color="#e0344b",
        aliases=("hiper",),
    ),
    Brand(
        key="elo",
        name="Elo",
        scheme="Elo",
        kind="both",
        country="Brasil",
        lengths=(16,),
        patterns=(
            r"^(4011(78|79)|4312(74|75)|4389(35|36|37)|4514(16|17)|4576(31|32|33)|"
            r"5041(75|76)|5066(99|70)|5067(00|01)|6277(80|81)|6362(97|68)|6363(68|69)|"
            r"6504(03|04|05|06|07|08|09)|6516(52|53|54)|6550(21|22|23|24|25|26))",
        ),
        color="#ffb400",
        aliases=("elo card",),
    ),
    Brand(
        key="elo_legacy",
        name="Elo (faixa antiga)",
        scheme="Elo",
        kind="both",
        country="Brasil",
        lengths=(16,),
        patterns=(r"^(509\d{3}|6277\d{2}|6362\d{2}|6363\d{2}|650\d{3}|6516\d{2}|6550\d{2})",),
        color="#ffb400",
        approx=True,
    ),
    Brand(
        key="aura",
        name="Aura",
        scheme="Aura",
        kind="both",
        country="Brasil",
        lengths=(16,),
        patterns=(r"^(5078|5079|5080)",),
        color="#4fc3f7",
        approx=True,
    ),
    Brand(
        key="cabal",
        name="Cabal",
        scheme="Cabal",
        kind="both",
        country="Brasil",
        lengths=(16,),
        patterns=(r"^(603522|604201|627170|628286|604205|603956)",),
        color="#7e57c2",
    ),
    Brand(
        key="visa_electron",
        name="Visa Electron",
        scheme="Visa",
        kind="debit",
        country="Internacional",
        lengths=(16,),
        patterns=(r"^(4026|417500|4508|4844|4913|4917)",),
        color="#1a1f71",
        debit_only=True,
    ),
    Brand(
        key="visa",
        name="Visa",
        scheme="Visa",
        kind="both",
        country="Internacional",
        lengths=(13, 16, 18, 19),
        patterns=(r"^4",),
        color="#1a1f71",
    ),
    Brand(
        key="maestro",
        name="Maestro",
        scheme="Maestro",
        kind="debit",
        country="Internacional",
        lengths=(12, 13, 14, 15, 16, 17, 18, 19),
        patterns=(r"^(5018|5020|5038|5893|6304|6759|676[1-3]|0604|6390)",),
        color="#eb001b",
        debit_only=True,
    ),
    Brand(
        key="mastercard",
        name="Mastercard",
        scheme="Mastercard",
        kind="both",
        country="Internacional",
        lengths=(16,),
        patterns=(r"^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d\d|27[01]\d|2720)",),
        color="#eb001b",
        aliases=("mc", "master"),
    ),
    Brand(
        key="amex",
        name="American Express",
        scheme="Amex",
        kind="both",
        country="Internacional",
        lengths=(15,),
        patterns=(r"^3[47]",),
        color="#2e77bc",
        aliases=("american express", "americanexpress"),
    ),
    Brand(
        key="diners",
        name="Diners Club",
        scheme="Diners",
        kind="both",
        country="Internacional",
        lengths=(14, 16, 19),
        patterns=(r"^(30[0-5]\d|3095|36\d\d|38\d\d|39\d\d)",),
        color="#0079be",
        aliases=("diners club", "dinners"),
    ),
    Brand(
        key="discover",
        name="Discover",
        scheme="Discover",
        kind="both",
        country="Internacional",
        lengths=(16, 19),
        patterns=(
            r"^(6011|64[4-9]\d|65\d{2}|622(12[6-9]|1[3-9]\d|[2-8]\d\d|9[01]\d|92[0-5]))",
        ),
        color="#ff6000",
    ),
    Brand(
        key="jcb",
        name="JCB",
        scheme="JCB",
        kind="both",
        country="Japão",
        lengths=(16, 17, 18, 19),
        patterns=(r"^(35(2[89]|[3-8]\d))",),
        color="#0b4ea2",
    ),
    Brand(
        key="unionpay",
        name="UnionPay",
        scheme="UnionPay",
        kind="both",
        country="China",
        lengths=(16, 17, 18, 19),
        patterns=(r"^62",),
        color="#d10429",
        aliases=("union pay", "up"),
    ),
    Brand(
        key="mir",
        name="Mir",
        scheme="Mir",
        kind="both",
        country="Rússia",
        lengths=(16,),
        patterns=(r"^220[0-4]",),
        color="#0f754e",
    ),
    Brand(
        key="troy",
        name="Troy",
        scheme="Troy",
        kind="both",
        country="Turquia",
        lengths=(16,),
        patterns=(r"^9792",),
        color="#f7941d",
    ),
    Brand(
        key="verve",
        name="Verve",
        scheme="Verve",
        kind="both",
        country="Nigéria",
        lengths=(16, 19),
        patterns=(r"^(5060|5061|6500)",),
        color="#00a0df",
    ),
    Brand(
        key="interpayment",
        name="InterPayment",
        scheme="InterPayment",
        kind="both",
        country="Internacional",
        lengths=(16, 19),
        patterns=(r"^636",),
        color="#8bc34a",
    ),
    Brand(
        key="rupay",
        name="RuPay",
        scheme="RuPay",
        kind="both",
        country="Índia",
        lengths=(16,),
        patterns=(r"^(60|65|81|82|508)",),
        color="#097d43",
        approx=True,
    ),
    Brand(
        key="dankort",
        name="Dankort",
        scheme="Dankort",
        kind="debit",
        country="Dinamarca",
        lengths=(16,),
        patterns=(r"^(5019|4571)",),
        color="#e53935",
        debit_only=True,
    ),
    Brand(
        key="bc",
        name="BC Card",
        scheme="BC",
        kind="both",
        country="Coreia do Sul",
        lengths=(16,),
        patterns=(r"^6556",),
        color="#00b0f0",
    ),
    Brand(
        key="naranja",
        name="Naranja",
        scheme="Naranja",
        kind="credit",
        country="Argentina",
        lengths=(16,),
        patterns=(r"^589562",),
        color="#ff7f27",
    ),
    Brand(
        key="enroute",
        name="enRoute",
        scheme="enRoute",
        kind="credit",
        country="Canadá",
        lengths=(15,),
        patterns=(r"^(2014|2149)",),
        color="#0060a9",
    ),
)

TEST_BINS: Tuple[Tuple[str, str, str], ...] = (
    ("4111111111111111", "visa", "BIN de teste Visa"),
    ("4242424242424242", "visa", "BIN de teste Visa"),
    ("4012888888881881", "visa", "BIN de teste Visa"),
    ("4000056655665556", "visa", "BIN de teste Visa Debit"),
    ("5555555555554444", "mastercard", "BIN de teste Mastercard"),
    ("5200828282828210", "mastercard", "BIN de teste Mastercard Debit"),
    ("5105105105105100", "mastercard", "BIN de teste Mastercard"),
    ("2223003122003222", "mastercard", "BIN de teste Mastercard 2-series"),
    ("378282246310005", "amex", "BIN de teste Amex"),
    ("371449635398431", "amex", "BIN de teste Amex"),
    ("30569309025904", "diners", "BIN de teste Diners Club"),
    ("38520000023237", "diners", "BIN de teste Diners Club"),
    ("6011111111111117", "discover", "BIN de teste Discover"),
    ("6011000990139424", "discover", "BIN de teste Discover"),
    ("3530111333300000", "jcb", "BIN de teste JCB"),
    ("3566002020360505", "jcb", "BIN de teste JCB"),
    ("6200000000000005", "unionpay", "BIN de teste UnionPay"),
    ("6362970000457013", "elo", "BIN Elo"),
    ("5066991111111118", "elo", "BIN Elo"),
    ("6062825624254001", "hipercard", "BIN Hipercard"),
    ("3841001111222233", "hipercard", "BIN Hipercard"),
)

_BY_KEY: Dict[str, Brand] = {}
for _brand in BRANDS:
    _BY_KEY[_brand.key] = _brand
    for _alias in _brand.aliases:
        _BY_KEY.setdefault(_alias, _brand)


def keys() -> List[str]:
    return [brand.key for brand in BRANDS]


def labels() -> List[Tuple[str, str]]:
    return [(brand.key, brand.name) for brand in BRANDS]


def by_key(key: str) -> Optional[Brand]:
    if not key:
        return None
    return _BY_KEY.get(key.strip().lower())


def by_name(value: str) -> Optional[Brand]:
    target = value.strip().lower()
    if not target:
        return None
    direct = _BY_KEY.get(target)
    if direct:
        return direct
    for brand in BRANDS:
        if target in (brand.name.lower(), brand.scheme.lower()):
            return brand
    for brand in BRANDS:
        if target in brand.name.lower():
            return brand
    return None


def detect(number: str) -> Optional[Brand]:
    clean = "".join(ch for ch in number if ch.isdigit())
    if len(clean) < 2:
        return None
    for brand in BRANDS:
        if brand.matches(clean):
            return brand
    return None


def guess_lengths(number: str) -> Tuple[int, ...]:
    brand = detect(number)
    if brand is None:
        return (16,)
    return brand.lengths


def brand_color(key: Optional[str]) -> str:
    brand = by_key(key) if key else None
    if brand is None:
        return DEFAULT_COLOR
    return brand.color
