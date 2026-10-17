from __future__ import annotations

import random
import re
from dataclasses import dataclass, field
from datetime import datetime
from typing import Dict, Iterator, List, Optional, Sequence, Tuple

from . import brands as brands_mod
from .luhn import check_digit, is_valid

__all__ = [
    "DEFAULT_LENGTH",
    "Card",
    "normalize_spec",
    "has_wildcards",
    "spec_bin",
    "generate_number",
    "generate",
    "random_expiry",
    "random_cvv",
    "format_number",
    "mask_number",
    "HolderFactory",
]

DEFAULT_LENGTH = 16
_SPEC_CLEAN = re.compile(r"[^0-9x\*]")
_WILD = "x*"

FIRST_NAMES: Tuple[str, ...] = (
    "ANA", "BEATRIZ", "BRUNA", "CAMILA", "CARLA", "CLARA", "DANIELA", "DEBORA", "EDUARDA", "ELISA",
    "FERNANDA", "GABRIELA", "GIULIA", "HELENA", "ISABELA", "JULIA", "LARISSA", "LAURA", "LETICIA",
    "LUANA", "MARCELA", "MARIANA", "MILENA", "NATALIA", "PATRICIA", "RAFAELA", "RENATA", "SABRINA",
    "SOFIA", "VALENTINA", "VITORIA", "YASMIN", "ALEXANDRE", "ANDRE", "ANTONIO", "ARTHUR", "BRUNO",
    "CAIO", "CARLOS", "DANIEL", "DAVI", "DIEGO", "EDUARDO", "ENZO", "FABIO", "FELIPE", "FERNANDO",
    "GABRIEL", "GUSTAVO", "HEITOR", "HENRIQUE", "IGOR", "JOAO", "JOSE", "LEONARDO", "LUCAS",
    "MARCELO", "MATEUS", "MATHEUS", "MURILO", "NICOLAS", "OTAVIO", "PAULO", "PEDRO", "RAFAEL",
    "RENAN", "RICARDO", "ROBERTO", "RODRIGO", "SAMUEL", "THIAGO", "TIAGO", "VICTOR", "VINICIUS",
    "WESLEY", "WILLIAN", "YURI",
)

LAST_NAMES: Tuple[str, ...] = (
    "ALMEIDA", "ALVES", "ANDRADE", "ARAUJO", "BARBOSA", "BATISTA", "BORGES", "CARDOSO", "CARVALHO",
    "CASTRO", "COSTA", "CUNHA", "DIAS", "DUARTE", "FARIAS", "FERREIRA", "FONSECA", "FREITAS",
    "GOMES", "GONCALVES", "LIMA", "LOPES", "MACHADO", "MARTINS", "MEDEIROS", "MENDES", "MONTEIRO",
    "MORAES", "MOREIRA", "NASCIMENTO", "NEVES", "NUNES", "OLIVEIRA", "PEREIRA", "PINTO", "RAMOS",
    "REIS", "RIBEIRO", "ROCHA", "RODRIGUES", "SALES", "SANTANA", "SANTOS", "SILVA", "SOARES",
    "SOUZA", "TEIXEIRA", "VIEIRA",
)


@dataclass
class Card:
    number: str
    month: Optional[int] = None
    year: Optional[int] = None
    cvv: Optional[str] = None
    holder: Optional[str] = None
    brand_key: Optional[str] = None
    scheme: Optional[str] = None
    card_type: Optional[str] = None
    bank: Optional[str] = None
    country: Optional[str] = None
    source: str = "offline"
    meta: Dict[str, str] = field(default_factory=dict)

    @property
    def length(self) -> int:
        return len(self.number)

    @property
    def bin(self) -> str:
        return self.number[:6]

    @property
    def last4(self) -> str:
        return self.number[-4:]

    @property
    def brand_name(self) -> str:
        brand = brands_mod.by_key(self.brand_key or "")
        return brand.name if brand else (self.scheme or "Desconhecida")

    @property
    def formatted(self) -> str:
        return format_number(self.number, "dashed")

    @property
    def expiry(self) -> str:
        if self.month is None or self.year is None:
            return ""
        return "%02d/%02d" % (self.month, self.year % 100)

    @property
    def combo(self) -> str:
        parts = [self.number]
        if self.expiry:
            parts.append("%02d|%02d" % (self.month, self.year % 100))
        if self.cvv:
            parts.append(self.cvv)
        return "|".join(parts)

    @property
    def masked(self) -> str:
        return mask_number(self.number)

    @property
    def luhn_ok(self) -> bool:
        return is_valid(self.number)

    def as_dict(self) -> Dict[str, object]:
        payload: Dict[str, object] = {
            "number": self.number,
            "bin": self.bin,
            "length": self.length,
            "brand": self.brand_key,
            "scheme": self.scheme,
            "type": self.card_type,
            "bank": self.bank,
            "country": self.country,
            "month": "%02d" % self.month if self.month is not None else "",
            "year": "%02d" % (self.year % 100) if self.year is not None else "",
            "year_full": 2000 + self.year if self.year is not None else "",
            "expiry": self.expiry,
            "cvv": self.cvv,
            "cvc": self.cvv,
            "holder": self.holder,
            "luhn": self.luhn_ok,
            "source": self.source,
        }
        for key, value in self.meta.items():
            payload.setdefault(key, value)
        return payload

    def __str__(self) -> str:
        return self.combo if (self.cvv or self.month is not None) else self.number


