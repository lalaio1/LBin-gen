from __future__ import annotations

import os
import sys
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional

from ..core import binlookup as binlookup_mod
from ..core.storage import Config, History, OutputWriter, Paths, human_int, list_outputs
from ..ui.ansi import Caps, detect_caps
from ..ui.prompt import Prompter
from ..ui.screen import Terminal
from ..ui.theme import load_theme
from ..ui.widgets import UI

__all__ = ["Context", "build_context"]


@dataclass
class Context:
    args: Any
    config: Config
    paths: Paths
    history: History
    caps: Caps
    ui: UI
    term: Terminal
    prompt: Prompter
    resolver: binlookup_mod.BinResolver
    client: Optional[binlookup_mod.HttpClient]
    cache: Optional[binlookup_mod.Cache]
    demo: bool = False

    def output_dir(self) -> Path:
        return self.config.output_dir()

    def width(self) -> int:
        return self.term.size()[0]

    def height(self) -> int:
        return self.term.size()[1]

    def theme_name(self) -> str:
        return str(self.config.get("ui", "theme", "neon"))

    def apply_theme(self, name: str) -> None:
        self.config.set("ui", "theme", name)
        self.ui.theme = load_theme(name)

    def reload_layout(self) -> None:
        width, height = self.term.size()
        self.caps.width = width
        self.caps.height = height
        self.ui.caps = self.caps
        self.ui.width = width

    def rebuild_ui(self) -> None:
        color = getattr(self.args, "color", None) or str(self.config.get("ui", "color", "auto"))
        if os.environ.get("LBIN_COLOR"):
            color = os.environ["LBIN_COLOR"]
        glyphs = "ascii" if getattr(self.args, "ascii", False) else str(self.config.get("ui", "glyphs", "auto"))
        animations = False if getattr(self.args, "no_anim", False) else bool(self.config.get("ui", "animations", True))
        caps = detect_caps(sys.stdout, color=color, glyphs=glyphs, animations=animations)
        caps.demo = self.demo
        self.caps = caps
        self.term.caps = caps
        theme = load_theme(self.theme_name())
        self.ui = UI(caps, theme)
        self.ui.theme = theme
        self.prompt.ui = self.ui

    def save_session(
        self,
        kind: str,
        cards: int,
        elapsed: float,
        brands: Optional[Dict[str, int]] = None,
        output: str = "",
        extra: Optional[Dict[str, Any]] = None,
    ) -> None:
        entry: Dict[str, Any] = {
            "kind": kind,
            "cards": int(cards),
            "elapsed": round(float(elapsed), 3),
            "brands": brands or {},
            "output": output,
        }
        if extra:
            entry.update(extra)
        self.history.record(entry)

    def outputs(self) -> List[Any]:
        return list_outputs(self.output_dir())

    def writer(self, path: Path, fmt_name: str, meta: Optional[Dict[str, Any]] = None) -> OutputWriter:
        from ..core import exporters
        from ..version import VERSION

        fmt = exporters.resolve_format(fmt_name)
        full_meta = {
            "version": VERSION,
            "generated": time.strftime("%d/%m/%Y %H:%M:%S"),
            "title": "LBin Gen - relatorio de cartoes de teste",
            "generator": "LBin Gen",
        }
        if meta:
            full_meta.update(meta)
        return OutputWriter(path, fmt, full_meta, str(self.config.get("output", "template", "")))

    def nickname(self) -> str:
        return str(self.config.get("profile", "nickname", ""))


def build_context(args: Any) -> Context:
    paths = Paths().ensure()
    config = Config(paths)
    demo = bool(getattr(args, "demo", None))
    color = getattr(args, "color", None) or str(config.get("ui", "color", "auto"))
    if os.environ.get("LBIN_COLOR"):
        color = os.environ["LBIN_COLOR"]
    glyphs = "ascii" if getattr(args, "ascii", False) else str(config.get("ui", "glyphs", "auto"))
    width = getattr(args, "width", None)
    if width is None and os.environ.get("LBIN_WIDTH"):
        try:
            width = int(os.environ["LBIN_WIDTH"])
        except ValueError:
            width = None
    animations = False if getattr(args, "no_anim", False) else None
    caps = detect_caps(
        sys.stdout,
        color=color,
        glyphs=glyphs,
        animations=animations,
        width=width,
    )
    caps.demo = demo
    theme = load_theme(str(config.get("ui", "theme", "neon")))
    ui = UI(caps, theme)
    term = Terminal(caps)
    prompt = Prompter(ui, term, config)

    client = None
    cache = None
    if not demo:
        timeout = float(config.get("network", "timeout", 6.0))
        retries = int(config.get("network", "retries", 2))
        rate = float(config.get("network", "rate", 4.0))
        user_agents = list(config.get("network", "user_agents", []) or [])
        proxies = binlookup_mod.ProxyPool(
            list(config.get("network", "proxies", []) or []) + binlookup_mod.ProxyPool.from_env().proxies
        )
        client = binlookup_mod.HttpClient(
            timeout=timeout,
            retries=retries,
            rate=rate,
            proxies=proxies if proxies else None,
            user_agents=user_agents or binlookup_mod.USER_AGENTS,
        )
        cache = binlookup_mod.Cache(paths.bin_cache)
    resolver = binlookup_mod.BinResolver(config=config, cache=cache, client=client, demo=demo)
    history = History(paths)
    return Context(
        args=args,
        config=config,
        paths=paths,
        history=history,
        caps=caps,
        ui=ui,
        term=term,
        prompt=prompt,
        resolver=resolver,
        client=client,
        cache=cache,
        demo=demo,
    )
