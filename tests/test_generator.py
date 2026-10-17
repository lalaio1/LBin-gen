import random
import unittest

from lbin.core import generator


class GeneratorTests(unittest.TestCase):
    def test_generated_numbers_are_valid(self) -> None:
        cards = list(generator.generate("516230", 40, length=16, rng=random.Random(1)))
        self.assertEqual(len(cards), 40)
        for card in cards:
            self.assertTrue(card.luhn_ok, card.number)
            self.assertEqual(len(card.number), 16)
            self.assertTrue(card.number.startswith("516230"))

    def test_unique_numbers(self) -> None:
        cards = list(generator.generate("411111", 500, length=16, rng=random.Random(2)))
        self.assertEqual(len({card.number for card in cards}), 500)

    def test_seed_is_reproducible(self) -> None:
        first = [card.number for card in generator.generate("606282", 20, length=16, rng=random.Random(7))]
        second = [card.number for card in generator.generate("606282", 20, length=16, rng=random.Random(7))]
        self.assertEqual(first, second)

    def test_expiry_and_cvv(self) -> None:
        card = next(iter(generator.generate("457173", 1, length=16, with_expiry=True, with_cvv=True, rng=random.Random(3))))
        self.assertIsNotNone(card.month)
        self.assertIsNotNone(card.year)
        self.assertGreaterEqual(card.month, 1)
        self.assertLessEqual(card.month, 12)
        self.assertRegex(card.cvv, r"^\d{3,4}$")
        self.assertRegex(card.expiry, r"^\d{2}/\d{2}$")

    def test_brand_spec_detection(self) -> None:
        from lbin.core import brands

        brand = brands.detect("6062820000000000")
        self.assertIsNotNone(brand)
        self.assertEqual(brand.key, "hipercard")
        self.assertEqual(generator.spec_bin("606282-extra"), "606282")

    def test_wildcard_spec(self) -> None:
        cards = list(generator.generate("5162xx", 30, length=16, rng=random.Random(4)))
        for card in cards:
            self.assertTrue(card.number.startswith("5162"))
            self.assertTrue(card.luhn_ok)

    def test_payload_keys(self) -> None:
        card = next(iter(generator.generate("411111", 1, length=16, rng=random.Random(5))))
        payload = card.as_dict()
        for key in ("number", "bin", "month", "year", "cvv", "cvc", "brand", "expiry"):
            self.assertIn(key, payload)
        self.assertEqual(payload["cvv"], payload["cvc"])
        self.assertRegex(str(payload["month"]), r"^\d{2}$")
        self.assertRegex(str(payload["year"]), r"^\d{2}$")

    def test_lengths_per_brand(self) -> None:
        for spec, expected in (("411111", 16), ("516230", 16), ("606282", 16)):
            card = next(iter(generator.generate(spec, 1, rng=random.Random(6))))
            self.assertEqual(len(card.number), expected)


if __name__ == "__main__":
    unittest.main()
