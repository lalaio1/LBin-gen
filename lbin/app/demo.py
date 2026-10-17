from __future__ import annotations

import random
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

from ..core import brands as brands_mod
from ..core import combos as combos_mod
from ..core import exporters as exporters_mod
from ..core import generator as generator_mod
from ..core import validator as validator_mod
from ..core.storage import FileEntry, human_bytes, human_int
from ..ui.widgets import MenuItem, Tile
from ..version import TAG
from . import views
from .doctor import checks, self_test, summary_line

__all__ = ["screens_available", "run_demo", "build"]


def screens_available() -> List[str]:
    return [
        "menu",
        "generate",
        "bulk",
        "lookup",
        "combos",
        "validate",
        "library",
        "settings",
        "about",
        "doctor",
        "welcome",
    ]


def _demo_cards(spec: str, count: int, seed: int = 7, resolver: Any = None) -> List[Any]:
    rng = random.Random(seed)
    cards = list(
        generator_mod.generate(
            spec=spec,
            count=count,
            length=16,
            with_expiry=True,
            with_cvv=True,
            with_holder=False,
            rng=rng,
        )
    )
    if resolver is not None:
        for card in cards:
            info = resolver.resolve(card.number, allow_network=False)
            card.bank = info.bank
            card.country = info.country
            card.source = info.source
            card.meta["category"] = info.category
            card.meta["source"] = info.source
            if info.brand_key:
                card.brand_key = info.brand_key
    return cards


_DEMO_SPECS: Sequence[Tuple[str, str]] = (
    ("516230", "credit"),
    ("457173", "debit"),
    ("606282", "credit"),
    ("636297", "credit"),
    ("401288", "credit"),
    ("555555", "credit"),
    ("510510", "credit"),
    ("601111", "credit"),
)


