from __future__ import annotations

import os
import re
import shutil
import sys
import unicodedata
from dataclasses import dataclass, field
from typing import Iterable, List, Optional, Sequence, Tuple

__all__ = [
    "Caps",
    "detect_caps",
    "enable_windows_vt",
    "rgb",
    "blend",
    "ramp",
    "mix",
    "paint",
    "wrap_bg",
    "strip",
    "to_ascii",
    "visible_width",
    "fit",
    "gradient",
    "gradient_lines",
    "ANSI_RE",
    "supports_unicode",
]

ANSI_RE = re.compile(r"\x1b\[[0-9;?]*[ -/]*[@-~]|\x1b[@-Z\\-_]")

BASIC_16 = (
    (0, 0, 0),
    (205, 49, 49),
    (13, 188, 121),
    (229, 229, 16),
    (36, 114, 200),
    (188, 63, 188),
    (17, 168, 205),
    (229, 229, 229),
    (102, 102, 102),
    (241, 76, 76),
    (35, 209, 139),
    (245, 245, 67),
    (59, 142, 234),
    (214, 112, 214),
    (41, 184, 219),
    (255, 255, 255),
)

UNICODE_SAMPLES = "─│╭╮╰╯❯●✔✖⚠█▏▎▍▌▋▊▉◐◓◑◒"


@dataclass
class Caps:
    color: str = "none"
    unicode: bool = False
    tty: bool = False
    animations: bool = True
    width: int = 100
    height: int = 32
    term: str = ""
    windows: bool = False
    encoding: str = "utf-8"
    is_termux: bool = False
    demo: bool = False
    escape: bool = True

    @property
    def colors(self) -> bool:
        return self.color != "none"

    @property
    def truecolor(self) -> bool:
        return self.color == "truecolor"

    def describe(self) -> str:
        return "%s · %s · %dx%d" % (
            self.color,
            "unicode" if self.unicode else "ascii",
            self.width,
            self.height,
        )


def enable_windows_vt() -> bool:
    if os.name != "nt":
        return True
    try:
        import ctypes

        kernel32 = ctypes.windll.kernel32
        handle = kernel32.GetStdHandle(-11)
        mode = ctypes.c_uint32()
        if not kernel32.GetConsoleMode(handle, ctypes.byref(mode)):
            return False
        enable_virtual_terminal_processing = 0x0004
        disable_newline_auto_return = 0x0008
        return bool(
            kernel32.SetConsoleMode(
                handle, mode.value | enable_virtual_terminal_processing | disable_newline_auto_return
            )
        )
    except Exception:
        return False


def supports_unicode(stream: object, sample: str = UNICODE_SAMPLES) -> bool:
    encoding = getattr(stream, "encoding", None) or "utf-8"
    try:
        sample.encode(encoding)
    except (UnicodeEncodeError, LookupError):
        return False
    return True


def detect_caps(
    stream: Optional[object] = None,
    color: str = "auto",
    glyphs: str = "auto",
    animations: Optional[bool] = None,
    width: Optional[int] = None,
    height: Optional[int] = None,
) -> Caps:
    stream = stream or sys.stdout
    caps = Caps()
    caps.windows = os.name == "nt"
    caps.tty = bool(getattr(stream, "isatty", lambda: False)())
    caps.term = os.environ.get("TERM", "")
    caps.encoding = getattr(stream, "encoding", None) or "utf-8"
    caps.is_termux = "com.termux" in os.environ.get("PREFIX", "") or "ANDROID_ROOT" in os.environ

    vt_ok = enable_windows_vt() if caps.windows else True
    caps.escape = bool(vt_ok and caps.tty)

    if os.environ.get("NO_COLOR"):
        caps.color = "none"
    elif color == "never":
        caps.color = "none"
    elif color == "always":
        caps.color = "truecolor"
    elif not vt_ok:
        caps.color = "none"
    elif caps.term == "dumb" or not caps.tty:
        caps.color = "none"
    else:
        colorterm = os.environ.get("COLORTERM", "").lower()
        modern_terminal = os.environ.get("TERM_PROGRAM") in ("iTerm.app", "WezTerm", "vscode")
        if colorterm in ("truecolor", "24bit") or modern_terminal:
            caps.color = "truecolor"
        elif "256color" in caps.term or os.environ.get("TERM_PROGRAM") == "Apple_Terminal":
            caps.color = "256"
        elif caps.windows:
            caps.color = "truecolor" if os.environ.get("WT_SESSION") else "256"
        else:
            caps.color = "16"

    if glyphs == "ascii":
        caps.unicode = False
    elif glyphs == "unicode":
        caps.unicode = True
    else:
        caps.unicode = supports_unicode(stream) and caps.encoding.lower().replace("-", "") != "ascii"
        if caps.color == "none" and caps.term == "dumb":
            caps.unicode = False

    size = shutil.get_terminal_size((100, 32))
    caps.width = int(width or size.columns or 100)
    caps.height = int(height or size.lines or 32)
    if animations is None:
        animations = bool(caps.tty) and not os.environ.get("LBIN_NO_ANIM")
    caps.animations = bool(animations)
    return caps


