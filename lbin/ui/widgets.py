from __future__ import annotations

import math
import time
from dataclasses import dataclass, field
from typing import Dict, Iterable, List, Optional, Sequence, Tuple

from .ansi import Caps, blend, char_width, fit, gradient, paint, ramp, strip, visible_width, wrap_bg
from .glyphs import BANNER_ASCII, BANNER_BLOCKS, COMPACT_BANNER, Glyphs, glyphs_for
from .theme import Theme

__all__ = ["UI", "MenuItem", "Tile"]

SPARK = "▁▂▃▄▅▆▇█"

def wrap_text(text: str, width: int) -> List[str]:
    if width <= 1:
        return [text]
    lines: List[str] = []
    for paragraph in (text or "").split("\n"):
        words = paragraph.split(" ")
        current = ""
        for word in words:
            candidate = word if not current else current + " " + word
            if visible_width(candidate) <= width:
                current = candidate
                continue
            if current:
                lines.append(current)
                current = ""
            while visible_width(word) > width:
                chunk = ""
                used = 0
                for char in word:
                    size = char_width(char)
                    if used + size > width:
                        break
                    chunk += char
                    used += size
                lines.append(chunk)
                word = word[len(chunk) :]
            current = word
        lines.append(current)
    return lines or [""]


@dataclass
class MenuItem:
    key: str
    label: str
    hint: str = ""
    badge: str = ""
    color: str = ""
    enabled: bool = True


@dataclass
class Tile:
    label: str
    value: str
    hint: str = ""
    color: str = ""


