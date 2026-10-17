from __future__ import annotations

import atexit
import os
import select
import shutil
import signal
import sys
import time
from typing import List, Optional, Sequence

from .ansi import Caps, fit, visible_width

__all__ = ["Terminal", "decode_key"]

_ESC = "\x1b"

KEY_TABLE = {
    "\x1b[A": "up",
    "\x1b[B": "down",
    "\x1b[C": "right",
    "\x1b[D": "left",
    "\x1b[Z": "shift-tab",
    "\x1b[5~": "pgup",
    "\x1b[6~": "pgdn",
    "\x1b[3~": "del",
    "\x1b[H": "home",
    "\x1b[F": "end",
    "\x1b[1~": "home",
    "\x1b[4~": "end",
    "\x1bOA": "up",
    "\x1bOB": "down",
    "\x1bOC": "right",
    "\x1bOD": "left",
    "\x1bOH": "home",
    "\x1bOF": "end",
    "\r": "enter",
    "\n": "enter",
    "\t": "tab",
    "\x7f": "backspace",
    "\x08": "backspace",
    "\x1b": "esc",
    "\x03": "ctrl-c",
    "\x04": "ctrl-d",
    " ": "space",
}

WINDOWS_KEYS = {
    "H": "up",
    "P": "down",
    "K": "left",
    "M": "right",
    "G": "home",
    "O": "end",
    "S": "del",
    "I": "pgup",
    "Q": "pgdn",
}


def decode_key(data: str) -> str:
    if not data:
        return ""
    if data in KEY_TABLE:
        return KEY_TABLE[data]
    if data.startswith("\x1b"):
        for sequence, name in KEY_TABLE.items():
            if data.startswith(sequence) and sequence != "\x1b":
                return name
        return "esc"
    return data