def rgb(value: str) -> Tuple[int, int, int]:
    text = (value or "").strip().lstrip("#")
    if len(text) == 3:
        text = "".join(ch * 2 for ch in text)
    if len(text) != 6:
        return (255, 255, 255)
    try:
        return (int(text[0:2], 16), int(text[2:4], 16), int(text[4:6], 16))
    except ValueError:
        return (255, 255, 255)


def to_hex(color: Tuple[int, int, int]) -> str:
    return "#%02x%02x%02x" % tuple(max(0, min(255, int(item))) for item in color)


def blend(first: str, second: str, factor: float) -> str:
    factor = max(0.0, min(1.0, factor))
    a = rgb(first)
    b = rgb(second)
    return to_hex(
        (
            a[0] + (b[0] - a[0]) * factor,
            a[1] + (b[1] - a[1]) * factor,
            a[2] + (b[2] - a[2]) * factor,
        )
    )


def mix(color: str, target: str, factor: float) -> str:
    return blend(color, target, factor)


def ramp(colors: Sequence[str], position: float) -> str:
    if not colors:
        return "#ffffff"
    if len(colors) == 1:
        return colors[0]
    position = max(0.0, min(1.0, position))
    scaled = position * (len(colors) - 1)
    index = int(scaled)
    if index >= len(colors) - 1:
        return colors[-1]
    return blend(colors[index], colors[index + 1], scaled - index)


def _nearest_16(color: str) -> int:
    target = rgb(color)
    best = 0
    best_distance = None
    for index, candidate in enumerate(BASIC_16):
        distance = sum((candidate[i] - target[i]) ** 2 for i in range(3))
        if best_distance is None or distance < best_distance:
            best_distance = distance
            best = index
    return best


def _to_256(color: str) -> int:
    red, green, blue = rgb(color)
    if abs(red - green) < 8 and abs(green - blue) < 8:
        if red < 8:
            return 16
        if red > 248:
            return 231
        return 232 + int(round((red - 8) / 247 * 24))
    return 16 + (36 * int(round(red / 255 * 5))) + (6 * int(round(green / 255 * 5))) + int(
        round(blue / 255 * 5)
    )


def _fg(color: str, caps: Caps) -> str:
    if caps.truecolor:
        red, green, blue = rgb(color)
        return "38;2;%d;%d;%d" % (red, green, blue)
    if caps.color == "256":
        return "38;5;%d" % _to_256(color)
    if caps.color == "16":
        return str(30 + _nearest_16(color))
    return ""


def _bg(color: str, caps: Caps) -> str:
    if caps.truecolor:
        red, green, blue = rgb(color)
        return "48;2;%d;%d;%d" % (red, green, blue)
    if caps.color == "256":
        return "48;5;%d" % _to_256(color)
    if caps.color == "16":
        return str(40 + _nearest_16(color))
    return ""


def paint(
    text: str,
    caps: Caps,
    fg: Optional[str] = None,
    bg: Optional[str] = None,
    bold: bool = False,
    dim: bool = False,
    italic: bool = False,
    underline: bool = False,
    reverse: bool = False,
    strike: bool = False,
) -> str:
    if not caps.colors and not caps.escape:
        return text
    codes: List[str] = []
    if bold:
        codes.append("1")
    if dim:
        codes.append("2")
    if italic:
        codes.append("3")
    if underline:
        codes.append("4")
    if reverse:
        codes.append("7")
    if strike:
        codes.append("9")
    if caps.colors:
        if fg:
            code = _fg(fg, caps)
            if code:
                codes.append(code)
        if bg:
            code = _bg(bg, caps)
            if code:
                codes.append(code)
    if not codes:
        return text
    return "\x1b[" + ";".join(codes) + "m" + text + "\x1b[0m"


def strip(text: str) -> str:
    return ANSI_RE.sub("", text or "")