class UI:
    def __init__(self, caps: Caps, theme: Theme) -> None:
        self.caps = caps
        self.theme = theme
        self.glyphs: Glyphs = glyphs_for(caps)
        self.width = caps.width

    def role(self, name: str) -> str:
        return self.theme[name]

    def paint(
        self,
        text: str,
        fg: Optional[str] = None,
        bg: Optional[str] = None,
        bold: bool = False,
        dim: bool = False,
        italic: bool = False,
        underline: bool = False,
        reverse: bool = False,
    ) -> str:
        return paint(
            text,
            self.caps,
            fg=fg,
            bg=bg,
            bold=bold,
            dim=dim,
            italic=italic,
            underline=underline,
            reverse=reverse,
        )

    def c(self, role: str, text: str, bold: bool = False, dim: bool = False) -> str:
        return self.paint(text, fg=self.role(role), bold=bold, dim=dim)

    def bg_line(self, text: str, bg: str, fg: Optional[str] = None) -> str:
        return wrap_bg(text, self.caps, bg, fg)

    def dim_text(self, text: str) -> str:
        return self.paint(text, fg=self.role("dim"))

    def fit(self, text: str, width: Optional[int] = None) -> str:
        return fit(text, width if width is not None else self.width)

    def divider(self, width: Optional[int] = None, label: str = "") -> str:
        target = width if width is not None else self.width
        if label:
            left = "%s %s " % (self.glyphs.horizontal * 2, label)
            rest = self.glyphs.horizontal * max(0, target - visible_width(left))
            return self.paint(left + rest, fg=self.role("border"))
        return self.paint(self.glyphs.horizontal * target, fg=self.role("border"))

    def wrap(self, text: str, width: Optional[int] = None) -> List[str]:
        return wrap_text(text, width if width is not None else self.width)

    def center(self, text: str, width: Optional[int] = None) -> str:
        target = width if width is not None else self.width
        padding = max(0, (target - visible_width(text)) // 2)
        return " " * padding + text

    def section(self, title: str, width: Optional[int] = None, color: str = "primary") -> str:
        target = width if width is not None else self.width
        arrow = self.glyphs.arrow
        head = self.paint("%s %s" % (arrow, title), fg=self.role(color), bold=True)
        used = visible_width(head)
        tail = self.glyphs.horizontal * max(0, target - used - 1)
        return head + " " + self.paint(tail, fg=self.role("border"))

    def panel(
        self,
        body: Sequence[str],
        title: str = "",
        subtitle: str = "",
        width: Optional[int] = None,
        color: str = "primary",
        padding: int = 1,
        bg: Optional[str] = None,
    ) -> List[str]:
        target = width if width is not None else self.width
        target = max(12, target)
        glyphs = self.glyphs
        border = self.role("border")
        accent = self.role(color)
        inner = target - 2
        lines: List[str] = []
        if title:
            text = " %s " % title
            if subtitle:
                text = " %s %s %s " % (title, self.glyphs.dot, subtitle)
            pad = max(0, inner - visible_width(text) - 1)
            lines.append(
                self.paint(glyphs.top_left, fg=border)
                + self.paint(text, fg=accent, bold=True)
                + self.paint(glyphs.horizontal * pad + glyphs.top_right, fg=border)
            )
        else:
            lines.append(
                self.paint(glyphs.top_left + glyphs.horizontal * inner + glyphs.top_right, fg=border)
            )
        for line in body:
            content = fit(line, inner - padding * 2)
            line_text = " " * padding + content + " " * padding
            if bg:
                line_text = self.bg_line(line_text, bg, self.role("text"))
            lines.append(self.paint(glyphs.vertical, fg=border) + line_text + self.paint(glyphs.vertical, fg=border))
        lines.append(
            self.paint(glyphs.bottom_left + glyphs.horizontal * inner + glyphs.bottom_right, fg=border)
        )
        return lines

    def kv(
        self,
        pairs: Sequence[Tuple[str, str]],
        width: Optional[int] = None,
        key_width: int = 14,
        inline: bool = False,
    ) -> List[str]:
        target = width if width is not None else self.width
        lines: List[str] = []
        for key, value in pairs:
            label = fit(self.paint(key.upper(), fg=self.role("muted")), key_width)
            line = label + " " + (value if value else self.paint("—", fg=self.role("dim")))
            lines.append(fit(line, target))
        return lines

    def fields(self, pairs: Sequence[Tuple[str, str, str]], width: int, label_width: int = 16) -> List[str]:
        lines: List[str] = []
        for label, value, color in pairs:
            pointer = self.paint(self.glyphs.bullet, fg=self.role(color))
            head = " " + pointer + " " + fit(self.paint(label, fg=self.role("muted")), label_width)
            room = max(8, width - visible_width(head) - 1)
            lines.append(fit(head + fit(value, room, align="right"), width))
        return lines

    def table(
        self,
        headers: Sequence[str],
        rows: Sequence[Sequence[str]],
        widths: Optional[Sequence[int]] = None,
        aligns: Optional[Sequence[str]] = None,
        width: Optional[int] = None,
        color: str = "primary",
        zebra: bool = False,
    ) -> List[str]:
        target = width if width is not None else self.width
        columns = len(headers)
        aligns = list(aligns or ["left"] * columns)
        if widths is None:
            raw: List[int] = []
            for index, header in enumerate(headers):
                size = visible_width(str(header))
                for row in rows:
                    if index < len(row):
                        size = max(size, visible_width(str(row[index])))
                raw.append(size)
            widths = self._shrink(raw, target - (columns - 1) * 2)
        widths = list(widths)
        gap = "  "
        header_line = gap.join(
            self.paint(fit(str(headers[index]).upper(), widths[index], align=aligns[index]), fg=self.role("muted"), bold=True)
            for index in range(columns)
        )
        rule = gap.join(
            self.paint(self.glyphs.horizontal * widths[index], fg=self.role("border")) for index in range(columns)
        )
        lines = [fit(header_line, target), fit(rule, target)]
        for row_index, row in enumerate(rows):
            cells: List[str] = []
            for index in range(columns):
                value = str(row[index]) if index < len(row) else ""
                plain = fit(value, widths[index], align=aligns[index])
                if zebra and row_index % 2 == 1:
                    cells.append(self.paint(plain, bg=self.role("surface")))
                else:
                    cells.append(plain)
            lines.append(fit(gap.join(cells), target))
        return lines

    def _shrink(self, widths: Sequence[int], available: int) -> List[int]:
        result = [max(4, int(item)) for item in widths]
        total = sum(result)
        if total <= available:
            return result
        excess = total - available
        while excess > 0:
            biggest = max(range(len(result)), key=lambda index: result[index])
            if result[biggest] <= 5:
                break
            step = min(excess, max(1, result[biggest] // 6))
            result[biggest] -= step
            excess -= step
        return result

    def progress(
        self,
        done: float,
        total: float,
        width: int = 46,
        label: str = "",
        color: str = "primary",
        suffix: str = "",
        show_percent: bool = True,
    ) -> str:
        ratio = 1.0 if total <= 0 else max(0.0, min(1.0, done / total))
        filled = ratio * width
        whole = int(filled)
        rest = filled - whole
        glyphs = self.glyphs
        bar = self.paint(glyphs.bar_full * whole, fg=self.role(color), bold=True)
        if rest > 0.08 and whole < width:
            index = min(len(glyphs.bar_partials) - 1, int(rest * len(glyphs.bar_partials)))
            partial = glyphs.bar_partials[index]
            if partial:
                bar += self.paint(partial, fg=self.role(color), bold=True)
                whole += 1
        bar += self.paint(glyphs.bar_empty * max(0, width - whole), fg=self.role("dim"))
        pieces = []
        if label:
            pieces.append(self.paint(label, fg=self.role("muted")))
        pieces.append("[" + bar + "]")
        if show_percent:
            pieces.append(self.paint("%5.1f%%" % (ratio * 100), fg=self.role(color), bold=True))
        if suffix:
            pieces.append(self.paint(suffix, fg=self.role("text")))
        return " ".join(pieces)

    def badge(self, text: str, color: str = "primary", solid: bool = False, width: Optional[int] = None) -> str:
        token = " %s " % text
        if width is not None:
            token = fit(token, width, align="center")
        if solid:
            return self.paint(token, fg=self.role("surface"), bg=self.role(color), bold=True)
        return self.paint(token, fg=self.role(color), bold=True)

    def chip(self, text: str, color: str = "primary") -> str:
        glyphs = self.glyphs
        edge = self.paint(glyphs.vertical, fg=self.role(color))
        return edge + " " + text + " " + edge

    def sparkline(self, values: Sequence[float], width: Optional[int] = None, color: str = "accent") -> str:
        if not values:
            return ""
        data = list(values)
        if width and len(data) > width:
            data = data[-width:]
        peak = max(data) or 1.0
        chars = SPARK if self.caps.unicode else "._-=+*#"
        out = []
        for value in data:
            index = int(round((value / peak) * (len(chars) - 1)))
            out.append(chars[max(0, min(len(chars) - 1, index))])
        return self.paint("".join(out), fg=self.role(color))

    def bars(
        self,
        items: Sequence[Tuple[str, float]],
        width: int = 44,
        color: str = "primary",
        label_width: int = 16,
        max_value: Optional[float] = None,
    ) -> List[str]:
        if not items:
            return [self.paint("  sem dados", fg=self.role("dim"))]
        peak = max_value or max(value for _, value in items) or 1.0
        lines: List[str] = []
        for index, (label, value) in enumerate(items):
            ratio = value / peak if peak else 0
            size = max(0, int(round(ratio * width)))
            tone = color if index == 0 else "secondary"
            bar = self.paint(self.glyphs.bar_full * size, fg=self.role(tone))
            bar += self.paint(self.glyphs.bar_empty * max(0, width - size), fg=self.role("dim"))
            lines.append(
                fit(self.paint(label, fg=self.role("text")), label_width)
                + bar
                + " "
                + self.paint("{:,}".format(int(value)).replace(",", "."), fg=self.role("muted"))
            )
        return lines

    def tiles(
        self,
        tiles: Sequence[Tile],
        width: Optional[int] = None,
        per_row: int = 4,
        compact: bool = False,
    ) -> List[str]:
        target = width if width is not None else self.width
        per_row = max(1, min(per_row, len(tiles)))
        tile_width = max(14, (target - (per_row - 1)) // per_row)
        chunks = [list(tiles[index : index + per_row]) for index in range(0, len(tiles), per_row)]
        lines: List[str] = []
        glyphs = self.glyphs
        for chunk in chunks:
            top = " ".join(
                self.paint(glyphs.top_left + glyphs.horizontal * (tile_width - 2) + glyphs.top_right, fg=self.role("border"))
                for _ in chunk
            )
            if compact:
                middle = " ".join(
                    self.paint(glyphs.vertical, fg=self.role("border"))
                    + fit(self.paint(" " + tile.label, fg=self.role("muted")), tile_width - 2 - visible_width(tile.value) - 1)
                    + self.paint(tile.value + " ", fg=self.role(tile.color or "text"), bold=True)
                    + self.paint(glyphs.vertical, fg=self.role("border"))
                    for tile in chunk
                )
                lines.append(fit(top, target))
                lines.append(fit(middle, target))
                lines.append(
                    fit(
                        " ".join(
                            self.paint(
                                glyphs.bottom_left + glyphs.horizontal * (tile_width - 2) + glyphs.bottom_right,
                                fg=self.role("border"),
                            )
                            for _ in chunk
                        ),
                        target,
                    )
                )
                continue
            middle = " ".join(
                self.paint(glyphs.vertical, fg=self.role("border"))
                + fit(self.paint(" " + tile.label, fg=self.role("muted")), tile_width - 2)
                + self.paint(glyphs.vertical, fg=self.role("border"))
                for tile in chunk
            )
            value = " ".join(
                self.paint(glyphs.vertical, fg=self.role("border"))
                + fit(
                    self.paint(" " + tile.value, fg=self.role(tile.color or "text"), bold=True),
                    tile_width - 2,
                )
                + self.paint(glyphs.vertical, fg=self.role("border"))
                for tile in chunk
            )
            hint_line = ""
            if any(tile.hint for tile in chunk):
                hint_line = " ".join(
                    self.paint(glyphs.vertical, fg=self.role("border"))
                    + fit(self.paint(" " + tile.hint, fg=self.role("dim")), tile_width - 2)
                    + self.paint(glyphs.vertical, fg=self.role("border"))
                    for tile in chunk
                )
            bottom = " ".join(
                self.paint(glyphs.bottom_left + glyphs.horizontal * (tile_width - 2) + glyphs.bottom_right, fg=self.role("border"))
                for _ in chunk
            )
            lines.append(fit(top, target))
            lines.append(fit(middle, target))
            lines.append(fit(value, target))
            if hint_line:
                lines.append(fit(hint_line, target))
            lines.append(fit(bottom, target))
        return lines

    def menu(
        self,
        items: Sequence[MenuItem],
        selected: int,
        width: Optional[int] = None,
        height: Optional[int] = None,
    ) -> List[str]:
        target = width if width is not None else self.width
        limit = height if height is not None else len(items)
        start = 0
        if len(items) > limit:
            start = max(0, min(selected - limit // 2, len(items) - limit))
        window = items[start : start + limit]
        raw_label = max((visible_width(item.label) for item in items), default=12)
        label_width = max(12, min(raw_label, max(12, target - 40)))
        lines: List[str] = []
        for offset, item in enumerate(window):
            index = start + offset
            active = index == selected
            usable = bool(getattr(item, "enabled", True))
            color = item.color or "primary"
            if not usable:
                color = "dim"
            marker = self.glyphs.arrow if active else " "
            number = self.paint("%2d" % (index + 1) if usable else "  ", fg=self.role(color if active else "dim"))
            label = self.paint(
                fit(item.label, label_width),
                fg=self.role(color if active or not usable else "text"),
                bold=active,
            )
            head = "%s %s %s" % (number, self.paint(marker, fg=self.role(color), bold=True), label)
            if item.badge:
                head += "  " + self.badge(item.badge, color, solid=active)
            room = target - visible_width(head) - 4
            if item.hint and room >= 16:
                head += "  " + fit(
                    self.paint(item.hint, fg=self.role("muted" if active else "dim")), room - 2, align="right"
                )
            text = fit(head, target)
            if active:
                lines.append(self.bg_line(text, self.role("raised")))
            else:
                lines.append(text)
        return lines

    def banner(self, width: Optional[int] = None, show_tagline: bool = True) -> List[str]:
        target = width if width is not None else self.width
        stops = self.theme.gradient
        art = list(BANNER_BLOCKS if self.caps.unicode else BANNER_ASCII)
        art_width = max(visible_width(line) for line in art)
        if target >= art_width + 34:
            from ..version import CODENAME, TAG, TAGLINE, TELEGRAM

            card = [
                ("%s %s" % (COMPACT_BANNER, TAG), "primary", True),
                (TAGLINE, "muted", False),
                ("tema %s" % CODENAME.lower(), "secondary", False),
                ("telegram @%s" % TELEGRAM, "accent", False),
            ]
            box_width = min(30, target - art_width - 2)
            return self._banner_with_side(art, card, box_width, target, stops)
        lines: List[str] = []
        for index, line in enumerate(art):
            colored = gradient(line, stops, self.caps, bold=True, offset=index / len(art))
            lines.append(self.center(fit(colored, target), target))
        if show_tagline:
            from ..version import CODENAME, TAG, TAGLINE

            if target >= 48:
                tagline = "%s %s %s %s %s" % (COMPACT_BANNER, TAG, self.glyphs.dot, CODENAME, self.glyphs.dot + " " + TAGLINE)
            elif target >= 22:
                tagline = "%s %s" % (COMPACT_BANNER, TAG)
            else:
                tagline = ""
            if tagline:
                lines.append(self.center(self.paint(fit(tagline, target), fg=self.role("muted")), target))
        return lines

    def _banner_with_side(
        self,
        art: Sequence[str],
        card: Sequence[Tuple[str, str, bool]],
        box_width: int,
        target: int,
        stops: Sequence[str],
    ) -> List[str]:
        glyphs = self.glyphs
        inner = box_width - 2
        card_lines: List[str] = [
            self.paint(glyphs.top_left + glyphs.horizontal * inner + glyphs.top_right, fg=self.role("border"))
        ]
        for text, role, bold in card:
            card_lines.append(
                self.paint(glyphs.vertical, fg=self.role("border"))
                + fit(self.paint(" " + text, fg=self.role(role), bold=bold), inner)
                + self.paint(glyphs.vertical, fg=self.role("border"))
            )
        while len(card_lines) < len(art) - 1:
            card_lines.append(
                self.paint(glyphs.vertical, fg=self.role("border"))
                + " " * inner
                + self.paint(glyphs.vertical, fg=self.role("border"))
            )
        card_lines.append(
            self.paint(glyphs.bottom_left + glyphs.horizontal * inner + glyphs.bottom_right, fg=self.role("border"))
        )
        block_width = max(visible_width(line) for line in art)
        total = block_width + 2 + box_width
        left_pad = max(0, (target - total) // 2)
        lines: List[str] = []
        art = [fit(line, block_width) for line in art]
        gradient_art = gradient("\n".join(art), stops, self.caps, bold=True).split("\n")
        for index in range(max(len(gradient_art), len(card_lines))):
            left = gradient_art[index] if index < len(gradient_art) else " " * block_width
            right = card_lines[index] if index < len(card_lines) else " " * box_width
            lines.append(" " * left_pad + left + "  " + right)
        return lines

    def card_widget(
        self,
        number: str,
        brand: str = "LBIN",
        holder: str = "",
        expiry: str = "",
        cvv: str = "",
        width: int = 40,
        accent: str = "",
    ) -> List[str]:
        glyphs = self.glyphs
        inner = width - 2
        stops = (accent, self.theme["secondary"], self.theme["primary"]) if accent else self.theme.gradient
        dark = "#080c12"

        def row(text: str, index: int, bold: bool = False) -> str:
            plain = fit(text, inner)
            bg = ramp(list(stops), index / 6.0)
            edge = self.paint(glyphs.vertical, fg=dark, bg=bg)
            return edge + self.paint(plain, fg=dark, bg=bg, bold=bold) + edge

        def rule(index: int, top: bool) -> str:
            bg = ramp(list(stops), index / 6.0)
            glyph_left = glyphs.top_left if top else glyphs.bottom_left
            glyph_right = glyphs.top_right if top else glyphs.bottom_right
            return self.paint(glyph_left + glyphs.horizontal * inner + glyph_right, fg=dark, bg=bg, bold=True)

        chip = "▛▀▜" if self.caps.unicode else "[#]"
        chip2 = "▙▄▟" if self.caps.unicode else "[#]"
        brand_text = (brand or "LBIN").upper()
        top = chip + " " * max(1, inner - 2 - visible_width(chip) - visible_width(brand_text)) + brand_text
        second = chip2
        spacer = " " * max(1, inner - 2)
        digits = "  ".join(
            number[index : index + 4] for index in range(0, len(number), 4)
        )
        holder_width = max(8, inner - 18)
        foot_labels = "TITULAR".ljust(holder_width) + "  " + "VALIDADE".ljust(10) + "  " + "CVV"
        foot_values = (
            (holder or "—")[:holder_width].ljust(holder_width)
            + "  "
            + (expiry or "--/--").ljust(10)
            + "  "
            + (cvv or "---")
        )
        return [
            rule(0, True),
            row(" " + top, 0),
            row(" " + second, 1),
            row(spacer, 2),
            row(" " + digits, 3, bold=True),
            row(spacer, 4),
            row(" " + foot_labels, 5),
            row(" " + foot_values, 5, bold=True),
            rule(6, False),
        ]

    def logo_line(self, width: Optional[int] = None, subtitle: str = "") -> str:
        from ..version import PRODUCT, TAG, TAGLINE, TELEGRAM

        target = width if width is not None else self.width
        mark = self.glyphs.vertical if self.caps.unicode else self.glyphs.bullet
        logo = gradient("%s %s " % (mark, PRODUCT.upper()), self.theme.gradient, self.caps, bold=True)
        logo += self.paint(TAG, fg=self.role("dim")) + " "
        tagline = subtitle or TAGLINE
        if width is None or width >= 80:
            logo += self.paint(self.glyphs.dot + " " + tagline, fg=self.role("muted"))
        right = self.paint("telegram @" + TELEGRAM, fg=self.role("accent"))
        room = max(1, target - visible_width(logo) - visible_width(right) - 1)
        return fit(logo + " " * room + right, target)

    def header_bar(self, left: str, right: str = "", width: Optional[int] = None) -> str:
        target = width if width is not None else self.width
        left_text = " " + left
        right_text = right + " "
        room = max(1, target - visible_width(left_text) - visible_width(right_text))
        line = left_text + " " * room + right_text
        return self.bg_line(fit(line, target), self.role("raised"), self.role("text"))

    def footer_bar(self, hints: Sequence[Tuple[str, str]], note: str = "", width: Optional[int] = None) -> str:
        target = width if width is not None else self.width
        parts: List[str] = []
        for key, label in hints:
            parts.append(
                self.paint(" %s " % key, fg=self.role("surface"), bg=self.role("secondary"), bold=True)
                + " "
                + self.paint(label, fg=self.role("muted"))
            )
        text = "  ".join(parts)
        if note:
            room = target - visible_width(text) - visible_width(note) - 2
            text = text + " " * max(1, room) + self.paint(note, fg=self.role("dim"))
        return self.bg_line(fit(" " + text, target), self.role("surface"))

    def app_header(self, ui_path: str = "", status: str = "", width: Optional[int] = None) -> str:
        from ..version import PRODUCT, TAG, TELEGRAM

        target = width if width is not None else self.width
        left = self.paint(PRODUCT.upper(), fg=self.role("primary"), bold=True)
        left += " " + self.paint(TAG, fg=self.role("dim"))
        if ui_path:
            left += " " + self.paint(self.glyphs.arrow, fg=self.role("dim"))
            left += " " + self.paint(ui_path, fg=self.role("text"))
        right = ""
        if status:
            right += self.paint(status, fg=self.role("muted")) + " " + self.paint(self.glyphs.dot, fg=self.role("dim")) + " "
        right += self.paint("@" + TELEGRAM, fg=self.role("accent"))
        return self.header_bar(left, right, target)

    def notice(self, message: str, color: str = "info", width: Optional[int] = None) -> List[str]:
        target = width if width is not None else self.width
        icon = {
            "info": self.glyphs.info,
            "ok": self.glyphs.check,
            "success": self.glyphs.check,
            "warn": self.glyphs.warning,
            "warning": self.glyphs.warning,
            "error": self.glyphs.cross_mark,
            "danger": self.glyphs.cross_mark,
        }.get(color, self.glyphs.info)
        role = {"ok": "success", "error": "danger", "success": "success", "danger": "danger", "warn": "warn"}.get(
            color, "info"
        )
        prefix = self.paint(" %s " % icon, fg=self.role(role), bold=True)
        room = target - visible_width(prefix) - 2
        chunks = wrap_text(message, max(10, room))
        lines = []
        for index, chunk in enumerate(chunks):
            marker = prefix if index == 0 else " " * visible_width(prefix)
            lines.append(fit(marker + self.paint(chunk, fg=self.role("text")), target))
        return lines

    def toast(self, message: str, color: str = "success", width: Optional[int] = None) -> List[str]:
        return self.notice(message, color, width)

    def file_row(self, name: str, size: str, lines: str, when: str, width: int, selected: bool = False) -> str:
        name_width = max(12, width - 36)
        stamp = when or ""
        pieces = stamp.split(" ")
        if len(pieces) == 2 and len(pieces[0]) == 10:
            stamp = pieces[0][:5] + " " + pieces[1]
        text = (
            self.glyphs.bullet
            + " "
            + fit(self.paint(name, fg=self.role("primary" if selected else "text"), bold=selected), name_width)
            + " "
            + fit(self.paint(size, fg=self.role("muted")), 10, align="right")
            + " "
            + fit(self.paint(lines, fg=self.role("secondary")), 10, align="right")
            + " "
            + fit(self.paint(stamp, fg=self.role("dim")), 11, align="right")
        )
        if selected:
            text = fit(text, width)
            return self.bg_line(text, self.role("raised"))
        return fit(text, width)

    def spinner(self, tick: int) -> str:
        frames = self.glyphs.spinner
        return self.paint(frames[tick % len(frames)], fg=self.role("primary"), bold=True)

    def masked_number(self, number: str, revealed: bool = False) -> str:
        if revealed:
            return number
        if len(number) < 10:
            return number
        return number[:6] + " " + "*" * (len(number) - 10) + " " + number[-4:]

    def status_dot(self, ok: bool, label: str) -> str:
        color = "success" if ok else "danger"
        return self.paint("●", fg=self.role(color)) + " " + self.paint(label, fg=self.role("muted"))

    def kv_block(self, pairs: Sequence[Tuple[str, str]], width: int, key_width: int = 13, compact: bool = False) -> List[str]:
        lines: List[str] = []
        for key, value in pairs:
            label = fit(self.paint(key.upper(), fg=self.role("muted")), key_width)
            separator = self.paint(self.glyphs.dot, fg=self.role("dim"))
            room = max(8, width - key_width - 4)
            chunks = wrap_text(value, room) or [""]
            lines.append(fit(label + " " + separator + " " + self.paint(chunks[0], fg=self.role("text")), width))
            if compact:
                continue
            for chunk in chunks[1:]:
                lines.append(fit(" " * (key_width + 3) + self.paint(chunk, fg=self.role("text")), width))
        return lines

    def gauge_line(self, label: str, value: str, color: str, width: int, label_width: int = 20) -> str:
        return (
            fit(self.paint(label, fg=self.role("muted")), label_width)
            + self.paint(value, fg=self.role(color), bold=True)
        )