def _mixed_cards(count: int = 640, seed: int = 7, resolver: Any = None) -> List[Any]:
    rng = random.Random(seed)
    cards: List[Any] = []
    per = max(1, count // len(_DEMO_SPECS))
    for spec, kind in _DEMO_SPECS:
        for card in generator_mod.generate(
            spec=spec,
            count=per,
            length=16,
            with_expiry=True,
            with_cvv=True,
            with_holder=False,
            rng=rng,
        ):
            card.card_type = kind
            if resolver is not None:
                info = resolver.resolve(card.number, allow_network=False)
                card.bank = info.bank or card.bank
                card.country = info.country or card.country
                card.source = info.source
                card.meta["category"] = info.category
                card.meta["source"] = info.source
                if info.brand_key:
                    card.brand_key = info.brand_key
            cards.append(card)
    rng.shuffle(cards)
    return cards


def _scaled(counts: Dict[str, int], total: int) -> Dict[str, int]:
    base = sum(counts.values()) or 1
    scaled = {key: max(1, int(round(value * total / base))) for key, value in counts.items()}
    if scaled:
        biggest = max(scaled, key=lambda key: scaled[key])
        scaled[biggest] = max(1, scaled[biggest] + total - sum(scaled.values()))
    return scaled


def _brand_counts(cards: Sequence[Any]) -> Dict[str, int]:
    counts: Dict[str, int] = {}
    for card in cards:
        key = card.brand_key or "outros"
        counts[key] = counts.get(key, 0) + 1
    return counts


def build(ctx: Any, screen: str, width: int, height: int) -> List[str]:
    ui = ctx.ui
    if screen == "menu":
        return views.view_menu(
            ui,
            {
                "width": width,
                "height": height,
                "items": _menu_items(),
                "selected": 0,
                "title": "o que vamos fazer",
                "note": "%s · %s" % (TAG, "Card test-data toolkit"),
                "hints": [("↑↓", "navegar"), ("enter", "selecionar"), ("q", "sair"), ("1-9", "pular")],
            },
        )
    if screen == "welcome":
        from .menu import welcome_lines

        return welcome_lines(ctx, width, height)
    if screen == "generate":
        cards = _mixed_cards(640, 11, ctx.resolver)
        recent = cards[-12:]
        stats = {
            "generated": 1846,
            "enriched": 1580,
            "errors": 0,
            "elapsed": 128.4,
            "rate": 14.4,
            "total": 5000,
            "brands": _scaled(_brand_counts(cards), 1846),
            "note": "",
            "done": False,
            "paused": False,
        }
        return views.view_generate(
            ui,
            {
                "width": width,
                "height": height,
                "stats": stats,
                "cards": recent,
                "path": "gerador online",
                "status": "binlist.net",
                "hints": [("Q", "abortar"), ("P", "pausar"), ("S", "salvar agora")],
            },
        )
    if screen == "bulk":
        cards = _mixed_cards(4200, 23, None)
        fmt = exporters_mod.resolve_format("txt")
        template = "{number}|{month}|{year}|{cvv}"
        preview = [exporters_mod.render(fmt, card.as_dict(), template).rstrip("\n") for card in cards[-12:]]
        stats = {
            "generated": 41280,
            "enriched": 41280,
            "errors": 0,
            "elapsed": 6.2,
            "rate": 6658.0,
            "total": 60000,
            "brands": _scaled(_brand_counts(cards), 41280),
            "note": "",
            "done": False,
            "paused": False,
        }
        return views.view_bulk(
            ui,
            {
                "width": width,
                "height": height,
                "stats": stats,
                "preview": preview,
                "output": "lbin-606282-20261017-1503.txt",
                "format": "Texto (txt)",
                "template": template,
                "unique": True,
                "path": "gerador turbo",
                "status": "gravando 6.658 cartoes/s",
                "hints": [("Q", "abortar"), ("P", "pausar"), ("S", "sincronizar")],
            },
        )
    if screen == "lookup":
        info = ctx.resolver.resolve("516230", allow_network=False)
        number = generator_mod.generate_number("516230", 16, random.Random(3))
        report = validator_mod.inspect(number)
        return views.view_lookup(
            ui,
            {
                "width": width,
                "height": height,
                "info": info,
                "number": number,
                "report": report,
                "path": "consulta de bin",
                "status": "online",
                "hints": [("ENTER", "nova consulta"), ("Q", "voltar")],
            },
        )
    if screen == "validate":
        report = validator_mod.inspect(generator_mod.generate_number("457173", 16, random.Random(9)))
        summary = {
            "total": 4820,
            "valid": 4703,
            "invalid": 117,
            "rate": 97.6,
            "brands": {"Visa": 2210, "Mastercard": 1480, "Hipercard": 610, "Elo": 380, "Amex": 140},
        }
        return views.view_validate(
            ui,
            {
                "width": width,
                "height": height,
                "report": report,
                "summary": summary,
                "path": "validador",
                "status": "lote",
                "hints": [("ENTER", "continuar"), ("Q", "voltar")],
            },
        )
    if screen == "combos":
        spec = combos_mod.ComboSpec(
            numbers=[generator_mod.generate_number("457173", 16, random.Random(9))],
            months=combos_mod.parse_months("1-12"),
            years=combos_mod.parse_years("26-31"),
            cvc_length=3,
        )
        total = combos_mod.total(spec)
        preview = []
        for record in combos_mod.iter_records(spec):
            preview.append(combos_mod.render_line(spec.template, record))
            if len(preview) >= 10:
                break
        stats = {
            "generated": 41120,
            "enriched": 41120,
            "errors": 0,
            "elapsed": 3.4,
            "rate": 12094.0,
            "total": total,
            "brands": {},
            "note": "",
            "done": False,
            "paused": False,
        }
        return views.view_combos(
            ui,
            {
                "width": width,
                "height": height,
                "stats": stats,
                "preview": preview,
                "card": spec.numbers[0],
                "months": "1-12",
                "years": "26-31",
                "cvv": "faixa completa 000-999",
                "template": spec.template,
                "output": "combos-20261017-1503.txt",
                "bytes": 41120 * 28,
                "estimate": total * 28,
                "path": "combinacoes",
                "status": "concluindo",
                "hints": [("Q", "abortar"), ("P", "pausar"), ("ENTER", "concluir")],
            },
        )
    if screen == "library":
        now = time.time()
        entries: List[FileEntry] = [
            _entry("lbin-516230-20261017-1503.txt", 1_248_000, now - 320, 31_200),
            _entry("combos-457173-20261017-1441.txt", 8_640_000, now - 1860, 288_000),
            _entry("lbin-606282-20261017-1430.txt", 512_400, now - 2900, 12_810),
            _entry("relatorio-visa.html", 84_200, now - 4200, 2_400),
            _entry("lote-nubank.csv", 233_000, now - 8600, 5_400),
        ]
        totals = {
            "sessions": 12,
            "cards": 352_410,
            "elapsed": 742.5,
            "rate": 474.6,
            "brands": {"mastercard": 142_300, "hipercard": 88_100, "visa": 71_400, "elo": 42_610, "amex": 8_000},
            "per_day": {
                "2026-10-04": 1200,
                "2026-10-05": 3400,
                "2026-10-06": 2100,
                "2026-10-07": 6400,
                "2026-10-08": 5200,
                "2026-10-09": 8100,
                "2026-10-10": 4300,
                "2026-10-11": 2600,
                "2026-10-12": 3400,
                "2026-10-13": 9800,
                "2026-10-14": 12100,
                "2026-10-15": 7400,
                "2026-10-16": 15200,
                "2026-10-17": 31400,
            },
        }
        return views.view_library(
            ui,
            {
                "width": width,
                "height": height,
                "entries": entries,
                "totals": totals,
                "dir": "output",
                "selected": 0,
                "path": "biblioteca",
                "status": "5 arquivos",
                "note": "",
                "hints": [("ENTER", "abrir"), ("R", "atualizar"), ("Q", "voltar")],
            },
        )
    if screen == "settings":
        from .screens.settings import _items

        items = _items(ctx)
        return views.view_settings(
            ui,
            {
                "width": width,
                "height": height,
                "items": items,
                "selected": 1,
                "title": "preferencias",
                "path": "configuracoes",
                "status": "salvo automaticamente",
                "note": "",
                "hints": [("ENTER", "alterar"), ("↑↓", "navegar"), ("Q", "voltar")],
                "footer_note": str(ctx.paths.config_file),
            },
        )
    if screen == "about":
        return views.view_about(
            ui,
            {"width": width, "height": height, "status": TAG, "hints": [("ENTER", "acoes"), ("Q", "voltar")]},
        )
    if screen == "doctor":
        rows = checks(ctx) + self_test(ctx)
        return views.view_doctor(ui, {"width": width, "height": height, "checks": rows, "note": summary_line(ctx)})
    return [ui.paint("tela desconhecida: %s" % screen, fg=ui.role("danger"))]


def _entry(name: str, size: int, mtime: float, lines: int) -> FileEntry:
    return FileEntry(path=Path(name), size=size, mtime=mtime, lines=lines)


def _menu_items() -> List[MenuItem]:
    return [
        MenuItem("generate", "Gerador online", "gera e consulta BINs em tempo real", "principal", "primary"),
        MenuItem("bulk", "Gerador turbo", "lote offline em alta velocidade", "rapido", "accent"),
        MenuItem("lookup", "Consulta de BIN", "bandeira, banco, pais, categoria", "", "secondary"),
        MenuItem("combos", "Combinacoes validade / CVV", "expande cartoes em combinacoes", "", "secondary"),
        MenuItem("validate", "Validador de cartoes", "luhn, iin e lote completo", "", "info"),
        MenuItem("library", "Biblioteca e estatisticas", "arquivos, historico e graficos", "", "info"),
        MenuItem("settings", "Configuracoes", "tema, rede, saida e perfil", "", "muted"),
        MenuItem("about", "Sobre e diagnostico", "versao, creditos e ambiente", "", "muted"),
        MenuItem("quit", "Sair", "encerrar a sessao", "", "dim"),
    ]


def run_demo(ctx: Any, screen: str, width: Optional[int], height: Optional[int]) -> int:
    width = int(width or ctx.caps.width or 100)
    height = int(height or ctx.caps.height or 34)
    lines = build(ctx, screen, width, height)
    ctx.term.frame(lines, width, height)
    return 0
