import tempfile
import time
import unittest
from pathlib import Path

from lbin.core import binlookup


class NormalizeTests(unittest.TestCase):
    def test_truncates_to_six(self) -> None:
        self.assertEqual(binlookup.normalize_bin("516230123"), "516230")

    def test_strips_non_digits(self) -> None:
        self.assertEqual(binlookup.normalize_bin("5162-3012 34"), "516230")
        self.assertEqual(binlookup.normalize_bin("ab12cd34"), "1234")

    def test_short_value_kept(self) -> None:
        self.assertEqual(binlookup.normalize_bin("4111", size=8), "4111")

    def test_flag(self) -> None:
        self.assertEqual(binlookup.flag_for("BR"), "🇧🇷")
        self.assertEqual(binlookup.flag_for("br"), "🇧🇷")
        self.assertEqual(binlookup.flag_for(""), "🏳️")
        self.assertEqual(binlookup.flag_for("XYZ"), "🏳️")


class LocalLookupTests(unittest.TestCase):
    def test_known_bin(self) -> None:
        info = binlookup.local_lookup("516230")
        self.assertEqual(info.bank, "banco digital brasileiro")
        self.assertEqual(info.kind, "credit")
        self.assertEqual(info.country_code, "BR")
        self.assertEqual(info.country, "Brasil")
        self.assertTrue(info.approx)
        self.assertEqual(info.source, "base-offline")

    def test_test_bin_not_approx(self) -> None:
        info = binlookup.local_lookup("411111")
        self.assertFalse(info.approx)
        self.assertEqual(info.brand_key, "visa")

    def test_brand_enrichment(self) -> None:
        info = binlookup.local_lookup("636297")
        self.assertEqual(info.brand_key, "elo")
        self.assertEqual(info.brand_label, "Elo")

    def test_brand_scheme_filled(self) -> None:
        info = binlookup.local_lookup("411111")
        self.assertEqual(info.scheme, "Visa")


class ParseTests(unittest.TestCase):
    def test_parse_binlist(self) -> None:
        payload = {
            "scheme": "visa",
            "type": "debit",
            "brand": "visa",
            "bank": {"name": "Banco Teste"},
            "country": {"name": "Brasil", "alpha2": "BR"},
            "number": {"length": 16, "luhn": True},
        }
        info = binlookup.parse_binlist(payload, "457173", 12.5)
        self.assertEqual(info.scheme, "Visa")
        self.assertEqual(info.kind, "debit")
        self.assertEqual(info.bank, "Banco Teste")
        self.assertEqual(info.country_code, "BR")
        self.assertEqual(info.length, 16)
        self.assertTrue(info.luhn)
        self.assertEqual(info.source, "binlist.net")
        self.assertAlmostEqual(info.latency_ms, 12.5)

    def test_parse_bincodes(self) -> None:
        payload = {
            "card": "mastercard",
            "type": "CREDIT",
            "level": "black",
            "bank": "Banco X",
            "country": "Brasil",
            "iso": "br",
        }
        info = binlookup.parse_bincodes(payload, "516230", 5.0)
        self.assertEqual(info.scheme, "Mastercard")
        self.assertEqual(info.kind, "credit")
        self.assertEqual(info.category, "black")
        self.assertEqual(info.country_code, "BR")


class BinInfoTests(unittest.TestCase):
    def test_roundtrip(self) -> None:
        info = binlookup.BinInfo(bin="516230", bank="X", country_code="BR", kind="credit")
        payload = info.as_dict()
        self.assertEqual(payload["flag"], "🇧🇷")
        self.assertEqual(payload["kind_label"], "Crédito")
        again = binlookup.BinInfo.from_dict(payload)
        self.assertEqual(again.bank, "X")
        self.assertEqual(again.kind, "credit")

    def test_from_dict_ignores_extra(self) -> None:
        info = binlookup.BinInfo.from_dict({"bin": "411111", "flag": "🇺🇸", "nope": 1})
        self.assertEqual(info.bin, "411111")

    def test_kind_and_category_labels(self) -> None:
        self.assertEqual(binlookup.BinInfo(bin="1", kind="prepaid").kind_label, "Pré-pago")
        self.assertEqual(binlookup.BinInfo(bin="1", kind="").kind_label, "—")
        self.assertEqual(binlookup.BinInfo(bin="1", category="gold").category_label, "Gold")


