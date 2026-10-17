from __future__ import annotations

from dataclasses import dataclass
from typing import List, Sequence

from .ansi import Caps

__all__ = ["Glyphs", "UNICODE", "ASCII", "glyphs_for", "BANNER_BLOCKS", "BANNER_ASCII", "COMPACT_BANNER"]


@dataclass(frozen=True)
class Glyphs:
    top_left: str
    top_right: str
    bottom_left: str
    bottom_right: str
    horizontal: str
    vertical: str
    tee_left: str
    tee_right: str
    cross: str
    arrow: str
    bullet: str
    check: str
    cross_mark: str
    warning: str
    info: str
    star: str
    bar_full: str
    bar_empty: str
    bar_partials: Sequence[str]
    spinner: Sequence[str]
    up_down: str
    dot: str
    diamond: str
    square: str
    radio_on: str
    radio_off: str


UNICODE = Glyphs(
    top_left="╭",
    top_right="╮",
    bottom_left="╰",
    bottom_right="╯",
    horizontal="─",
    vertical="│",
    tee_left="├",
    tee_right="┤",
    cross="┼",
    arrow="❯",
    bullet="•",
    check="✔",
    cross_mark="✖",
    warning="⚠",
    info="●",
    star="★",
    bar_full="█",
    bar_empty="░",
    bar_partials=("▏", "▎", "▍", "▌", "▋", "▊", "▉"),
    spinner=("◐", "◓", "◑", "◒"),
    up_down="↕",
    dot="·",
    diamond="◆",
    square="▪",
    radio_on="◉",
    radio_off="◯",
)

ASCII = Glyphs(
    top_left="+",
    top_right="+",
    bottom_left="+",
    bottom_right="+",
    horizontal="-",
    vertical="|",
    tee_left="+",
    tee_right="+",
    cross="+",
    arrow=">",
    bullet="*",
    check="v",
    cross_mark="x",
    warning="!",
    info="i",
    star="*",
    bar_full="#",
    bar_empty=".",
    bar_partials=("", "", "", "", "", "", ""),
    spinner=("|", "/", "-", "\\"),
    up_down="^",
    dot=".",
    diamond="*",
    square="*",
    radio_on="(*)",
    radio_off="( )",
)

BANNER_BLOCKS: Sequence[str] = (
    " ██╗     ██████╗ ██╗███╗   ██╗",
    " ██║     ██╔══██╗██║████╗  ██║",
    " ██║     ██████╔╝██║██╔██╗ ██║",
    " ██║     ██╔══██╗██║██║╚██╗██║",
    " ███████╗██████╔╝██║██║ ╚████║",
    " ╚══════╝╚═════╝ ╚═╝╚═╝  ╚═══╝",
)

BANNER_ASCII: Sequence[str] = (
    " _     ____  ___ _   _   ____ _____ _   _ ",
    "| |   | __ )|_ _| \\ | | / ___| ____| \\ | |",
    "| |   |  _ \\ | ||  \\| || |  _|  _| |  \\| |",
    "| |___| |_) || || |\\  || |_| | |___| |\\  |",
    "|_____|____/|___|_| \\_| \\____|_____|_| \\_|",
)

COMPACT_BANNER = "LBIN GEN"


def glyphs_for(caps: Caps) -> Glyphs:
    return UNICODE if caps.unicode else ASCII