ASCII_MAP = {
    "…": "...",
    "—": "-",
    "–": "-",
    "•": "*",
    "·": ".",
    "❯": ">",
    "▶": ">",
    "→": ">",
    "←": "<",
    "↑": "^",
    "↓": "v",
    "↕": "^",
    "✔": "v",
    "✖": "x",
    "⚠": "!",
    "ℹ": "i",
    "●": "*",
    "★": "*",
    "◆": "*",
    "▪": "*",
    "◉": "(*)",
    "◯": "( )",
    "∞": "inf",
    "█": "#",
    "▛": "[",
    "▜": "]",
    "▙": "[",
    "▟": "]",
    "▀": "-",
    "▄": "_",
    "▌": "|",
    "▐": "|",
    "▏": "|",
    "▎": "|",
    "▍": "|",
    "▋": "|",
    "▊": "|",
    "▉": "|",
    "░": ".",
    "▒": ":",
    "▓": "#",
    "◐": "|",
    "◓": "/",
    "◑": "-",
    "◒": "\\",
    "╭": "+",
    "╮": "+",
    "╰": "+",
    "╯": "+",
    "─": "-",
    "│": "|",
    "┌": "+",
    "┐": "+",
    "└": "+",
    "┘": "+",
    "├": "+",
    "┤": "+",
    "┬": "+",
    "┴": "+",
    "┼": "+",
}


def to_ascii(text: str) -> str:
    if not text or text.isascii():
        return text
    out: List[str] = []
    for char in text:
        mapped = ASCII_MAP.get(char, char)
        if mapped.isascii():
            out.append(mapped)
            continue
        decomposed = unicodedata.normalize("NFKD", mapped)
        stripped = "".join(ch for ch in decomposed if ch.isascii())
        out.append(stripped or "?")
    return "".join(out)


_RESET_RE = re.compile(r"\x1b\[0m")


def wrap_bg(text: str, caps: Caps, bg: str, fg: Optional[str] = None) -> str:
    code = _bg(bg, caps)
    if not code:
        return text
    prefix = ""
    fg_code = _fg(fg, caps) if fg else ""
    if fg_code:
        prefix += "\x1b[" + fg_code + "m"
    prefix += "\x1b[" + code + "m"
    return prefix + _RESET_RE.sub("\x1b[0m" + prefix, text) + "\x1b[0m"


def char_width(char: str) -> int:
    if ord(char) == 0xFE0F or ord(char) == 0x200D:
        return 0
    code = ord(char)
    if code < 32:
        return 0
    if 0x1100 <= code <= 0x115F or 0x2E80 <= code <= 0xA4CF or 0xAC00 <= code <= 0xD7A3:
        return 2
    if 0xF900 <= code <= 0xFAFF or 0xFE30 <= code <= 0xFE6F or 0xFF00 <= code <= 0xFF60:
        return 2
    if 0xFFE0 <= code <= 0xFFE6 or 0x1F300 <= code <= 0x1FAFF or 0x1F000 <= code <= 0x1F0FF:
        return 2
    if 0x2190 <= code <= 0x2BFF:
        return 1
    return 1


def visible_width(text: str) -> int:
    plain = strip(text)
    total = 0
    for char in plain:
        total += char_width(char)
    return total


def fit(text: str, width: int, fill: str = " ", align: str = "left", ellipsis: str = "…") -> str:
    plain_width = visible_width(text)
    if plain_width > width:
        if width <= 1:
            return ellipsis[:width]
        keep = width - 1
        out: List[str] = []
        used = 0
        for char in strip(text):
            size = char_width(char)
            if used + size > keep:
                break
            out.append(char)
            used += size
        text = "".join(out) + ellipsis
        plain_width = used + 1
    padding = max(0, width - plain_width)
    if align == "right":
        return fill * padding + text
    if align == "center":
        left = padding // 2
        return fill * left + text + fill * (padding - left)
    return text + fill * padding


def gradient(text: str, stops: Sequence[str], caps: Caps, bold: bool = False, offset: float = 0.0) -> str:
    plain = strip(text)
    width = max(1, len(plain))
    pieces: List[str] = []
    index = 0
    for char in plain:
        if char in " \t\n":
            pieces.append(char)
        else:
            position = (index / max(1, width - 1)) * 0.85 + offset * 0.15 if width > 1 else 0.5
            pieces.append(paint(char, caps, fg=ramp(stops, position), bold=bold))
        index += 1
    return "".join(pieces)


def gradient_lines(lines: Sequence[str], stops: Sequence[str], caps: Caps, bold: bool = False) -> List[str]:
    total = max(1, len(lines))
    out: List[str] = []
    for index, line in enumerate(lines):
        position = (index / total) * 0.75
        out.append(gradient(line, stops, caps, bold=bold, offset=position))
    return out