class DemoProviderTests(unittest.TestCase):
    def test_deterministic(self) -> None:
        first = binlookup.DemoProvider().lookup("516230")
        second = binlookup.DemoProvider().lookup("516230")
        self.assertEqual(first.bank, second.bank)
        self.assertEqual(first.source, "demo")
        self.assertEqual(first.note, "modo demonstracao")
        self.assertGreater(first.latency_ms, 0)

    def test_banks_within_table(self) -> None:
        names = {item[0] for item in binlookup.DemoProvider.BANKS}
        for value in range(20):
            info = binlookup.DemoProvider().lookup("%06d" % value)
            self.assertIn(info.bank, names)


class ResolverTests(unittest.TestCase):
    def test_demo_mode(self) -> None:
        resolver = binlookup.BinResolver(demo=True)
        info = resolver.resolve("516230")
        self.assertEqual(info.source, "demo")
        self.assertTrue(info.bank)
        self.assertEqual(info.brand_key, "mastercard")

    def test_offline_resolution(self) -> None:
        resolver = binlookup.BinResolver()
        info = resolver.resolve("516230", allow_network=False)
        self.assertEqual(info.source, "base-offline")
        self.assertEqual(info.bank, "banco digital brasileiro")

    def test_unknown_bin_note(self) -> None:
        resolver = binlookup.BinResolver()
        info = resolver.resolve("999999", allow_network=False)
        self.assertFalse(info.bank)
        self.assertIn("offline", info.note)

    def test_incomplete_bin_note(self) -> None:
        resolver = binlookup.BinResolver()
        info = resolver.resolve("5162")
        self.assertEqual(info.note, "BIN incompleto")

    def test_hints_apply_when_empty(self) -> None:
        resolver = binlookup.BinResolver()
        info = resolver.resolve("999999", allow_network=False, bank_hint="Banco Hint", kind_hint="credit")
        self.assertEqual(info.bank, "Banco Hint")
        self.assertEqual(info.kind, "credit")

    def test_hints_do_not_override(self) -> None:
        resolver = binlookup.BinResolver()
        info = resolver.resolve("516230", allow_network=False, bank_hint="Outro")
        self.assertEqual(info.bank, "banco digital brasileiro")

    def test_memory_cache(self) -> None:
        resolver = binlookup.BinResolver()
        first = resolver.resolve("411111", allow_network=False)
        second = resolver.resolve("411111", allow_network=False)
        self.assertIs(first, second)


class CacheTests(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.path = Path(self.tmp.name) / "cache" / "bins.json"

    def tearDown(self) -> None:
        self.tmp.cleanup()

    def test_put_get_and_persist(self) -> None:
        cache = binlookup.Cache(self.path)
        cache.put("516230", binlookup.BinInfo(bin="516230", bank="X"))
        cache.save()
        again = binlookup.Cache(self.path)
        found = again.get("516230")
        self.assertIsNotNone(found)
        self.assertEqual(found.bank, "X")

    def test_expired_entry_returns_none(self) -> None:
        cache = binlookup.Cache(self.path, ttl_days=30)
        cache.put("516230", binlookup.BinInfo(bin="516230", bank="X"))
        cache._data["516230"]["ts"] = time.time() - 40 * 86400
        self.assertIsNone(cache.get("516230"))

    def test_clear(self) -> None:
        cache = binlookup.Cache(self.path)
        cache.put("516230", binlookup.BinInfo(bin="516230"))
        self.assertEqual(len(cache), 1)
        self.assertEqual(cache.clear(), 1)
        self.assertEqual(len(cache), 0)


class ProxyPoolTests(unittest.TestCase):
    def test_rotation(self) -> None:
        pool = binlookup.ProxyPool(["http://a:1", "http://b:2"])
        self.assertTrue(pool)
        self.assertEqual(pool.next(), "http://a:1")
        self.assertEqual(pool.next(), "http://b:2")
        self.assertEqual(pool.next(), "http://a:1")

    def test_empty(self) -> None:
        pool = binlookup.ProxyPool()
        self.assertFalse(pool)
        self.assertIsNone(pool.next())


if __name__ == "__main__":
    unittest.main()
