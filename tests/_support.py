from __future__ import annotations

import os
import sys
import time
from pathlib import Path
from types import SimpleNamespace
from typing import Any, Dict, List, Optional

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from lbin.app.context import build_context  # noqa: E402
from lbin.ui.ansi import strip  # noqa: E402
from lbin.ui.prompt import Prompter  # noqa: E402


class FakeTerminal:
    """Dublê do Terminal: respostas roteirizadas por rótulo, teclas em fila, quadros gravados."""

    def __init__(self, width: int = 100, height: int = 32) -> None:
        self._size = (width, height)
        self.answers: Dict[str, Any] = {}
        self.choices: List[str] = []
        self.keys: List[Optional[str]] = []
        self.writes: List[str] = []
        self.frames: List[List[str]] = []
        self.cursor = True
        self.raw = False
        self.caps: Any = None
        self.interactive = False

    def configure(
        self,
        answers: Optional[Dict[str, Any]] = None,
        choices: Optional[List[str]] = None,
        keys: Optional[List[Optional[str]]] = None,
    ) -> "FakeTerminal":
        if answers:
            self.answers.update(answers)
        if choices:
            self.choices.extend(choices)
        if keys:
            self.keys.extend(keys)
        return self

    def size(self):
        return self._size

    def write(self, text: str) -> None:
        self.writes.append(str(text))

    def frame(self, lines, width=None, height=None, pad=True):
        self.frames.append([strip(str(line)) for line in lines])

    def begin(self) -> None:
        pass

    def end(self) -> None:
        pass

    def restore(self) -> None:
        pass

    def clear(self) -> None:
        pass

    def hide_cursor(self) -> None:
        self.cursor = False

    def show_cursor(self) -> None:
        self.cursor = True

    def enter_raw(self) -> bool:
        self.raw = True
        return True

    def leave_raw(self) -> bool:
        self.raw = False
        return True

    def read_key(self, timeout: Optional[float] = None) -> Optional[str]:
        time.sleep(0.002)
        if self.keys:
            return self.keys.pop(0)
        return None

    def line_input(self, prompt: str = "") -> str:
        self.writes.append(prompt)
        text = strip(prompt).lower()
        if "escolha" in text:
            return self.choices.pop(0) if self.choices else ""
        for needle, answer in self.answers.items():
            if needle.lower() in text:
                if isinstance(answer, list):
                    return answer.pop(0) if answer else ""
                return answer
        return ""

    def plain_output(self) -> str:
        return strip("".join(self.writes))

    def frame_text(self) -> str:
        return "\n".join("\n".join(frame) for frame in self.frames)


def make_context(
    tmpdir: Any,
    *,
    width: int = 100,
    height: int = 32,
    demo: bool = False,
    answers: Optional[Dict[str, Any]] = None,
    choices: Optional[List[str]] = None,
    keys: Optional[List[Optional[str]]] = None,
) -> Any:
    os.environ["LBIN_HOME"] = str(tmpdir)
    args = SimpleNamespace(
        color="never",
        ascii=False,
        no_anim=True,
        width=None,
        demo=demo,
        yes=True,
        command="menu",
    )
    ctx = build_context(args)
    term = FakeTerminal(width, height)
    term.caps = ctx.caps
    ctx.term = term
    ctx.prompt = Prompter(ctx.ui, term, ctx.config)
    ctx.caps.width = width
    ctx.caps.height = height
    ctx.ui.width = width
    ctx.config.set("output", "dir", str(Path(tmpdir) / "out"))
    ctx.config.set("ui", "confirm_exit", False)
    term.configure(answers=answers, choices=choices, keys=keys)
    return ctx


DEFAULT_ANSWERS: Dict[str, Any] = {
    "online": "n",
    "quantidade": "40",
    "workers": "4",
    "cartoes ou bins": "4111111111111111",
    "lista de bins": "516230 457173 411111",
    "lista de cartoes": "4111111111111111 4111111111111112",
    "numero do cartao": "4111111111111111",
    "meses": "1",
    "anos": "26",
}
