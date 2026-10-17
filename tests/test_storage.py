import os
import tempfile
import time
import unittest
from pathlib import Path

from lbin.core import storage


class FormatTests(unittest.TestCase):
    def test_human_int(self) -> None:
        self.assertEqual(storage.human_int(0), "0")
        self.assertEqual(storage.human_int(999), "999")
        self.assertEqual(storage.human_int(1234), "1.234")
        self.assertEqual(storage.human_int(1234567), "1.234.567")

    def test_human_bytes(self) -> None:
        self.assertEqual(storage.human_bytes(999), "999 B")
        self.assertIn("KB", storage.human_bytes(2048))
        self.assertIn("MB", storage.human_bytes(5 * 1024 * 1024))

    def test_human_duration(self) -> None:
        self.assertEqual(storage.human_duration(0.4), "400 ms")
        self.assertEqual(storage.human_duration(42), "42.0 s")
        self.assertEqual(storage.human_duration(125), "2m 05s")


class ConfigTests(unittest.TestCase):
    def setUp(self) -> None:
        self._old_home = os.environ.pop("LBIN_HOME", None)
        self.tmp = tempfile.TemporaryDirectory()
        self.paths = storage.Paths(home=self.tmp.name).ensure()
        self.config = storage.Config(self.paths)

    def tearDown(self) -> None:
        self.tmp.cleanup()
        if self._old_home is not None:
            os.environ["LBIN_HOME"] = self._old_home

    def test_defaults(self) -> None:
        self.assertEqual(self.config.get("ui", "theme", ""), "neon")
        self.assertIn("generator", self.config.data)

    def test_set_and_persist(self) -> None:
        self.config.set("ui", "theme", "cyber")
        self.config.set("profile", "nickname", "tester")
        self.config.save()
        reloaded = storage.Config(self.paths)
        self.assertEqual(reloaded.get("ui", "theme"), "cyber")
        self.assertEqual(reloaded.get("profile", "nickname"), "tester")

    def test_section_creates_dict(self) -> None:
        section = self.config.section("custom")
        section["x"] = 1
        self.assertEqual(self.config.get("custom", "x"), 1)

    def test_toggle(self) -> None:
        value = self.config.get("ui", "animations")
        self.assertEqual(self.config.toggle("ui", "animations"), not bool(value))
        self.assertEqual(self.config.toggle("ui", "animations"), bool(value))

    def test_output_dir(self) -> None:
        directory = self.config.output_dir()
        self.assertTrue(directory.exists())


class HistoryTests(unittest.TestCase):
    def setUp(self) -> None:
        self._old_home = os.environ.pop("LBIN_HOME", None)
        self.tmp = tempfile.TemporaryDirectory()
        self.paths = storage.Paths(home=self.tmp.name).ensure()
        self.history = storage.History(self.paths)

    def tearDown(self) -> None:
        self.tmp.cleanup()
        if self._old_home is not None:
            os.environ["LBIN_HOME"] = self._old_home

    def test_record_and_totals(self) -> None:
        self.history.record({"kind": "bulk", "cards": 100, "elapsed": 2.0, "brands": {"visa": 100}})
        self.history.record({"kind": "bulk", "cards": 50, "elapsed": 1.0, "brands": {"elo": 50}})
        totals = self.history.totals()
        self.assertEqual(totals["sessions"], 2)
        self.assertEqual(totals["cards"], 150)
        self.assertEqual(totals["brands"]["visa"], 100)
        self.assertAlmostEqual(totals["rate"], 50.0)
        self.assertEqual(len(totals["per_day"]), 1)

    def test_clear(self) -> None:
        self.history.record({"kind": "x", "cards": 1, "elapsed": 1.0})
        self.history.clear()
        self.assertEqual(self.history.totals()["sessions"], 0)

    def test_persisted(self) -> None:
        self.history.record({"kind": "x", "cards": 7, "elapsed": 1.0})
        again = storage.History(self.paths)
        self.assertEqual(again.totals()["cards"], 7)


class FileEntryTests(unittest.TestCase):
    def test_fields(self) -> None:
        entry = storage.FileEntry(Path("lote.txt"), size=1234, mtime=time.time(), lines=42)
        self.assertEqual(entry.name, "lote.txt")
        self.assertRegex(entry.when, r"^\d{2}/\d{2}/\d{4} \d{2}:\d{2}$")
        self.assertTrue(entry.age)

    def test_count_lines(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "f.txt"
            path.write_text("a\nb\nc\n", encoding="utf-8")
            self.assertEqual(storage.count_lines(path), 3)


if __name__ == "__main__":
    unittest.main()
