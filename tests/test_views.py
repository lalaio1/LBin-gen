import os
import tempfile
import unittest
from types import SimpleNamespace

from lbin.app import demo as demo_mod
from lbin.app import views
from lbin.app.context import build_context
from lbin.ui import ansi

SIZES = ((112, 32), (84, 26), (64, 20), (50, 16))


class SplitWidthsTests(unittest.TestCase):
    def test_ratios_respected(self) -> None:
        left, right = views.split_widths(100, 2, 0.62)
        self.assertEqual((left, right), (60, 38))
        left, right = views.split_widths(120, 2, 0.5)
        self.assertEqual((left, right), (59, 59))

    def test_never_exceeds_width(self) -> None:
        for width in range(30, 220):
            for ratio in (0.5, 0.62, 0.66):
                left, right = views.split_widths(width, 2, ratio)
                self.assertLessEqual(left + 2 + right, width, "width=%d ratio=%s" % (width, ratio))

    def test_columns_fill_exactly_at_normal_sizes(self) -> None:
        for width in (64, 80, 100, 112, 160):
            left, right = views.split_widths(width)
            self.assertEqual(left + 2 + right, width)

    def test_columns_render_within_width(self) -> None:
        lines = views.columns(["esquerda"], ["direita"], 64)
        self.assertEqual(len(lines), 1)
        self.assertLessEqual(ansi.visible_width(lines[0]), 64)


class ToAsciiTests(unittest.TestCase):
    def test_maps_symbols(self) -> None:
        self.assertEqual(ansi.to_ascii("a─b│c❯"), "a-b|c>")
        self.assertEqual(ansi.to_ascii("…"), "...")
        self.assertEqual(ansi.to_ascii("█░"), "#.")

    def test_strips_accents(self) -> None:
        self.assertEqual(ansi.to_ascii("Pré-pago"), "Pre-pago")
        self.assertEqual(ansi.to_ascii("Itaú"), "Itau")

    def test_passthrough(self) -> None:
        self.assertEqual(ansi.to_ascii(""), "")
        self.assertEqual(ansi.to_ascii("plain text"), "plain text")
        self.assertTrue(ansi.to_ascii("\x1b[31mred\x1b[0m").startswith("\x1b[31m"))

    def test_result_is_ascii(self) -> None:
        self.assertTrue(ansi.to_ascii("╭────╮ ⚠ ✔ ✖ ◐ 🇧🇷").isascii())


class DemoRenderTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.tmp = tempfile.TemporaryDirectory()
        cls._saved = {
            key: os.environ.get(key) for key in ("LBIN_HOME", "NO_COLOR", "TERM", "LBIN_COLOR")
        }
        os.environ["LBIN_HOME"] = cls.tmp.name
        os.environ.pop("NO_COLOR", None)
        os.environ.pop("LBIN_COLOR", None)
        os.environ["TERM"] = "xterm-256color"

    @classmethod
    def tearDownClass(cls) -> None:
        for key, value in cls._saved.items():
            if value is None:
                os.environ.pop(key, None)
            else:
                os.environ[key] = value
        cls.tmp.cleanup()

    def _ctx(self, **overrides):
        params = {"color": "always", "ascii": False, "width": None, "demo": True, "no_anim": True}
        params.update(overrides)
        return build_context(SimpleNamespace(**params))

    def test_every_screen_fits_width(self) -> None:
        ctx = self._ctx()
        for width, height in SIZES:
            for screen in demo_mod.screens_available():
                lines = demo_mod.build(ctx, screen, width, height)
                context = "%s @ %dx%d" % (screen, width, height)
                self.assertTrue(any(ansi.strip(line) for line in lines), context)
                for line in lines:
                    self.assertLessEqual(ansi.visible_width(line), width, context)

    def test_every_screen_fits_height(self) -> None:
        ctx = self._ctx()
        for width, height in SIZES:
            for screen in demo_mod.screens_available():
                lines = demo_mod.build(ctx, screen, width, height)
                context = "%s @ %dx%d" % (screen, width, height)
                self.assertLessEqual(len(lines), height, context)

    def test_menu_mentions_project(self) -> None:
        ctx = self._ctx()
        lines = demo_mod.build(ctx, "menu", 112, 32)
        text = ansi.strip("\n".join(lines))
        self.assertIn("LBIN", text.upper())

    def test_ascii_glyphs_have_no_box_drawing(self) -> None:
        ctx = self._ctx(ascii=True)
        for screen in demo_mod.screens_available():
            lines = demo_mod.build(ctx, screen, 100, 34)
            text = ansi.to_ascii(ansi.strip("\n".join(lines)))
            self.assertTrue(text.isascii(), screen)
            for char in "…─│┌┐└┘├┤┬┴┼█▄▀▌▐░▒▓•◐◓◑◒":
                self.assertNotIn(char, text, "%s: %r" % (screen, char))

    def test_no_color_mode_returns_plain_text(self) -> None:
        ctx = self._ctx(color="never")
        for width, height in SIZES:
            for screen in demo_mod.screens_available():
                lines = demo_mod.build(ctx, screen, width, height)
                for line in lines:
                    self.assertNotIn("\x1b", line, "%s @ %dx%d" % (screen, width, height))

    def test_color_mode_uses_ansi(self) -> None:
        ctx = self._ctx()
        lines = demo_mod.build(ctx, "menu", 112, 32)
        self.assertTrue(any("\x1b[" in line for line in lines))


if __name__ == "__main__":
    unittest.main()