class Terminal:
    def __init__(self, caps: Caps, stream: object = None, output: object = None) -> None:
        self.caps = caps
        self.stream = stream or sys.stdin
        self.output = output or sys.stdout
        self._raw = False
        self._saved = None
        self._alt = False
        self._tty_in = bool(getattr(self.stream, "isatty", lambda: False)())
        self._tty_out = bool(getattr(self.output, "isatty", lambda: False)())
        atexit.register(self.restore)

    @property
    def interactive(self) -> bool:
        return self._tty_in and self.caps.tty

    def size(self) -> tuple:
        size = shutil.get_terminal_size((self.caps.width, self.caps.height))
        return max(40, size.columns), max(16, size.lines)

    def write(self, text: str) -> None:
        if not self.caps.unicode:
            from .ansi import to_ascii

            text = to_ascii(text)
        try:
            self.output.write(text)
            self.output.flush()
        except (OSError, ValueError):
            pass

    def clear(self) -> None:
        if self.caps.escape:
            self.write("\x1b[2J\x1b[H")
        else:
            self.write("\n" * 2)

    def begin(self) -> None:
        if self.caps.escape and self._tty_out:
            self.write("\x1b[?1049h\x1b[?25l\x1b[2J\x1b[H")
            self._alt = True

    def end(self) -> None:
        if self._alt:
            self.write("\x1b[?25h\x1b[?1049l")
            self._alt = False
        elif self.caps.escape:
            self.write("\x1b[?25h")

    def hide_cursor(self) -> None:
        if self.caps.escape:
            self.write("\x1b[?25l")

    def show_cursor(self) -> None:
        if self.caps.escape:
            self.write("\x1b[?25h")

    def frame(
        self,
        lines: Sequence[str],
        width: Optional[int] = None,
        height: Optional[int] = None,
        pad: bool = True,
    ) -> None:
        terminal_width, terminal_height = self.size()
        width = width or terminal_width
        height = height or terminal_height
        if not self.caps.escape:
            for line in lines:
                self.write(line + "\n")
            return
        if len(lines) > height:
            lines = list(lines[: max(1, height - 1)]) + [lines[-1]]
        rendered = [fit(line, width) for line in lines[:height]]
        if pad:
            while len(rendered) < height:
                rendered.append(" " * width)
        if rendered:
            rendered[-1] = fit(rendered[-1], max(1, width - 1))
        body = "\n".join(rendered)
        self.write("\x1b[H" + body + "\x1b[0m\x1b[J")

    def lines(self, lines: Sequence[str]) -> None:
        for line in lines:
            self.write(line + "\n")

    def enter_raw(self) -> bool:
        if self._raw or not self._tty_in or os.name == "nt":
            return False
        try:
            import termios
            import tty

            fd = self.stream.fileno()
            self._saved = termios.tcgetattr(fd)
            mode = termios.tcgetattr(fd)
            mode[3] = mode[3] & ~(termios.ECHO | termios.ICANON)
            mode[6][termios.VMIN] = 1
            mode[6][termios.VTIME] = 0
            termios.tcsetattr(fd, termios.TCSADRAIN, mode)
            self._raw = True
            return True
        except Exception:
            self._saved = None
            return False

    def leave_raw(self) -> bool:
        if not self._raw or self._saved is None:
            self._raw = False
            return False
        try:
            import termios

            termios.tcsetattr(self.stream.fileno(), termios.TCSADRAIN, self._saved)
        except Exception:
            pass
        self._raw = False
        return True

    def read_key(self, timeout: Optional[float] = None) -> Optional[str]:
        if not self._tty_in:
            return None
        if os.name == "nt":
            return self._read_key_windows(timeout)
        return self._read_key_posix(timeout)

    def _read_key_posix(self, timeout: Optional[float]) -> Optional[str]:
        try:
            fd = self.stream.fileno()
        except (OSError, ValueError, AttributeError):
            return None
        try:
            ready, _, _ = select.select([fd], [], [], timeout)
        except (OSError, ValueError):
            return None
        if not ready:
            return None
        try:
            chunk = os.read(fd, 1)
        except OSError:
            return None
        if not chunk:
            return "eof"
        data = chunk.decode("utf-8", "replace")
        if data == _ESC:
            deadline = time.monotonic() + 0.02
            while time.monotonic() < deadline and len(data) < 8:
                ready, _, _ = select.select([fd], [], [], 0.01)
                if not ready:
                    break
                try:
                    more = os.read(fd, 1)
                except OSError:
                    break
                if not more:
                    break
                data += more.decode("utf-8", "replace")
                if data[-1].isalpha() or data[-1] == "~":
                    break
        return decode_key(data)

    def _read_key_windows(self, timeout: Optional[float]) -> Optional[str]:
        try:
            import msvcrt
        except ImportError:
            return None
        deadline = None if timeout is None else time.monotonic() + timeout
        while True:
            if msvcrt.kbhit():
                char = msvcrt.getwch()
                if char in ("\x00", "\xe0"):
                    code = msvcrt.getwch()
                    return WINDOWS_KEYS.get(code, "")
                if char == "\x03":
                    raise KeyboardInterrupt
                return decode_key(char)
            if deadline is not None and time.monotonic() >= deadline:
                return None
            time.sleep(0.02)

    def line_input(self, prompt: str = "") -> str:
        was_raw = self._raw
        if was_raw:
            self.leave_raw()
        self.show_cursor()
        try:
            if prompt:
                self.write(prompt)
            value = input()
        except EOFError:
            value = ""
        except KeyboardInterrupt:
            if was_raw:
                self.enter_raw()
            raise
        finally:
            if was_raw:
                self.enter_raw()
        return value

    def restore(self) -> None:
        try:
            self.leave_raw()
        except Exception:
            pass
        try:
            self.end()
        except Exception:
            pass

    def install_signals(self, handler) -> None:
        for name in ("SIGINT", "SIGTERM", "SIGHUP"):
            signal_value = getattr(signal, name, None)
            if signal_value is None:
                continue
            try:
                signal.signal(signal_value, handler)
            except (ValueError, OSError):
                continue
