from __future__ import annotations

import os
import shutil
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from _support import DEFAULT_ANSWERS, make_context  # noqa: E402

from lbin.app import menu as menu_mod  # noqa: E402
from lbin.app.screens import get_screen  # noqa: E402
from lbin.app.screens import about as about_screen  # noqa: E402
from lbin.app.screens import bulk as bulk_screen  # noqa: E402
from lbin.app.screens import combos as combos_screen  # noqa: E402
from lbin.app.screens import generate as generate_screen  # noqa: E402
from lbin.app.screens import library as library_screen  # noqa: E402
from lbin.app.screens import lookup as lookup_screen  # noqa: E402
from lbin.app.screens import settings as settings_screen  # noqa: E402
from lbin.app.screens import validate as validate_screen  # noqa: E402
from lbin.ui.theme import theme_names  # noqa: E402


class ScreenTestCase(unittest.TestCase):
    def setUp(self) -> None:
        self._old_home = os.environ.get("LBIN_HOME")
        self.tmp = Path(tempfile.mkdtemp(prefix="lbin-screens-"))

    def tearDown(self) -> None:
        if self._old_home is None:
            os.environ.pop("LBIN_HOME", None)
        else:
            os.environ["LBIN_HOME"] = self._old_home
        shutil.rmtree(self.tmp, ignore_errors=True)

    def ctx(self, **kwargs):
        answers = dict(kwargs.pop("answers", {}))
        merged = dict(answers)
        merged.update(DEFAULT_ANSWERS)
        return make_context(self.tmp, answers=merged, **kwargs)

    @staticmethod
    def out_files(ctx):
        directory = ctx.output_dir()
        return sorted(path for path in directory.iterdir() if path.is_file())


class MenuWiringTests(ScreenTestCase):
    def test_every_menu_entry_has_a_screen(self) -> None:
        ctx = self.ctx()
        keys = {item.key for item in menu_mod.menu_items(ctx) if item.enabled} - {"quit"}
        self.assertTrue(keys)
        for key in sorted(keys):
            self.assertIsNotNone(get_screen(key), "sem tela para %s" % key)

    def test_menu_non_interactive_prints_cli_hint(self) -> None:
        ctx = self.ctx()
        code = menu_mod.run(ctx)
        self.assertEqual(code, 0)
        text = ctx.term.plain_output()
        self.assertIn("linha de comando", text)
        self.assertIn("lbin gen", text)
        self.assertIn("responsabilidade", ctx.term.frame_text().lower())
        self.assertNotIn("gerador online", ctx.term.frame_text().lower())

    def test_menu_interactive_generate_flow(self) -> None:
        keys = ["enter", "enter"] + [None] * 600 + ["9", "enter"]
        ctx = self.ctx(keys=keys)
        ctx.term.interactive = True
        code = menu_mod.run(ctx)
        self.assertEqual(code, 0)
        text = ctx.term.frame_text().lower()
        self.assertIn("gerador online", text)
        self.assertIn("sessao encerrada", text)
        files = self.out_files(ctx)
        self.assertEqual(len(files), 1)
        self.assertEqual(len(files[0].read_text(encoding="utf-8").strip().splitlines()), 40)

    def test_generate_pause_and_abort(self) -> None:
        answers = {"quantidade": "200000"}
        keys = ["enter", "enter", "p"] + [None] * 3 + ["q"] + [None] * 800 + ["9", "enter"]
        ctx = self.ctx(answers=answers, keys=keys)
        ctx.term.interactive = True
        code = menu_mod.run(ctx)
        self.assertEqual(code, 0)
        text = ctx.term.frame_text().lower()
        self.assertIn("pausada", text)
        self.assertIn("interrompido", text)


class GenerateScreenTests(ScreenTestCase):
    def test_generate_run_writes_batch(self) -> None:
        ctx = self.ctx()
        generate_screen.run(ctx)
        files = self.out_files(ctx)
        self.assertEqual(len(files), 1)
        self.assertEqual(len(files[0].read_text(encoding="utf-8").strip().splitlines()), 40)
        self.assertIn("gerador online", ctx.term.frame_text().lower())

    def test_generate_offline_when_online_declined(self) -> None:
        ctx = self.ctx()
        generate_screen.run(ctx)
        self.assertIn("somente base local", ctx.term.frame_text().lower())