def normalize_spec(spec: str) -> str:
    return _SPEC_CLEAN.sub("", (spec or "").strip().lower())


def has_wildcards(spec: str) -> bool:
    return any(ch in _WILD for ch in spec)


def spec_bin(spec: str) -> str:
    clean = normalize_spec(spec)
    return clean[:6]


def generate_number(
    spec: str,
    length: Optional[int] = None,
    rng: Optional[random.Random] = None,
    luhn: bool = True,
) -> str:
    rng = rng or random
    clean = normalize_spec(spec)
    wild = has_wildcards(clean)
    if not clean and length is None:
        raise ValueError("informe um BIN ou um comprimento alvo")
    if not clean:
        clean = ""
    if length is None:
        length = len(clean) if wild else max(DEFAULT_LENGTH, len(clean) + 1)
    length = int(length)
    if length < 2:
        raise ValueError("o comprimento minimo e 2 digitos")
    if len(clean) > length:
        raise ValueError(
            "o BIN informado tem %d digitos, mais que o comprimento alvo (%d)" % (len(clean), length)
        )
    tail_locked = bool(clean) and clean[-1] not in _WILD and len(clean) == length and not wild
    if tail_locked:
        return clean
    filled = "".join(str(rng.randrange(10)) if ch in _WILD else ch for ch in clean)
    body = filled + "".join(str(rng.randrange(10)) for _ in range(length - 1 - len(filled)))
    if luhn:
        return body + check_digit(body)
    return body + str(rng.randrange(10))


def random_expiry(
    rng: Optional[random.Random] = None,
    span_years: int = 5,
    base: Optional[datetime] = None,
) -> Tuple[int, int]:
    rng = rng or random
    now = base or datetime.now()
    month = rng.randrange(1, 13)
    year = (now.year + rng.randrange(1, max(2, span_years + 1))) % 100
    return month, year


def random_cvv(
    rng: Optional[random.Random] = None,
    brand_key: Optional[str] = None,
    length: Optional[int] = None,
) -> str:
    rng = rng or random
    digits = length or (4 if brand_key == "amex" else 3)
    return "".join(str(rng.randrange(10)) for _ in range(digits))


class HolderFactory:
    def __init__(self, rng: Optional[random.Random] = None) -> None:
        self.rng = rng or random.Random()

    def holder(self) -> str:
        return "%s %s" % (self.rng.choice(FIRST_NAMES), self.rng.choice(LAST_NAMES))

    def initials(self) -> str:
        first, last = self.holder().split(" ", 1)
        return "%s %s." % (first, last[:1])


def format_number(number: str, style: str = "dashed") -> str:
    digits = "".join(ch for ch in number if ch.isdigit())
    if style == "plain":
        return digits
    if style == "spaced":
        style = "dashed"
    if style == "dashed":
        groups: List[str] = []
        if len(digits) == 15:
            groups = [digits[0:4], digits[4:10], digits[10:15]]
        elif len(digits) == 14:
            groups = [digits[0:4], digits[4:10], digits[10:14]]
        else:
            for index in range(0, len(digits), 4):
                groups.append(digits[index : index + 4])
        return " ".join(groups)
    if style == "hyphen":
        return "-".join(
            digits[index : index + 4] for index in range(0, len(digits), 4)
        )
    return digits


def mask_number(number: str, keep_first: int = 6, keep_last: int = 4) -> str:
    digits = "".join(ch for ch in number if ch.isdigit())
    if len(digits) <= keep_first + keep_last:
        return digits
    hidden = len(digits) - keep_first - keep_last
    return "%s%s%s" % (digits[:keep_first], "*" * hidden, digits[-keep_last:])


def generate(
    spec: str = "",
    count: int = 1,
    length: Optional[int] = None,
    brand: Optional[str] = None,
    with_expiry: bool = True,
    with_cvv: bool = True,
    with_holder: bool = False,
    span_years: int = 5,
    rng: Optional[random.Random] = None,
    unique: bool = True,
) -> Iterator[Card]:
    rng = rng or random.Random()
    brand_obj = brands_mod.by_key(brand) if brand else None
    if length is None and brand_obj is not None:
        length = brand_obj.lengths[-1] if len(brand_obj.lengths) > 2 else brand_obj.lengths[0]
    resolved_length = length or DEFAULT_LENGTH
    holder_factory = HolderFactory(rng)
    seen: set = set()
    produced = 0
    guard = 0
    while produced < count:
        guard += 1
        if guard > count * 40 + 2000:
            raise RuntimeError("nao foi possivel gerar numeros unicos com esse BIN")
        number = generate_number(spec, resolved_length, rng)
        if unique and number in seen:
            continue
        seen.add(number)
        detected = brands_mod.detect(number) or brand_obj
        card = Card(number=number)
        if detected is not None:
            card.brand_key = detected.key
            card.scheme = detected.scheme
            card.card_type = detected.kind
        if with_expiry:
            month, year = random_expiry(rng, span_years)
            card.month = month
            card.year = year
        if with_cvv:
            card.cvv = random_cvv(rng, card.brand_key)
        if with_holder:
            card.holder = holder_factory.holder()
        produced += 1
        yield card
