from __future__ import annotations

from dataclasses import dataclass, field
from typing import Dict, Iterable, Iterator, List, Optional, Sequence

from . import brands as brands_mod
from .luhn import digits_only, is_valid

__all__ = ["Finding", "Report", "inspect", "validate_lines", "summarize", "extract_numbers"]


def extract_numbers(line: str) -> List[str]:
    found: List[str] = []
    current: List[str] = []
    for ch in line:
        if ch.isdigit():
            current.append(ch)
        else:
            if len(current) >= 12:
                found.append("".join(current))
            current = []
    if len(current) >= 12:
        found.append("".join(current))
    return found


@dataclass
class Finding:
    level: str
    code: str
    message: str


@dataclass
class Report:
    number: str
    digits: str
    brand: Optional[brands_mod.Brand]
    luhn_ok: bool
    length_ok: bool
    brand_known: bool
    findings: List[Finding] = field(default_factory=list)

    @property
    def ok(self) -> bool:
        return self.luhn_ok and self.length_ok and not any(
            finding.level == "error" for finding in self.findings
        )

    @property
    def brand_name(self) -> str:
        return self.brand.name if self.brand else "Desconhecida"

    @property
    def length(self) -> int:
        return len(self.digits)

    def as_dict(self) -> Dict[str, object]:
        return {
            "number": self.digits,
            "brand": self.brand.key if self.brand else None,
            "brand_name": self.brand_name,
            "scheme": self.brand.scheme if self.brand else None,
            "type": self.brand.kind if self.brand else None,
            "country": self.brand.country if self.brand else None,
            "length": self.length,
            "luhn": self.luhn_ok,
            "length_ok": self.length_ok,
            "valid": self.ok,
            "findings": [finding.message for finding in self.findings],
        }


def inspect(number: str) -> Report:
    digits = digits_only(number)
    brand = brands_mod.detect(digits)
    luhn_ok = is_valid(digits)
    length_ok = bool(brand and brand.allows_length(len(digits))) or (
        brand is None and len(digits) in (12, 13, 14, 15, 16, 17, 18, 19)
    )
    findings: List[Finding] = []
    if not digits:
        findings.append(Finding("error", "empty", "nenhum digito encontrado"))
    elif len(digits) < 12:
        findings.append(Finding("error", "short", "menos de 12 digitos"))
    if brand is None:
        findings.append(Finding("warn", "brand", "IIN nao reconhecido pela base offline"))
    elif not brand.allows_length(len(digits)):
        findings.append(
            Finding(
                "warn",
                "length",
                "comprimento %d fora do padrao %s (%s)"
                % (len(digits), brand.name, "/".join(str(item) for item in brand.lengths)),
            )
        )
    if brand is not None and brand.approx:
        findings.append(Finding("info", "approx", "faixa de IIN aproximada, confirme no emissor"))
    if not luhn_ok:
        findings.append(Finding("error", "luhn", "digito verificador (Luhn) invalido"))
    return Report(
        number=number.strip(),
        digits=digits,
        brand=brand,
        luhn_ok=luhn_ok,
        length_ok=length_ok,
        brand_known=brand is not None,
        findings=findings,
    )


def validate_lines(lines: Iterable[str]) -> Iterator[Report]:
    for line in lines:
        for digits in extract_numbers(line) or ([line.strip()] if line.strip().isdigit() else []):
            if len(digits_only(digits)) >= 12:
                yield inspect(digits)


def summarize(reports: Sequence[Report]) -> Dict[str, object]:
    brands: Dict[str, int] = {}
    valid = 0
    for report in reports:
        if report.ok:
            valid += 1
        key = report.brand_name
        brands[key] = brands.get(key, 0) + 1
    total = len(reports)
    return {
        "total": total,
        "valid": valid,
        "invalid": total - valid,
        "rate": (valid / total * 100.0) if total else 0.0,
        "brands": brands,
    }
