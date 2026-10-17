from __future__ import annotations

import json
import os
import platform
import shutil
import sys
import time
from dataclasses import dataclass, field
from datetime import datetime, date
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Sequence, Tuple

__all__ = [
    "APP_DIR_NAME",
    "Paths",
    "Config",
    "OutputWriter",
    "FileEntry",
    "list_outputs",
    "History",
    "human_bytes",
    "human_duration",
    "human_int",
    "IS_TERMUX",
]

APP_DIR_NAME = "lbin"
IS_WINDOWS = os.name == "nt"
IS_TERMUX = "com.termux" in os.environ.get(
    "PREFIX", ""
) or "termux" in platform.platform().lower() or "ANDROID_ROOT" in os.environ


def human_bytes(value: float) -> str:
    units = ("B", "KB", "MB", "GB", "TB")
    size = float(value)
    for unit in units:
        if size < 1024.0 or unit == units[-1]:
            return "%.1f %s" % (size, unit) if unit != "B" else "%d B" % size
        size /= 1024.0
    return "%.1f TB" % size


def human_duration(seconds: float) -> str:
    seconds = max(0.0, float(seconds))
    if seconds < 1:
        return "%d ms" % int(seconds * 1000)
    if seconds < 60:
        return "%.1f s" % seconds
    minutes, rest = divmod(int(seconds), 60)
    if minutes < 60:
        return "%dm %02ds" % (minutes, rest)
    hours, minutes = divmod(minutes, 60)
    return "%dh %02dm" % (hours, minutes)


def human_int(value: int) -> str:
    return "{:,}".format(int(value)).replace(",", ".")


class Paths:
    def __init__(self, home: Optional[str] = None) -> None:
        override = os.environ.get("LBIN_HOME")
        if override:
            self.base = Path(override).expanduser()
        elif home:
            self.base = Path(home).expanduser()
        elif IS_WINDOWS:
            self.base = Path(os.environ.get("APPDATA", str(Path.home()))) / "LBin"
        else:
            xdg = os.environ.get("XDG_CONFIG_HOME", "")
            root = Path(xdg).expanduser() if xdg else Path.home() / ".config"
            self.base = root / APP_DIR_NAME
        self.config_file = self.base / "config.json"
        self.cache_dir = self.base / "cache"
        self.bin_cache = self.cache_dir / "bin-cache.json"
        self.history_file = self.base / "history.json"

    def ensure(self) -> "Paths":
        self.base.mkdir(parents=True, exist_ok=True)
        self.cache_dir.mkdir(parents=True, exist_ok=True)
        return self

    def resolve_output(self, value: str) -> Path:
        if not value:
            return Path.cwd() / "output"
        return Path(value).expanduser()


DEFAULT_CONFIG: Dict[str, Any] = {
    "config_version": 3,
    "profile": {
        "nickname": "",
        "telegram": "",
        "accepted_terms": False,
        "first_run": "",
    },
    "ui": {
        "theme": "neon",
        "glyphs": "auto",
        "animations": True,
        "banner": True,
        "color": "auto",
        "confirm_exit": True,
    },
    "network": {
        "providers": ["binlist"],
        "offline_first": True,
        "timeout": 6.0,
        "retries": 2,
        "rate": 4.0,
        "workers": 8,
        "proxies": [],
        "bincodes_key": "",
    },
    "output": {
        "dir": "",
        "format": "txt",
        "template": "{number}|{month}|{year}|{cvc}",
        "unique": True,
    },
    "generator": {
        "length": 16,
        "span_years": 5,
        "with_expiry": True,
        "with_cvv": True,
        "with_holder": False,
        "auto_save": True,
    },
}


def _merge(base: Dict[str, Any], incoming: Dict[str, Any]) -> Dict[str, Any]:
    result = dict(base)
    for key, value in (incoming or {}).items():
        if isinstance(value, dict) and isinstance(result.get(key), dict):
            result[key] = _merge(result[key], value)
        else:
            result[key] = value
    return result


