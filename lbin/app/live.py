from __future__ import annotations

import time
from typing import Any, Callable, Dict, List, Optional, Sequence, Tuple

from ..ui.widgets import UI

__all__ = ["run_job_screen", "show_lines", "press_any"]


def press_any(ctx: Any, note: str = "") -> None:
    ctx.term.show_cursor()
    width = ctx.term.size()[0]
    if note:
        ctx.term.write("\n" + ctx.ui.paint(" " + note, fg=ctx.ui.role("dim")) + "\n")
    else:
        ctx.term.write("\n")
    ctx.term.write(ctx.ui.paint(" pressione qualquer tecla para voltar ", fg=ctx.ui.role("muted")) + "\n")
    if not ctx.term.interactive:
        return
    if not ctx.term.enter_raw():
        return
    try:
        ctx.term.read_key(30)
    except KeyboardInterrupt:
        pass
    finally:
        ctx.term.leave_raw()


def show_lines(ctx: Any, lines: Sequence[str], wait: bool = True) -> None:
    ctx.term.hide_cursor()
    ctx.term.frame(lines, ctx.term.size()[0], ctx.term.size()[1], pad=False)
    if wait:
        press_any(ctx)


def run_job_screen(
    ctx: Any,
    job: Any,
    state: Dict[str, Any],
    render: Callable[[Dict[str, Any]], List[str]],
    hints: Sequence[Tuple[str, str]] = (),
    on_item: Optional[Callable[[Dict[str, Any], Any], None]] = None,
    on_key: Optional[Callable[[str, Dict[str, Any]], Optional[str]]] = None,
    fps: float = 8.0,
    grace: float = 0.7,
    note: str = "",
) -> Dict[str, Any]:
    ui: UI = ctx.ui
    term = ctx.term
    state.setdefault("hints", list(hints))
    if note:
        state["note"] = note
    raw = term.interactive and term.enter_raw()
    finished_at: Optional[float] = None
    try:
        while True:
            for item in job.drain(2048):
                if on_item is not None:
                    on_item(state, item)
            state["stats"] = job.snapshot()
            width, height = term.size()
            state["width"] = width
            state["height"] = height
            term.frame(render(state), width, height)
            key = term.read_key(1.0 / max(1.0, fps))
            if key is not None and on_key is not None:
                action = on_key(key, state)
                if action == "quit":
                    job.stop()
                elif action == "pause":
                    job.pause()
                elif action == "resume":
                    job.pause(False)
            if job.finished and finished_at is None:
                finished_at = time.monotonic()
            if finished_at is not None and (time.monotonic() - finished_at >= grace or not term.interactive):
                for item in job.drain(2048):
                    if on_item is not None:
                        on_item(state, item)
                state["stats"] = job.snapshot()
                width, height = term.size()
                state["width"] = width
                state["height"] = height
                term.frame(render(state), width, height)
                break
    finally:
        if raw:
            term.leave_raw()
    return job.snapshot()
