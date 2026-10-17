from __future__ import annotations

from typing import Any, Dict, List, Optional, Sequence, Tuple

from ...ui.widgets import UI

__all__ = ["form_screen", "render_lines", "screens", "get_screen"]


def form_screen(
    ctx: Any,
    title: str,
    pairs: Sequence[Tuple[str, str]] = (),
    subtitle: str = "",
    note: str = "",
    color: str = "info",
    extra: Sequence[str] = (),
) -> None:
    ui: UI = ctx.ui
    width = ctx.term.size()[0]
    lines: List[str] = [ui.app_header(title.lower(), "", width), ""]
    lines.append(ui.section(title, width))
    if subtitle:
        lines.append("")
        for chunk in ui.wrap(subtitle, width - 2):
            lines.append(" " + ui.paint(chunk, fg=ui.role("muted")))
        lines.append("")
    if pairs:
        lines.extend(ui.kv_block(pairs, width))
        lines.append("")
    lines.extend(extra)
    if note:
        lines.extend(ui.notice(note, color, width))
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)


def render_lines(ctx: Any, lines: Sequence[str], wait: bool = True, pad: bool = False) -> None:
    ctx.term.frame(lines, ctx.term.size()[0], ctx.term.size()[1], pad=pad)
    if wait:
        from ..live import press_any

        press_any(ctx)


def screens() -> Dict[str, Any]:
    from . import about, bulk, combos, generate, library, lookup, settings, validate

    return {
        "generate": generate.run,
        "bulk": bulk.run,
        "lookup": lookup.run,
        "combos": combos.run,
        "validate": validate.run,
        "library": library.run,
        "settings": settings.run,
        "about": about.run,
    }


def get_screen(name: str) -> Optional[Any]:
    return screens().get(name)