class Config:
    def __init__(self, paths: Optional[Paths] = None) -> None:
        self.paths = (paths or Paths()).ensure()
        self.data: Dict[str, Any] = json.loads(json.dumps(DEFAULT_CONFIG))
        self.load()

    def load(self) -> "Config":
        try:
            raw = json.loads(self.paths.config_file.read_text(encoding="utf-8"))
            self.data = _merge(DEFAULT_CONFIG, raw)
        except (OSError, ValueError):
            self.data = json.loads(json.dumps(DEFAULT_CONFIG))
        return self

    def save(self) -> "Config":
        self.paths.ensure()
        tmp = self.paths.config_file.with_suffix(".tmp")
        tmp.write_text(
            json.dumps(self.data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
        )
        os.replace(str(tmp), str(self.paths.config_file))
        return self

    def section(self, name: str) -> Dict[str, Any]:
        value = self.data.get(name)
        if not isinstance(value, dict):
            value = {}
            self.data[name] = value
        return value

    def get(self, section: str, key: str, default: Any = None) -> Any:
        return self.section(section).get(key, default)

    def set(self, section: str, key: str, value: Any) -> "Config":
        self.section(section)[key] = value
        return self

    def toggle(self, section: str, key: str) -> bool:
        current = bool(self.get(section, key, False))
        self.set(section, key, not current)
        return not current

    def output_dir(self) -> Path:
        path = self.paths.resolve_output(str(self.get("output", "dir", "")))
        path.mkdir(parents=True, exist_ok=True)
        return path


@dataclass
class FileEntry:
    path: Path
    size: int
    mtime: float
    lines: int = 0

    @property
    def name(self) -> str:
        return self.path.name

    @property
    def age(self) -> str:
        return human_duration(max(0.0, time.time() - self.mtime))

    @property
    def when(self) -> str:
        return datetime.fromtimestamp(self.mtime).strftime("%d/%m/%Y %H:%M")


def count_lines(path: Path, limit_bytes: int = 8 * 1024 * 1024) -> int:
    try:
        size = path.stat().st_size
        with path.open("rb") as handle:
            data = handle.read(limit_bytes)
        lines = data.count(b"\n")
        if size > limit_bytes:
            ratio = size / max(1, len(data))
            lines = int(lines * ratio)
        return lines
    except OSError:
        return 0


def list_outputs(directory: Path) -> List[FileEntry]:
    entries: List[FileEntry] = []
    if not directory.exists():
        return entries
    for item in sorted(directory.iterdir()):
        if not item.is_file() or item.name.startswith("."):
            continue
        try:
            stat = item.stat()
        except OSError:
            continue
        entries.append(FileEntry(path=item, size=stat.st_size, mtime=stat.st_mtime))
    entries.sort(key=lambda entry: entry.mtime, reverse=True)
    return entries


class OutputWriter:
    def __init__(
        self,
        path: Path,
        fmt: Any,
        meta: Optional[Dict[str, object]] = None,
        template: str = "",
    ) -> None:
        self.path = Path(path)
        self.fmt = fmt
        self.template = template
        self.meta = meta or {}
        self.records = 0
        self.bytes = 0
        self._handle = None
        self._first = True
        self._pending: Optional[Dict[str, object]] = None

    def __enter__(self) -> "OutputWriter":
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self._handle = self.path.open("w", encoding="utf-8", newline="")
        self._write(self.fmt_header())
        return self

    def __exit__(self, exc_type, exc, tb) -> None:
        if self._handle is not None:
            try:
                self._flush_pending()
                self._write(self.fmt_footer())
            finally:
                self._handle.close()
                self._handle = None

    def fmt_header(self) -> str:
        from . import exporters

        return exporters.header(self.fmt, self.meta, self.template)

    def fmt_footer(self) -> str:
        from . import exporters

        meta = dict(self.meta)
        meta.setdefault("count", self.records)
        return exporters.footer(self.fmt, meta)

    def write(self, record: Dict[str, object]) -> None:
        from . import exporters

        if self.fmt.key == "json":
            if self._pending is not None:
                self._write(_json_line(exporters.render(self.fmt, self._pending, self.template), last=False))
            self._pending = record
            self.records += 1
            return
        self._write(exporters.render(self.fmt, record, self.template))
        self.records += 1

    def write_many(self, records: Iterable[Dict[str, object]]) -> int:
        from . import exporters

        render = exporters.render
        fmt = self.fmt
        template = self.template
        buffer: List[str] = []
        count = 0
        for record in records:
            if fmt.key == "json":
                if self._pending is not None:
                    buffer.append(_json_line(render(fmt, self._pending, template), last=False))
                self._pending = record
            else:
                buffer.append(render(fmt, record, template))
            count += 1
            if len(buffer) >= 512:
                self._write("".join(buffer))
                buffer.clear()
        if buffer:
            self._write("".join(buffer))
        self.records += count
        return count

    def _flush_pending(self) -> None:
        if self._pending is None:
            return
        from . import exporters

        self._write(_json_line(exporters.render(self.fmt, self._pending, self.template), last=True))
        self._pending = None

    def _write(self, text: str) -> None:
        if not text or self._handle is None:
            return
        self._handle.write(text)
        self.bytes += len(text.encode("utf-8", "replace"))

    def flush(self) -> None:
        if self._handle is not None:
            self._handle.flush()


def _json_line(text: str, last: bool) -> str:
    stripped = text.rstrip("\n")
    if last:
        stripped = stripped.rstrip(",")
    return stripped + "\n"


@dataclass
class History:
    paths: Paths
    data: Dict[str, Any] = field(default_factory=dict)

    def __post_init__(self) -> None:
        self.load()

    def load(self) -> Dict[str, Any]:
        try:
            self.data = json.loads(self.paths.history_file.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            self.data = {"sessions": []}
        self.data.setdefault("sessions", [])
        return self.data

    def save(self) -> None:
        self.paths.ensure()
        tmp = self.paths.history_file.with_suffix(".tmp")
        tmp.write_text(json.dumps(self.data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        os.replace(str(tmp), str(self.paths.history_file))

    @property
    def sessions(self) -> List[Dict[str, Any]]:
        return list(self.data.get("sessions", []))

    def record(self, entry: Dict[str, Any]) -> None:
        entry = dict(entry)
        entry.setdefault("at", datetime.now().isoformat(timespec="seconds"))
        self.data.setdefault("sessions", []).append(entry)
        self.data["sessions"] = self.data["sessions"][-500:]
        self.save()

    def totals(self) -> Dict[str, Any]:
        sessions = self.sessions
        cards = sum(int(item.get("cards", 0)) for item in sessions)
        elapsed = sum(float(item.get("elapsed", 0.0)) for item in sessions)
        brands: Dict[str, int] = {}
        per_day: Dict[str, int] = {}
        for item in sessions:
            for key, value in (item.get("brands") or {}).items():
                brands[key] = brands.get(key, 0) + int(value)
            day = str(item.get("at", ""))[:10]
            per_day[day] = per_day.get(day, 0) + int(item.get("cards", 0))
        return {
            "sessions": len(sessions),
            "cards": cards,
            "elapsed": elapsed,
            "rate": (cards / elapsed) if elapsed else 0.0,
            "brands": brands,
            "per_day": dict(sorted(per_day.items())[-14:]),
            "last": sessions[-1] if sessions else None,
        }

    def clear(self) -> None:
        self.data = {"sessions": []}
        self.save()


def free_space(path: Path) -> int:
    try:
        target = path if path.exists() else path.parent
        return shutil.disk_usage(str(target)).free
    except OSError:
        return 0
