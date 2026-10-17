from __future__ import annotations

import io
import json
import os
import shutil
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from lbin.app.cli import main  # noqa: E402


class CliTestCase(unittest.TestCase):
    def setUp(self) -> None:
        self._old_home = os.environ.get("LBIN_HOME")
        self._old_stdout = sys.stdout
        self._old_stderr = sys.stderr
        self._old_stdin = sys.stdin
        self.tmp = Path(tempfile.mkdtemp(prefix="lbin-cli-"))
        os.environ["LBIN_HOME"] = str(self.tmp / "home")
        sys.stdout = io.StringIO()
        sys.stderr = io.StringIO()
        sys.stdin = io.StringIO("")

    def tearDown(self) -> None:
        sys.stdout = self._old_stdout
        sys.stderr = self._old_stderr
        sys.stdin = self._old_stdin
        if self._old_home is None:
            os.environ.pop("LBIN_HOME", None)
        else:
            os.environ["LBIN_HOME"] = self._old_home
        shutil.rmtree(self.tmp, ignore_errors=True)

    def run_cli(self, argv):
        code = main(["--color", "never", "--no-anim"] + argv)
        return code, sys.stdout.getvalue(), sys.stderr.getvalue()

    def path(self, name: str) -> Path:
        return self.tmp / name


class VersionTests(CliTestCase):
    def test_version_flag_exits_zero(self) -> None:
        with self.assertRaises(SystemExit) as caught:
            main(["--version"])
        self.assertEqual(caught.exception.code, 0)


class GenCommandTests(CliTestCase):
    def test_gen_stdout_txt(self) -> None:
        code, out, _ = self.run_cli(["gen", "-b", "411111", "-n", "3"])
        self.assertEqual(code, 0)
        lines = [line for line in out.strip().splitlines() if line]
        self.assertEqual(len(lines), 3)
        for line in lines:
            self.assertTrue(line.startswith("411111"))

    def test_gen_writes_json_file(self) -> None:
        target = self.path("lote.json")
        code, _, err = self.run_cli(["gen", "-b", "516230", "-n", "5", "-F", "json", "-o", str(target)])
        self.assertEqual(code, 0)
        self.assertTrue(target.exists())
        payload = json.loads(target.read_text(encoding="utf-8"))
        self.assertEqual(len(payload), 5)
        self.assertIn("cartoes", err)

    def test_bulk_writes_file(self) -> None:
        target = self.path("turbo.txt")
        code, _, _ = self.run_cli(["bulk", "-b", "606282", "-n", "25", "-o", str(target)])
        self.assertEqual(code, 0)
        self.assertEqual(len(target.read_text(encoding="utf-8").strip().splitlines()), 25)

    def test_gen_unknown_brand_fails(self) -> None:
        code, _, err = self.run_cli(["gen", "--brand", "nao-existe", "-n", "1"])
        self.assertEqual(code, 2)
        self.assertIn("bandeira desconhecida", err)


class LookupCommandTests(CliTestCase):
    def test_lookup_offline_text(self) -> None:
        code, out, _ = self.run_cli(["lookup", "516230", "--offline"])
        self.assertEqual(code, 0)
        self.assertIn("516230", out)
        self.assertIn("bandeira", out.lower())

    def test_lookup_offline_json(self) -> None:
        code, out, _ = self.run_cli(["lookup", "516230", "457173", "--offline", "--json"])
        self.assertEqual(code, 0)
        payload = json.loads(out)
        self.assertEqual(len(payload), 2)
        self.assertEqual(payload[0]["bin"], "516230")


class ValidateCommandTests(CliTestCase):
    def test_validate_two_numbers(self) -> None:
        code, out, _ = self.run_cli(["validate", "4111111111111111", "5555555555554444"])
        self.assertEqual(code, 0)
        self.assertIn("4111111111111111", out)

    def test_validate_json(self) -> None:
        code, out, _ = self.run_cli(["validate", "4111111111111111", "--json"])
        self.assertEqual(code, 0)
        payload = json.loads(out)
        self.assertEqual(payload[0]["number"], "4111111111111111")
        self.assertTrue(payload[0]["luhn"])


class CombosCommandTests(CliTestCase):
    def test_combos_limited_range(self) -> None:
        target = self.path("combos.txt")
        code, _, _ = self.run_cli(
            [
                "combos",
                "4111111111111111",
                "--months",
                "1",
                "--years",
                "26",
                "--cvv-from",
                "0",
                "--cvv-to",
                "9",
                "-o",
                str(target),
                "-q",
            ]
        )
        self.assertEqual(code, 0)
        self.assertEqual(len(target.read_text(encoding="utf-8").strip().splitlines()), 10)


class LibraryCommandTests(CliTestCase):
    def test_library_json_lists_files(self) -> None:
        source = self.path("amostra.txt")
        source.write_text("4111111111111111|12|26|123\n", encoding="utf-8")
        code, _, _ = self.run_cli(["bulk", "-b", "411111", "-n", "2", "-o", str(self.path("saida.txt"))])
        self.assertEqual(code, 0)
        code, out, _ = self.run_cli(["library", "--dir", str(self.tmp), "--json"])
        self.assertEqual(code, 0)
        payload = json.loads(out)
        names = {item["name"] for item in payload}
        self.assertIn("saida.txt", names)


class ExportCommandTests(CliTestCase):
    def test_export_txt_to_json(self) -> None:
        source = self.path("origem.txt")
        source.write_text("4111111111111111|12|26|123\n5162301234567891|01|27|456\n", encoding="utf-8")
        target = self.path("convertido.json")
        code, _, err = self.run_cli(["export", str(source), "-F", "json", "-o", str(target)])
        self.assertEqual(code, 0)
        self.assertTrue(target.exists())
        self.assertIn("registros", err)
        payload = json.loads(target.read_text(encoding="utf-8"))
        self.assertEqual(len(payload), 2)

    def test_export_missing_file_fails(self) -> None:
        code, _, err = self.run_cli(["export", str(self.path("nada.txt"))])
        self.assertEqual(code, 2)
        self.assertIn("nao encontrado", err)


class DoctorAndDemoTests(CliTestCase):
    def test_doctor_json(self) -> None:
        code, out, _ = self.run_cli(["doctor", "--json"])
        self.assertEqual(code, 0)
        payload = json.loads(out)
        self.assertIn("checks", payload)
        self.assertTrue(payload["checks"])

    def test_demo_menu_renders(self) -> None:
        code, out, _ = self.run_cli(["demo", "menu", "--width", "80", "--height", "24"])
        self.assertEqual(code, 0)
        self.assertTrue(out.strip())

    def test_demo_list(self) -> None:
        code, out, _ = self.run_cli(["demo", "--list"])
        self.assertEqual(code, 0)
        self.assertIn("menu", out.split())

    def test_about_non_interactive_exits(self) -> None:
        code, out, _ = self.run_cli(["about"])
        self.assertEqual(code, 0)
        self.assertTrue(out.strip())

    def test_menu_piped_prints_hint(self) -> None:
        code, out, _ = self.run_cli(["menu"])
        self.assertEqual(code, 0)
        self.assertIn("linha de comando", out)


if __name__ == "__main__":
    unittest.main()
