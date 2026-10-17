from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, List, Mapping, Sequence, Tuple

__all__ = ["Theme", "THEMES", "theme_names", "load_theme", "ROLES"]


ROLES: Tuple[str, ...] = (
    "primary",
    "secondary",
    "accent",
    "text",
    "muted",
    "dim",
    "border",
    "surface",
    "raised",
    "success",
    "warn",
    "danger",
    "info",
)


@dataclass(frozen=True)
class Theme:
    key: str
    label: str
    description: str
    colors: Mapping[str, str]
    gradient: Sequence[str]

    def __getitem__(self, role: str) -> str:
        return self.colors.get(role, self.colors.get("text", "#ffffff"))


THEMES: Dict[str, Theme] = {
    "neon": Theme(
        key="neon",
        label="Neon",
        description="ciano eletrico com magenta e violeta",
        colors={
            "primary": "#00f0ff",
            "secondary": "#7a5cff",
            "accent": "#ff2ed1",
            "text": "#e6edf3",
            "muted": "#8b95a5",
            "dim": "#5a6472",
            "border": "#2a3342",
            "surface": "#111722",
            "raised": "#18202e",
            "success": "#9bff3d",
            "warn": "#ffc53d",
            "danger": "#ff4d6d",
            "info": "#4cc9f0",
        },
        gradient=("#00f0ff", "#4cc9f0", "#7a5cff", "#ff2ed1"),
    ),
    "cyber": Theme(
        key="cyber",
        label="Cyber",
        description="verde fosforo com ambar de terminal",
        colors={
            "primary": "#39ff88",
            "secondary": "#00d1b2",
            "accent": "#d4ff2b",
            "text": "#d7ffe9",
            "muted": "#7fb69a",
            "dim": "#547a68",
            "border": "#1f3a2f",
            "surface": "#0c1712",
            "raised": "#12241b",
            "success": "#39ff88",
            "warn": "#ffcc33",
            "danger": "#ff5f56",
            "info": "#4dd0e1",
        },
        gradient=("#d4ff2b", "#39ff88", "#00d1b2", "#0091ea"),
    ),
    "matrix": Theme(
        key="matrix",
        label="Matrix",
        description="monocromatico verde sobre preto",
        colors={
            "primary": "#00ff41",
            "secondary": "#00b32d",
            "accent": "#7dff9b",
            "text": "#c8ffd4",
            "muted": "#5f9e72",
            "dim": "#3d6b4a",
            "border": "#173322",
            "surface": "#08130b",
            "raised": "#0e2013",
            "success": "#00ff41",
            "warn": "#a8ff60",
            "danger": "#ff6b6b",
            "info": "#5eff9f",
        },
        gradient=("#003b00", "#00b32d", "#00ff41", "#c8ffd4"),
    ),
    "sunset": Theme(
        key="sunset",
        label="Sunset",
        description="laranja, rosa e violeta quentes",
        colors={
            "primary": "#ff9f43",
            "secondary": "#ff5f9e",
            "accent": "#ffd166",
            "text": "#fff1e6",
            "muted": "#c39a86",
            "dim": "#8a6a5c",
            "border": "#3a2a2f",
            "surface": "#1a1118",
            "raised": "#26171f",
            "success": "#8cea6b",
            "warn": "#ffd166",
            "danger": "#ff5470",
            "info": "#7ad7f0",
        },
        gradient=("#ffd166", "#ff9f43", "#ff5f9e", "#a049ff"),
    ),
    "ice": Theme(
        key="ice",
        label="Ice",
        description="azuis frios de datacenter",
        colors={
            "primary": "#66d9ff",
            "secondary": "#4f7cff",
            "accent": "#a5f3fc",
            "text": "#e8f4ff",
            "muted": "#8fa7bd",
            "dim": "#5f7488",
            "border": "#25313f",
            "surface": "#0e1620",
            "raised": "#16202c",
            "success": "#5ef0c0",
            "warn": "#ffd479",
            "danger": "#ff6b81",
            "info": "#66d9ff",
        },
        gradient=("#a5f3fc", "#66d9ff", "#4f7cff", "#7a5cff"),
    ),
    "mono": Theme(
        key="mono",
        label="Mono",
        description="tons de cinza, para capturas e terminais simples",
        colors={
            "primary": "#f0f3f6",
            "secondary": "#c3cad3",
            "accent": "#ffffff",
            "text": "#e8edf2",
            "muted": "#98a2ad",
            "dim": "#6b7480",
            "border": "#333a44",
            "surface": "#15181d",
            "raised": "#1d2127",
            "success": "#f0f3f6",
            "warn": "#d8dee5",
            "danger": "#ffffff",
            "info": "#c3cad3",
        },
        gradient=("#ffffff", "#c3cad3", "#98a2ad", "#6b7480"),
    ),
}


def theme_names() -> List[Tuple[str, str]]:
    return [(item.key, item.label) for item in THEMES.values()]


def load_theme(name: str) -> Theme:
    return THEMES.get((name or "neon").strip().lower(), THEMES["neon"])
