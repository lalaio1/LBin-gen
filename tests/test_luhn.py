from __future__ import annotations

import unittest

from lbin.core import brands, luhn


class LuhnTests(unittest.TestCase):
    def test_known_valid_numbers(self) -> None:
        for number in (
            "4111111111111111",
            "4242424242424242",
            "5555555555554444",
            "378282246310005",
            "6011111111111117",
            "6200000000000005",
            "6062825624254001",
        ):
            self.assertTrue(luhn.is_valid(number), number)

    def test_known_invalid_numbers(self) -> None:
        for number in ("4111111111111112", "1234567890123456", "1", ""):
            self.assertFalse(luhn.is_valid(number), number)

    def test_check_digit(self) -> None:
        self.assertEqual(luhn.check_digit("411111111111111"), "1")
        self.assertEqual(luhn.complete("411111111111111"), "4111111111111111")
        self.assertTrue(luhn.is_valid(luhn.complete("457173000000000")))

    def test_digits_only(self) -> None:
        self.assertEqual(luhn.digits_only("4111 1111-1111 1111"), "4111111111111111")


class BrandTests(unittest.TestCase):
    def test_detection(self) -> None:
        cases = {
            "4111111111111111": "visa",
            "4242424242424242": "visa",
            "4026000000000000": "visa_electron",
            "5555555555554444": "mastercard",
            "2223003122003222": "mastercard",
            "378282246310005": "amex",
            "30569309025904": "diners",
            "6011111111111117": "discover",
            "3530111333300000": "jcb",
            "6200000000000005": "unionpay",
            "6062825624254001": "hipercard",
            "6362970000457013": "elo",
            "2200000000000004": "mir",
        }
        for number, expected in cases.items():
            brand = brands.detect(number)
            self.assertIsNotNone(brand, number)
            self.assertEqual(brand.key, expected, "%s -> %s" % (number, brand.key if brand else None))

    def test_lookup_helpers(self) -> None:
        self.assertEqual(brands.by_name("MasterCard").key, "mastercard")
        self.assertEqual(brands.by_key("mc").key, "mastercard")
        self.assertIn(16, brands.by_key("visa").lengths)
        self.assertEqual(brands.brand_color("visa"), brands.by_key("visa").color)
        self.assertEqual(brands.brand_color("inexistente"), brands.DEFAULT_COLOR)

    def test_amex_length(self) -> None:
        self.assertEqual(brands.by_key("amex").lengths, (15,))


if __name__ == "__main__":
    unittest.main()
