import unittest

from lbin.core import brands


class DetectTests(unittest.TestCase):
    def test_test_bins_map_to_expected_brand(self) -> None:
        for number, key, label in brands.TEST_BINS:
            brand = brands.detect(number)
            self.assertIsNotNone(brand, label)
            self.assertEqual(brand.key, key, label)

    def test_first_match_wins(self) -> None:
        self.assertEqual(brands.detect("6362970000000000").key, "elo")
        self.assertEqual(brands.detect("3841000000000000").key, "hipercard")
        self.assertEqual(brands.detect("5078000000000000").key, "aura")

    def test_ignores_separators(self) -> None:
        self.assertEqual(brands.detect("4111-1111 1111").key, "visa")

    def test_short_values(self) -> None:
        self.assertIsNone(brands.detect(""))
        self.assertIsNone(brands.detect("4"))
        self.assertIsNone(brands.detect("x9x"))

    def test_unknown_prefix(self) -> None:
        self.assertIsNone(brands.detect("9999999999999999"))

    def test_guess_lengths(self) -> None:
        self.assertEqual(brands.guess_lengths("411111"), (13, 16, 18, 19))
        self.assertEqual(brands.guess_lengths("378282"), (15,))
        self.assertEqual(brands.guess_lengths("999999"), (16,))


class RegistryTests(unittest.TestCase):
    def test_keys_unique(self) -> None:
        keys = brands.keys()
        self.assertEqual(len(keys), len(set(keys)))
        self.assertEqual(len(keys), len(brands.BRANDS))

    def test_labels_match(self) -> None:
        for key, label in brands.labels():
            self.assertEqual(brands.by_key(key).name, label)

    def test_by_key(self) -> None:
        self.assertEqual(brands.by_key("VISA").key, "visa")
        self.assertEqual(brands.by_key("mc").key, "mastercard")
        self.assertEqual(brands.by_key("master").key, "mastercard")
        self.assertIsNone(brands.by_key(""))
        self.assertIsNone(brands.by_key("nope"))

    def test_by_name(self) -> None:
        self.assertEqual(brands.by_name("visa").key, "visa")
        self.assertEqual(brands.by_name("American Express").key, "amex")
        self.assertEqual(brands.by_name("americanexpress").key, "amex")
        self.assertEqual(brands.by_name("Diners").key, "diners")
        self.assertEqual(brands.by_name("Elo").key, "elo")
        self.assertIsNone(brands.by_name(""))
        self.assertIsNone(brands.by_name("zzz"))

    def test_aliases_resolve(self) -> None:
        for brand in brands.BRANDS:
            for alias in brand.aliases:
                self.assertEqual(brands.by_key(alias).key, brand.key)


class BrandTests(unittest.TestCase):
    def test_kind_label(self) -> None:
        self.assertEqual(brands.by_key("elo").kind_label, "Crédito/Débito")
        self.assertEqual(brands.by_key("hipercard").kind_label, "Crédito")
        self.assertEqual(brands.by_key("maestro").kind_label, "Débito")

    def test_allows_length(self) -> None:
        visa = brands.by_key("visa")
        self.assertTrue(visa.allows_length(16))
        self.assertFalse(visa.allows_length(17))

    def test_matches(self) -> None:
        amex = brands.by_key("amex")
        self.assertTrue(amex.matches("378282246310005"))
        self.assertFalse(amex.matches("4111111111111111"))

    def test_brand_color(self) -> None:
        self.assertEqual(brands.brand_color("visa"), "#1a1f71")
        self.assertEqual(brands.brand_color("VISA"), "#1a1f71")
        self.assertEqual(brands.brand_color(None), brands.DEFAULT_COLOR)
        self.assertEqual(brands.brand_color("nope"), brands.DEFAULT_COLOR)

    def test_all_lengths_plausible(self) -> None:
        for brand in brands.BRANDS:
            self.assertTrue(brand.lengths, brand.key)
            for length in brand.lengths:
                self.assertIn(length, (12, 13, 14, 15, 16, 17, 18, 19))


if __name__ == "__main__":
    unittest.main()