class BulkScreenTests(ScreenTestCase):
    def test_bulk_run_writes_batch(self) -> None:
        ctx = self.ctx()
        bulk_screen.run(ctx)
        files = self.out_files(ctx)
        self.assertEqual(len(files), 1)
        self.assertEqual(len(files[0].read_text(encoding="utf-8").strip().splitlines()), 40)
        self.assertIn("gerador turbo", ctx.term.frame_text().lower())


class CombosScreenTests(ScreenTestCase):
    def test_combos_run_expands_cvv_range(self) -> None:
        ctx = self.ctx(choices=["1", "1", "1"])
        combos_screen.run(ctx)
        files = self.out_files(ctx)
        self.assertEqual(len(files), 1)
        self.assertEqual(len(files[0].read_text(encoding="utf-8").strip().splitlines()), 1000)

    def test_combos_collect_returns_none_on_back(self) -> None:
        ctx = self.ctx(choices=["3"])
        self.assertIsNone(combos_screen.collect(ctx))


class LookupScreenTests(ScreenTestCase):
    def test_lookup_single_renders_result(self) -> None:
        ctx = self.ctx(answers={"bin ou numero": ["516230", ""]})
        lookup_screen.single(ctx)
        text = ctx.term.frame_text().lower()
        self.assertIn("consulta de bin", text)
        self.assertIn("516230", text)

    def test_lookup_batch_renders_table(self) -> None:
        ctx = self.ctx()
        lookup_screen.batch(ctx)
        text = ctx.term.frame_text().lower()
        self.assertIn("consulta em lote", text)
        self.assertIn("516230", text)

    def test_lookup_run_back(self) -> None:
        ctx = self.ctx(choices=["3"])
        lookup_screen.run(ctx)
        self.assertIn("Voltar ao menu", ctx.term.plain_output())


class ValidateScreenTests(ScreenTestCase):
    def test_validate_single(self) -> None:
        ctx = self.ctx()
        validate_screen.single(ctx)
        self.assertIn("luhn", ctx.term.frame_text().lower())

    def test_validate_batch(self) -> None:
        ctx = self.ctx()
        validate_screen.batch(ctx)
        self.assertIn("validador em lote", ctx.term.frame_text().lower())

    def test_validate_run_back(self) -> None:
        ctx = self.ctx(choices=["3"])
        validate_screen.run(ctx)
        self.assertIn("Voltar ao menu", ctx.term.plain_output())


class LibraryScreenTests(ScreenTestCase):
    def test_library_empty_dir_opens_folder(self) -> None:
        ctx = self.ctx(choices=["3"])
        library_screen.run(ctx)
        self.assertIn("biblioteca", ctx.term.frame_text().lower())

    def test_library_file_actions_reveal(self) -> None:
        sample = self.ctx().output_dir() / "amostra.txt"
        sample.write_text("linha 1\nlinha 2\n", encoding="utf-8")
        ctx = self.ctx(choices=["1", "3", "5"])
        library_screen.run(ctx)
        text = ctx.term.frame_text().lower()
        self.assertIn("caminho do arquivo", text)
        self.assertIn("amostra.txt", text)

    def test_library_preview_handles_empty_file(self) -> None:
        ctx = self.ctx()
        empty = ctx.output_dir() / "vazio.txt"
        empty.write_text("", encoding="utf-8")
        library_screen.preview(ctx, empty)
        self.assertIn("vazio.txt", ctx.term.frame_text())


class SettingsScreenTests(ScreenTestCase):
    def test_settings_changes_theme(self) -> None:
        ctx = self.ctx(choices=["2"], keys=["down", "enter", "q"])
        settings_screen.run(ctx)
        names = [item[0] for item in theme_names()]
        self.assertGreaterEqual(len(names), 2)
        self.assertEqual(ctx.config.get("ui", "theme"), names[1])
        self.assertIn("preferencias", ctx.term.frame_text().lower())

    def test_settings_paths_panel(self) -> None:
        ctx = self.ctx()
        settings_screen._apply(ctx, "utils.paths")
        self.assertIn("caminhos", ctx.term.frame_text().lower())


class AboutScreenTests(ScreenTestCase):
    def test_about_non_interactive_renders_once(self) -> None:
        ctx = self.ctx()
        about_screen.run(ctx)
        self.assertEqual(len(ctx.term.frames), 1)
        self.assertIn("lbin", ctx.term.frame_text().lower())


if __name__ == "__main__":
    unittest.main()
