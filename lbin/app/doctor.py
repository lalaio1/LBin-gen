from __future__ import annotations

import os
import platform
import sys
import time
from pathlib import Path
from typing import Any, List, Optional, Sequence, Tuple

from ..core import brands as brands_mod
from ..core import generator as generator_mod
from ..core.luhn import is_valid
from ..core.storage import IS_TERMUX, human_bytes, free_space
from ..version import TAG, VERSION

__all__ = ["checks", "summary_line"]


def _yes(value: bool) -> str:
    return "ok" if value else "atencao"


def checks(ctx: Any) -> List[Tuple[str, str, str]]:
    rows: List[Tuple[str, str, str]] = []
    py_version = "%d.%d.%d" % sys.version_info[:3]
    rows.append(("python", py_version, _yes(sys.version_info >= (3, 9))))
    rows.append(("sistema", "%s %s" % (platform.system(), platform.release()), "ok"))
    rows.append(("plataforma", "termux (android)" if IS_TERMUX else platform.machine() or "generica", "ok"))
    rows.append(("terminal", ctx.caps.term or "desconhecido", "ok"))
    rows.append(("cores", ctx.caps.color, _yes(ctx.caps.colors or ctx.caps.color == "none")))
    rows.append(("glifos", "unicode" if ctx.caps.unicode else "ascii", "ok"))
    rows.append(("animacoes", "ativadas" if ctx.caps.animations else "desativadas", "ok"))
    rows.append(
        (
            "tty interativo",
            "sim" if ctx.term.interactive else "nao",
            "ok" if ctx.term.interactive else "modo script",
        )
    )
    width, height = ctx.term.size()
    rows.append(("tamanho da janela", "%dx%d" % (width, height), _yes(width >= 80)))
    rows.append(("config", str(ctx.paths.config_file), "ok" if ctx.paths.config_file.exists() else "padrao"))
    output = ctx.output_dir()
    rows.append(("saida", str(output), "ok"))
    rows.append(("espaco livre", human_bytes(free_space(output)), _yes(free_space(output) > 50 * 1024 * 1024)))
    rows.append(("cache de bins", "%d entradas" % (len(ctx.cache) if ctx.cache else 0), "ok"))
    rows.append(("provedores", ", ".join(ctx.config.get("network", "providers", []) or []) or "nenhum", "ok"))
    rows.append(("rede", "cliente http pronto" if ctx.client else "modo offline", "ok"))
    return rows


def self_test(ctx: Any) -> List[Tuple[str, str, str]]:
    rows: List[Tuple[str, str, str]] = []
    sample = generator_mod.generate_number("411111", 16)
    rows.append(("luhn", sample, _yes(is_valid(sample))))
    brand = brands_mod.detect(sample)
    rows.append(("bandeira detectada", brand.name if brand else "nenhuma", _yes(brand is not None)))
    generator = list(generator_mod.generate("411111", 1000, length=16))
    rows.append(("geracao de 1000 cartoes", "%d unicos" % len({card.number for card in generator}), "ok"))
    info = ctx.resolver.resolve(sample, allow_network=False)
    rows.append(("consulta offline", info.brand_label or info.scheme or "—", _yes(bool(info.brand_label or info.scheme))))
    started = time.monotonic()
    copy = [card for card in generator_mod.generate("606282", 100, length=16)]
    elapsed = time.monotonic() - started
    rows.append(("desempenho local", "%.0f cartoes/s" % (len(copy) / max(0.0001, elapsed)), "ok"))
    return rows


def summary_line(ctx: Any) -> str:
    return "LBin Gen %s · %s · %s" % (VERSION, platform.system(), ctx.caps.describe())
