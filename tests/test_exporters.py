import json
import random
import tempfile
import unittest
from pathlib import Path

from lbin.core import exporters, generator
from lbin.core.storage import OutputWriter

FORMATS = ("txt", "csv", "json", "jsonl", "js", "sql", "xml", "html")
META = {"version": "3.0.0", "generated": "hoje", "title": "teste"}


def _payload() -> dict:
    card = next(iter(generator.generate("516230", 1, length=16, rng=random.Random(11))))
    return card.as_dict()


class ExporterTests(unittest.TestCase):
    def test_every_format_renders(self) -> None:
        record = _payload()
        for name in FORMATS:
            fmt = exporters.resolve_format(name)
            head = exporters.header(fmt, META, "{number}|{month}|{year}|{cvv}")
            body = exporters.render(fmt, record, "{number}|{month}|{year}|{cvv}")
            foot = exporters.footer(fmt, dict(META, count=1))
            self.assertIsInstance(head, str)
            self.assertTrue(body.strip(), name)
            self.assertIsInstance(foot, str)

    def test_txt_template(self) -> None:
        record = _payload()
        fmt = exporters.resolve_format("txt")
        line = exporters.render(fmt, record, "{number}|{month}|{year}|{cvv}")
        parts = line.strip().split("|")
        self.assertEqual(parts[0], record["number"])
        self.assertEqual(parts[1], record["month"])
        self.assertEqual(parts[2], record["year"])
        self.assertEqual(parts[3], record["cvv"])

    def test_jsonl_roundtrip(self) -> None:
        record = _payload()
        fmt = exporters.resolve_format("jsonl")
        loaded = json.loads(exporters.render(fmt, record, ""))
        self.assertEqual(loaded["number"], record["number"])
        self.assertEqual(loaded["cvv"], record["cvv"])

    def test_csv_header(self) -> None:
        fmt = exporters.resolve_format("csv")
        head = exporters.header(fmt, META, "")
        self.assertIn("number", head.lower())

    def test_records_from_line(self) -> None:
        rows = list(exporters.records_from_line("4571737954220586|01|26|004"))
        self.assertEqual(rows[0]["number"], "4571737954220586")
        self.assertEqual(rows[0]["month"], 1)
        self.assertEqual(rows[0]["year"], 26)
        self.assertEqual(rows[0]["cvv"], "004")

    def test_unknown_format_raises(self) -> None:
        with self.assertRaises(ValueError):
            exporters.resolve_format("nada")

    def test_write_file(self) -> None:
        record = _payload()
        fmt = exporters.resolve_format("txt")
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "lote.txt"
            writer = OutputWriter(path, fmt, META, "{number}|{month}|{year}|{cvv}")
            with writer:
                for _ in range(5):
                    writer.write(record)
            text = path.read_text(encoding="utf-8")
            self.assertEqual(len([line for line in text.splitlines() if line.strip()]), 5)
            self.assertEqual(writer.records, 5)

    def test_write_many(self) -> None:
        fmt = exporters.resolve_format("json")
        cards = generator.generate("606282", 7, length=16, rng=random.Random(3))
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "lote.json"
            writer = OutputWriter(path, fmt, META, "")
            with writer:
                count = writer.write_many(card.as_dict() for card in cards)
            self.assertEqual(count, 7)
            payload = json.loads(path.read_text(encoding="utf-8"))
            self.assertEqual(len(payload), 7)


if __name__ == "__main__":
    unittest.main()
