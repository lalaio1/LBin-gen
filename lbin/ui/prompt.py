from __future__ import annotations

from typing import Callable, List, Optional, Sequence, Tuple

from .widgets import MenuItem, UI

__all__ = ["Prompter"]


class Prompter:
    def __init__(self, ui: UI, term: object, config: object = None) -> None:
        self.ui = ui
        self.term = term
        self.config = config

    def _prompt_text(self, label: str, default: str = "", hint: str = "") -> str:
        ui = self.ui
        text = ui.paint(ui.glyphs.arrow, fg=ui.role("primary"), bold=True) + " "
        text += ui.paint(label, fg=ui.role("text"))
        if default != "":
            text += ui.paint(" [%s]" % default, fg=ui.role("dim"))
        if hint:
            text += " " + ui.paint(hint, fg=ui.role("dim"))
        return text + ui.paint(" ", fg=ui.role("muted")) + ui.paint(ui.glyphs.arrow, fg=ui.role("dim")) + " "

    def read(
        self,
        label: str,
        default: str = "",
        hint: str = "",
        required: bool = False,
        validate: Optional[Callable[[str], Optional[str]]] = None,
        allow_empty: bool = False,
    ) -> str:
        ui = self.ui
        while True:
            value = self.term.line_input(self._prompt_text(label, default, hint)).strip()
            if not value:
                if default != "":
                    value = str(default)
                elif allow_empty or not required:
                    return ""
                else:
                    self.term.write(
                        ui.paint("  %s informe um valor" % ui.glyphs.cross_mark, fg=ui.role("danger")) + "\n"
                    )
                    continue
            if validate is not None:
                error = validate(value)
                if error:
                    self.term.write(
                        ui.paint("  %s %s" % (ui.glyphs.cross_mark, error), fg=ui.role("danger")) + "\n"
                    )
                    continue
            return value

    def read_int(
        self,
        label: str,
        default: Optional[int] = None,
        low: Optional[int] = None,
        high: Optional[int] = None,
        hint: str = "",
    ) -> Optional[int]:
        def validate(value: str) -> Optional[str]:
            if not value.isdigit():
                return "digite apenas numeros"
            number = int(value)
            if low is not None and number < low:
                return "o minimo e %d" % low
            if high is not None and number > high:
                return "o maximo e %d" % high
            return None

        raw = self.read(label, "" if default is None else str(default), hint, validate=validate)
        if raw == "":
            return None
        return int(raw)

    def confirm(self, label: str, default: bool = True) -> bool:
        ui = self.ui
        suffix = "S/n" if default else "s/N"
        raw = self.term.line_input(self._prompt_text(label, suffix, "")).strip().lower()
        if not raw:
            return default
        return raw[0] in ("s", "y", "1", "v")

    def press_any(self, label: str = "pressione qualquer tecla para voltar") -> None:
        ui = self.ui
        self.term.write("\n" + self.ui.paint(" " + label, fg=ui.role("dim")))
        if not self.term.interactive:
            self.term.write("\n")
            return
        if not self.term.enter_raw():
            self.term.write("\n")
            return
        try:
            self.term.read_key(None)
        except KeyboardInterrupt:
            pass
        finally:
            self.term.leave_raw()

    def _step(self, items: Sequence[MenuItem], index: int, direction: int, clamp: bool = False) -> int:
        total = len(items)
        if total == 0:
            return 0
        current = max(0, min(index, total - 1))
        for _ in range(total):
            if clamp:
                current += direction
                if current < 0:
                    return self._first_enabled(items)
                if current > total - 1:
                    return self._last_enabled(items)
            else:
                current = (current + direction) % total
            if items[current].enabled:
                return current
        return index

    def _first_enabled(self, items: Sequence[MenuItem]) -> int:
        for index, item in enumerate(items):
            if item.enabled:
                return index
        return 0

    def _last_enabled(self, items: Sequence[MenuItem]) -> int:
        for index in range(len(items) - 1, -1, -1):
            if items[index].enabled:
                return index
        return 0

    def select(
        self,
        items: Sequence[MenuItem],
        title: str = "",
        header: Optional[Sequence[str]] = None,
        footer: Optional[Sequence[str]] = None,
        default: int = 0,
        allow_back: bool = True,
        hint: str = "enter seleciona",
    ) -> Optional[str]:
        if not items:
            return None
        header = list(header or [])
        footer = list(footer or [])
        if not self.term.interactive or not self.term.enter_raw():
            return self._select_fallback(items, title, default, allow_back)
        selected = max(0, min(default, len(items) - 1))
        ui = self.ui
        scroll = 0
        try:
            while True:
                width, height = self.term.size()
                available = height - len(header) - len(footer) - (4 if title else 3)
                available = max(3, available)
                if len(items) > available:
                    scroll = max(0, min(selected - available // 2, len(items) - available))
                lines: List[str] = list(header)
                if title:
                    lines.append("")
                    lines.append(ui.section(title, width))
                lines.extend(ui.menu(items, selected, width, height=available))
                lines.append("")
                lines.extend(footer)
                keys = [("↑↓", "navegar"), ("enter", "selecionar")]
                if allow_back:
                    keys.append(("q", "voltar"))
                keys.append(("1-9", "pular"))
                lines.append(ui.footer_bar(keys, hint, width))
                self.term.frame(lines, width, height)
                key = self.term.read_key(0.5)
                if key is None:
                    continue
                if key in ("up", "k"):
                    selected = self._step(items, selected, -1)
                elif key in ("down", "j"):
                    selected = self._step(items, selected, 1)
                elif key == "home":
                    selected = self._step(items, 0, 1) if not items[0].enabled else 0
                elif key == "end":
                    selected = len(items) - 1 if items[-1].enabled else self._step(items, len(items) - 1, -1)
                elif key == "pgup":
                    selected = self._step(items, max(0, selected - available), -1, clamp=True)
                elif key == "pgdn":
                    selected = self._step(items, min(len(items) - 1, selected + available), 1, clamp=True)
                elif key == "enter":
                    item = items[selected]
                    if item.enabled:
                        return item.key
                elif key in ("q", "esc") and allow_back:
                    return None
                elif key == "ctrl-c":
                    raise KeyboardInterrupt
                elif key and key.isdigit():
                    index = int(key) - 1
                    if 0 <= index < len(items):
                        selected = index
                        if index > 9:
                            continue
                        if key == "0" and len(items) >= 10:
                            selected = 9
        finally:
            self.term.leave_raw()

    def _select_fallback(
        self,
        items: Sequence[MenuItem],
        title: str,
        default: int,
        allow_back: bool,
    ) -> Optional[str]:
        ui = self.ui
        if title:
            self.term.write(ui.section(title) + "\n")
        for index, item in enumerate(items):
            line = "  %2d) %s" % (index + 1, item.label)
            if item.hint:
                line += ui.paint("  %s" % item.hint, fg=ui.role("dim"))
            self.term.write(line + "\n")
        raw = self.term.line_input(
            self._prompt_text("escolha", str(default + 1), "(0 para voltar)" if allow_back else "")
        ).strip()
        if not raw:
            return items[default].key
        if not raw.isdigit():
            return None
        index = int(raw) - 1
        if index < 0:
            return None
        if index >= len(items):
            return None
        return items[index].key

    def multi_select(
        self,
        items: Sequence[MenuItem],
        title: str = "",
        header: Optional[Sequence[str]] = None,
        footer: Optional[Sequence[str]] = None,
    ) -> Optional[List[str]]:
        if not items:
            return []
        header = list(header or [])
        footer = list(footer or [])
        if not self.term.interactive or not self.term.enter_raw():
            return None
        ui = self.ui
        selected = 0
        chosen = set()
        try:
            while True:
                width, height = self.term.size()
                available = max(3, height - len(header) - len(footer) - 4)
                lines: List[str] = list(header)
                if title:
                    lines.append("")
                    lines.append(ui.section(title, width))
                view: List[MenuItem] = []
                for index, item in enumerate(items):
                    mark = ui.glyphs.radio_on if item.key in chosen else ui.glyphs.radio_off
                    view.append(
                        MenuItem(
                            key=item.key,
                            label="%s %s" % (mark, item.label),
                            hint=item.hint,
                            badge=item.badge,
                            color="success" if item.key in chosen else item.color,
                            enabled=item.enabled,
                        )
                    )
                lines.extend(ui.menu(view, selected, width, height=available))
                lines.append("")
                lines.extend(footer)
                lines.append(
                    ui.footer_bar(
                        [("↑↓", "navegar"), ("space", "marcar"), ("enter", "confirmar"), ("q", "cancelar")],
                        "%d selecionado(s)" % len(chosen),
                        width,
                    )
                )
                self.term.frame(lines, width, height)
                key = self.term.read_key(0.5)
                if key is None:
                    continue
                if key in ("up", "k"):
                    selected = (selected - 1) % len(items)
                elif key in ("down", "j"):
                    selected = (selected + 1) % len(items)
                elif key == "space":
                    token = items[selected].key
                    if token in chosen:
                        chosen.discard(token)
                    else:
                        chosen.add(token)
                elif key == "enter":
                    return [item.key for item in items if item.key in chosen]
                elif key in ("q", "esc"):
                    return None
                elif key == "ctrl-c":
                    raise KeyboardInterrupt
        finally:
            self.term.leave_raw()

    def text_block(self, title: str, body: Sequence[str], width: Optional[int] = None) -> None:
        ui = self.ui
        width = width or self.term.size()[0]
        self.term.write(ui.section(title, width) + "\n")
        for line in body:
            self.term.write(line + "\n")
