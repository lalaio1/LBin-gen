from __future__ import annotations

__all__ = ["digits_only", "luhn_sum", "check_digit", "is_valid", "complete"]

_DOUBLE = (0, 2, 4, 6, 8, 1, 3, 5, 7, 9)


def digits_only(value: str) -> str:
    return "".join(ch for ch in value if ch.isdigit())


def luhn_sum(number: str) -> int:
    digits = digits_only(number)
    total = 0
    parity = len(digits) % 2
    for index, ch in enumerate(digits):
        value = ord(ch) - 48
        total += _DOUBLE[value] if (index % 2) == parity else value
    return total


def check_digit(partial: str) -> str:
    partial = digits_only(partial)
    if not partial:
        raise ValueError("partial number is empty")
    return str((10 - (luhn_sum(partial + "0") % 10)) % 10)


def complete(partial: str) -> str:
    return digits_only(partial) + check_digit(partial)


def is_valid(number: str) -> bool:
    digits = digits_only(number)
    if len(digits) < 2:
        return False
    return (luhn_sum(digits) % 10) == 0
