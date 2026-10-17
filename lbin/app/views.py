from __future__ import annotations

from typing import Any, Dict, List, Optional, Sequence, Tuple

from ..core import brands as brands_mod
from ..core.storage import human_bytes, human_duration, human_int
from ..ui.ansi import blend, fit, rgb, strip, visible_width
from ..ui.widgets import MenuItem, Tile, UI

__all__ = [
    "columns",
    "split_widths",
    "brand_tone",
    "kind_text",
    "view_menu",
    "view_generate",
    "view_bulk",
    "view_lookup",
    "view_combos",
    "view_validate",
    "view_library",
    "view_settings",
    "view_about",
    "view_doctor",
]


def _progress_bar_width(width: int) -> int:
    return max(6, min(28, width - 46))


def split_widths(width: int, gap: int = 2, left_ratio: float = 0.62) -> Tuple[int, int]:
    left_width = max(24, int((width - gap) * left_ratio))
    right_width = max(16, width - gap - left_width)
    overflow = left_width + gap + right_width - width
    if overflow > 0:
        left_width = max(10, left_width - overflow)
    return left_width, right_width


def columns(
    left: Sequence[str],
    right: Sequence[str],
    width: int,
    gap: int = 2,
    left_ratio: float = 0.62,
    left_width: Optional[int] = None,
) -> List[str]:
    if left_width is None:
        left_width, _ = split_widths(width, gap, left_ratio)
    right_width = max(16, width - gap - left_width)
    lines: List[str] = []
    for index in range(max(len(left), len(right))):
        left_line = fit(left[index], left_width) if index < len(left) else " " * left_width
        if index < len(right):
            lines.append(left_line + " " * gap + fit(right[index], right_width))
        else:
            lines.append(left_line)
    return lines


def brand_tone(ui: UI, key: Optional[str]) -> str:
    color = brands_mod.brand_color(key)
    red, green, blue = rgb(color)
    luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255.0
    if luminance < 0.28:
        return blend(color, "#ffffff", 0.55)
    if luminance < 0.5:
        return blend(color, "#ffffff", 0.25)
    return color


def brand_badge(ui: UI, key: Optional[str], label: str = "") -> str:
    brand = brands_mod.by_key(key or "")
    name = label or (brand.name if brand else "—")
    return ui.paint(name.upper(), fg=brand_tone(ui, key), bold=True)


def kind_text(value: Optional[str]) -> str:
    mapping = {
        "credit": "credito",
        "debit": "debito",
        "prepaid": "pre-pago",
        "charge": "charge",
        "both": "credito/debito",
    }
    return mapping.get((value or "").lower(), value or "—")


def bar_compact(ui: UI, items: Sequence[Tuple[str, float]], width: int, color: str = "primary", limit: int = 8) -> List[str]:
    if not items:
        return [ui.paint("aguardando dados…", fg=ui.role("dim"))]
    peak = max(value for _, value in items) or 1
    size = max(6, width - 24)
    lines: List[str] = []
    for label, value in items[:limit]:
        ratio = value / peak
        filled = max(1, int(ratio * size))
        bar = ui.paint(ui.glyphs.bar_full * filled, fg=ui.role(color))
        bar += ui.paint(ui.glyphs.bar_empty * (size - filled), fg=ui.role("dim"))
        lines.append(
            fit(ui.paint(label[:14], fg=ui.role("text")), 15)
            + bar
            + " "
            + ui.paint(human_int(int(value)), fg=ui.role("muted"))
        )
    return lines


def _stat_tiles(
    ui: UI,
    stats: Dict[str, Any],
    width: int,
    include_errors: bool = True,
    per_row: int = 0,
    compact: bool = False,
    max_tiles: int = 0,
) -> List[str]:
    generated = stats.get("generated", 0)
    enriched = stats.get("enriched", generated)
    elapsed = stats.get("elapsed", 0.0)
    rate = stats.get("rate", 0.0)
    total = stats.get("total", 0)
    tiles = [
        Tile("GERADOS", human_int(generated), "de %s" % human_int(total) if total else "sem limite", "primary"),
        Tile("CONSULTADOS", human_int(enriched), "bins resolvidos", "secondary"),
        Tile("VELOCIDADE", "%.1f/s" % rate, "%.0f cartoes/min" % (rate * 60), "accent"),
        Tile("TEMPO", human_duration(elapsed), stats.get("note", "") or "executando", "info"),
    ]
    if include_errors:
        tiles.append(Tile("ERROS", human_int(stats.get("errors", 0)), "falhas de rede", "warn"))
    if max_tiles and len(tiles) > max_tiles:
        if max_tiles >= 4:
            tiles = tiles[:max_tiles]
        else:
            tiles = [tiles[0], tiles[2], tiles[3]][:max_tiles]
    if not per_row:
        per_row = 4 if width >= 92 else 2
    elif width < 92:
        per_row = min(per_row, 2)
    return ui.tiles(tiles, width, per_row=per_row, compact=compact)


def _header(ui: UI, path: str, status: str, width: int) -> List[str]:
    return [ui.app_header(path, status, width), ""]


def _footer(ui: UI, hints: Sequence[Tuple[str, str]], note: str, width: int) -> List[str]:
    return ["", ui.footer_bar(hints, note, width)]


def view_menu(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    lines: List[str] = []
    lines.extend(ui.banner(width) if height >= 30 else [ui.logo_line(width)])
    lines.append("")
    items: Sequence[MenuItem] = state.get("items", [])
    lines.append(ui.section(state.get("title", "menu principal"), width))
    available = max(4, height - len(lines) - 4)
    lines.extend(ui.menu(items, state.get("selected", 0), width, height=available))
    lines.extend(_footer(ui, state.get("hints", []), state.get("note", ""), width))
    return lines


def view_generate(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    stats = state.get("stats", {})
    cards: Sequence[Any] = state.get("cards", [])
    lines = _header(ui, state.get("path", "gerador"), state.get("status", ""), width)

    total = stats.get("total", 0)
    progress_label = "progresso" if total else "stream"
    suffix = "%s / %s" % (human_int(stats.get("generated", 0)), human_int(total) if total else "∞")
    lines.append(
        ui.progress(stats.get("generated", 0), total or max(1, stats.get("generated", 1)), _progress_bar_width(width), progress_label, "primary", suffix)
    )
    if stats.get("paused"):
        lines.append(ui.paint("  execucao pausada — pressione P para continuar", fg=ui.role("warn"), bold=True))
    else:
        lines.append("")
    lines.append("")
    lines.extend(
        _stat_tiles(ui, stats, width, per_row=5, compact=height < 30 and width < 92, max_tiles=5 if height >= 24 else (3 if height >= 18 else 2))
    )
    lines.append("")
    lines.append(ui.section("cartoes em tempo real", width))

    brand_items = sorted(stats.get("brands", {}).items(), key=lambda item: -item[1])
    brand_cap = max(3, min(8, height - 28))
    left_width, right_width = split_widths(width, 2, 0.66)

    budget = max(2, height - len(lines) - 4)
    if brand_items and budget >= 5:
        brand_rows = max(1, min(len(brand_items), brand_cap, budget // 4))
    else:
        brand_rows = 0
    body = max(2, budget - brand_rows)

    rows: List[str] = []
    for card in cards[-min(12, body):]:
        tone = brand_tone(ui, card.brand_key)
        number = card.number
        shown = number[:6] + " " + number[6:12] + " " + "*" * 4 + " " + number[-4:]
        badge = ui.paint(fit((card.brand_key or "?").upper()[:10], 11), fg=tone, bold=True)
        bank = fit(ui.paint((card.bank or card.source or "")[:18], fg=ui.role("muted")), 19)
        kind = fit(ui.paint(kind_text(card.card_type), fg=ui.role("dim")), 13)
        check = ui.paint(ui.glyphs.check if card.luhn_ok else ui.glyphs.cross_mark,
                         fg=ui.role("success" if card.luhn_ok else "danger"))
        rows.append("%s %s %s %s %s" % (check, ui.paint(shown, fg=ui.role("text")), badge, bank, kind))
    if not rows:
        rows.append(ui.paint("iniciando workers…", fg=ui.role("dim")))

    right: List[str] = []
    if cards:
        last = cards[-1]
        widget = ui.card_widget(
            last.number,
            last.brand_key or "card",
            last.holder or "",
            last.expiry,
            last.cvv or "",
            width=min(38, right_width - 2),
            accent=brand_tone(ui, last.brand_key),
        )
        if len(widget) + 2 <= body:
            right.extend(widget)
            detail = [
                ("banco", last.bank or "—", "secondary"),
                ("pais", last.country or "—", "info"),
                ("tipo", kind_text(last.card_type), "accent"),
                ("categoria", str(last.meta.get("category") or "—"), "muted"),
                ("origem", last.meta.get("source") or last.source, "muted"),
            ]
            field_room = body - len(widget) - 1
            if field_room >= 2:
                right.append("")
                right.extend(ui.fields(detail[: min(len(detail), field_room)], right_width - 2, 11))
    lines.extend(columns(left=rows, right=right, width=width, gap=2, left_width=left_width))
    if brand_rows:
        lines.append("")
        lines.append(ui.section("distribuicao por bandeira", width))
        lines.extend(bar_compact(ui, brand_items, width, "secondary", limit=max(1, brand_rows)))
    lines.extend(_footer(ui, state.get("hints", []), "", width))
    return lines


def view_bulk(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    stats = state.get("stats", {})
    output = state.get("output", "")
    lines = _header(ui, state.get("path", "gerador turbo"), state.get("status", ""), width)
    total = stats.get("total", 0)
    generated = stats.get("generated", 0)
    lines.append(
        ui.progress(
            generated,
            total or max(1, generated),
            _progress_bar_width(width),
            "lote",
            "accent",
            "%s / %s" % (human_int(generated), human_int(total) if total else "∞"),
        )
    )
    lines.append("")
    rate = stats.get("rate", 0.0)
    tiles = [
        Tile("GERADOS", human_int(generated), "de %s" % human_int(total) if total else "sem limite", "primary"),
        Tile("RESTANTE", human_int(max(0, total - generated)) if total else "∞", "a concluir", "secondary"),
        Tile("VELOCIDADE", "%.0f/s" % rate, "%.0f cartoes/min" % (rate * 60), "accent"),
        Tile("TEMPO", human_duration(stats.get("elapsed", 0.0)), str(stats.get("note") or "executando"), "info"),
    ]
    if height < 24:
        tiles = [tiles[0], tiles[2]]
    lines.extend(ui.tiles(tiles, width, per_row=4 if width >= 92 else 2, compact=height < 30 and width < 92))
    lines.append("")
    left_w, right_w = split_widths(width, 2, 0.5)
    left: List[str] = [ui.section("saida", left_w)]
    kv_items = [
        ("arquivo", output or "apenas exibicao"),
        ("formato", state.get("format", "txt")),
        ("template", state.get("template", "")),
        ("modo", "offline (sem consultas)"),
        ("unicidade", "ativa" if state.get("unique") else "desativada"),
    ]
    left.extend(ui.kv_block(kv_items[:2], left_w, 11, compact=True) if height < 18 else ui.kv_block(kv_items[:2] if height < 20 else (kv_items[:3] if height < 22 else kv_items), left_w, 11))
    right: List[str] = [ui.section("bandeiras", right_w)]
    right.extend(
        bar_compact(
            ui,
            sorted(stats.get("brands", {}).items(), key=lambda item: -item[1]),
            right_w,
            "primary",
            limit=max(2, min(8, height - 20)),
        )
    )
    lines.extend(columns(left, right, width, 2, left_width=left_w))
    preview = state.get("preview") or []
    room = height - len(lines) - 2
    if room >= 2:
        lines.append("")
        lines.append(ui.section("ultimas linhas", width))
        rows = max(0, min(8, room - 2))
        for line in (preview[-rows:] if rows else []):
            lines.append(fit(ui.paint(strip(line)[: width - 4], fg=ui.role("muted")), width))
        if not preview:
            lines.append(ui.paint("sem amostra (gravando direto no arquivo)", fg=ui.role("dim")))
    lines.extend(_footer(ui, state.get("hints", []), "", width))
    return lines


def view_lookup(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    info = state.get("info")
    number = state.get("number", "")
    lines = _header(ui, state.get("path", "consulta bin"), state.get("status", ""), width)
    if info is None:
        lines.append(ui.paint("  informe um BIN de 6 a 8 digitos para consultar", fg=ui.role("muted")))
        lines.extend(_footer(ui, state.get("hints", []), "", width))
        return lines
    left_w, right_w = split_widths(width, 2, 0.44)
    left: List[str] = []
    left.extend(
        ui.card_widget(
            number or (info.bin + "0" * 10),
            info.brand_key or info.scheme or "bin",
            state.get("holder", "") or "TITULAR FICTICIO",
            "--/--",
            "",
            width=min(40, left_w - 2),
            accent=brand_tone(ui, info.brand_key),
        )
    )
    left.append("")
    validation = state.get("report")
    if validation is not None:
        ok = validation.ok
        badge = ui.badge("VALIDO" if ok else "INVALIDO", "success" if ok else "danger", solid=True)
        left.append("  " + badge + "  " + ui.paint("luhn %s" % ("ok" if validation.luhn_ok else "falhou"), fg=ui.role("muted")))
        for finding in validation.findings:
            if height < 18:
                break
            color = {"error": "danger", "warn": "warn", "info": "info"}.get(finding.level, "info")
            left.append(fit("  " + ui.paint("• " + finding.message, fg=ui.role(color)), left_w))
    right: List[str] = [ui.section("dados do emissor", right_w)]
    detail = [
        ("bin", info.bin),
        ("banco", info.bank or "nao informado"),
        ("bandeira", info.brand_label or info.scheme or "—"),
        ("pais", ("%s %s" % (info.country_code, info.country)).strip() or "—"),
        ("tipo", info.kind_label),
        ("categoria", info.category_label),
        ("comprimento", str(info.length) if info.length else "—"),
        ("luhn", "valido" if info.luhn else ("invalido" if info.luhn is False else "—")),
        ("origem", info.source + (" (aproximado)" if info.approx else "")),
        ("latencia", "%.0f ms" % info.latency_ms if info.latency_ms else "—"),
    ]
    if height < 18:
        detail = detail[:4]
    elif height < 22:
        detail = detail[:6]
    right.extend(ui.kv_block(detail, right_w, 12, compact=height < 18))
    if info.note and height >= 18:
        right.append("")
        right.extend(ui.notice(info.note, "warn", right_w))
    lines.extend(columns(left, right, width, 2, left_width=left_w))
    lines.extend(_footer(ui, state.get("hints", []), "", width))
    return lines


def view_combos(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    stats = state.get("stats", {})
    lines = _header(ui, state.get("path", "combinacoes"), state.get("status", ""), width)
    total = stats.get("total", 0)
    lines.append(
        ui.progress(
            stats.get("generated", 0),
            total or max(1, stats.get("generated", 1)),
            _progress_bar_width(width),
            "gerando",
            "accent",
            "%s / %s" % (human_int(stats.get("generated", 0)), human_int(total)),
        )
    )
    lines.append("")
    tiles = [
        Tile("COMBINACOES", human_int(total), "total calculado", "accent"),
        Tile("ESCRITAS", human_int(stats.get("generated", 0)), "linhas no arquivo", "primary"),
        Tile("TAMANHO", human_bytes(state.get("bytes", 0)), "estimado %s" % human_bytes(state.get("estimate", 0)), "secondary"),
        Tile("TEMPO", human_duration(stats.get("elapsed", 0.0)), "%.0f linhas/s" % stats.get("rate", 0.0), "info"),
    ]
    if height < 24:
        tiles = [tiles[0], tiles[3]]
    lines.extend(ui.tiles(tiles, width, per_row=4 if width >= 92 else 2, compact=height < 30 and width < 92))
    lines.append("")
    lines.append(ui.section("configuracao do lote", width))
    kv_items = [
        ("cartao", state.get("card", "")),
        ("meses", state.get("months", "")),
        ("anos", state.get("years", "")),
        ("cvv", state.get("cvv", "")),
        ("modelo", state.get("template", "")),
        ("saida", state.get("output", "apenas exibicao")),
    ]
    lines.extend(ui.kv_block(kv_items[:3], width, 10, compact=True) if height < 18 else ui.kv_block(kv_items, width, 10))
    preview = state.get("preview") or []
    room = height - len(lines) - 2
    if room >= 2:
        lines.append("")
        lines.append(ui.section("amostra", width))
        rows = max(0, min(6, room - 2))
        for line in (preview[-rows:] if rows else []):
            lines.append(fit(ui.paint(strip(line), fg=ui.role("muted")), width))
        if not preview:
            lines.append(ui.paint("aguardando primeiras linhas…", fg=ui.role("dim")))
    lines.extend(_footer(ui, state.get("hints", []), "", width))
    return lines


def _check_line(ui: UI, ok: bool, label: str, good: str = "ok", bad: str = "atencao") -> str:
    tone = ui.role("success" if ok else "warn")
    return "  " + ui.status_dot(ok, label) + " " + ui.paint(good if ok else bad, fg=tone)


def view_validate(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    report = state.get("report")
    lines = _header(ui, state.get("path", "validador"), state.get("status", ""), width)
    if report is None:
        lines.append(ui.paint("  nenhum numero informado", fg=ui.role("muted")))
        lines.extend(_footer(ui, state.get("hints", []), "", width))
        return lines
    ok = report.ok
    color = "success" if ok else "danger"
    label = "NUMERO VALIDO" if ok else "NUMERO INVALIDO"
    lines.append("")
    lines.append(ui.center(ui.badge(label, color, solid=True, width=min(width - 8, 34)), width))
    lines.append("")
    lines.append(ui.center(ui.paint(report.digits, fg=ui.role("text"), bold=True), width))
    lines.append("")
    left_w, right_w = split_widths(width, 2, 0.5)
    left = [
        ui.section("verificacoes", left_w),
        _check_line(ui, report.luhn_ok, "digito verificador (luhn)", bad="falhou"),
        _check_line(ui, report.brand_known, "iin / bandeira reconhecida", bad="desconhecida"),
        _check_line(ui, report.length_ok, "comprimento compativel", bad="fora do padrao"),
    ]
    if height >= 24:
        left.append("")
        left.append(ui.section("detalhes", left_w))
        left.extend(
            ui.kv_block(
                [
                    ("bandeira", report.brand_name),
                    ("esquema", report.brand.scheme if report.brand else "—"),
                    ("tipo", report.brand.kind_label if report.brand else "—"),
                    ("pais", report.brand.country if report.brand else "—"),
                    ("bin", report.digits[:6]),
                    ("comprimento", str(report.length)),
                ],
                left_w,
                12,
            )
        )
    right = [ui.section("observacoes", right_w)]
    if report.findings:
        for finding in report.findings:
            role = {"error": "danger", "warn": "warn", "info": "info"}.get(finding.level, "info")
            for index, chunk in enumerate(ui.wrap(finding.message, right_w - 4)):
                right.append(
                    ("  " if index == 0 else "    ")
                    + ui.paint(("• " if index == 0 else "  ") + chunk, fg=ui.role(role))
                )
    else:
        right.append("  " + ui.paint("nenhum problema encontrado", fg=ui.role("success")))
    summary = state.get("summary")
    if summary and height >= 22:
        right.append("")
        right.append(ui.section("lote", right_w))
        right.extend(
            ui.kv_block(
                [
                    ("total", human_int(summary["total"])),
                    ("validos", human_int(summary["valid"])),
                    ("invalidos", human_int(summary["invalid"])),
                    ("taxa", "%.1f%%" % summary["rate"]),
                ],
                right_w,
                12,
            )
        )
        top = sorted(summary["brands"].items(), key=lambda item: -item[1])[:4]
        if top:
            right.append("")
            right.extend(bar_compact(ui, top, right_w, "secondary"))
    lines.extend(columns(left, right, width, 2, left_width=left_w))
    lines.extend(_footer(ui, state.get("hints", []), "", width))
    return lines


def view_library(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    stats = state.get("totals", {})
    entries = state.get("entries", [])
    lines = _header(ui, state.get("path", "biblioteca"), state.get("status", ""), width)
    tiles = [
        Tile("CARTÕES GERADOS", human_int(stats.get("cards", 0)), "histórico local", "primary"),
        Tile("SESSÕES", human_int(stats.get("sessions", 0)), "execuções registradas", "secondary"),
        Tile("MÉDIA", "%.0f/s" % stats.get("rate", 0.0), "tempo total %s" % human_duration(stats.get("elapsed", 0.0)), "accent"),
        Tile("ARQUIVOS", human_int(len(entries)), "em %s" % state.get("dir", "output"), "info"),
    ]
    if height < 22:
        tiles = [tiles[0], tiles[3]]
    lines.extend(ui.tiles(tiles, width, per_row=4 if width >= 92 else 2, compact=height < 28 and width < 92))
    lines.append("")
    left_w, right_w = split_widths(width, 2, 0.5)
    left: List[str] = [ui.section("bandeiras mais geradas", left_w)]
    left.extend(
        bar_compact(
            ui,
            sorted(stats.get("brands", {}).items(), key=lambda item: -item[1]),
            left_w,
            "primary",
            limit=max(2, min(8, height - 18)),
        )
    )
    if height >= 22:
        left.append("")
        left.append(ui.section("atividade (14 dias)", left_w))
        per_day = stats.get("per_day", {})
        if per_day:
            left.append("  " + ui.sparkline(list(per_day.values()), left_w - 6, "accent"))
            left.append(
                "  "
                + ui.paint(
                    "%s %s %s" % (list(per_day)[0][5:], ui.glyphs.arrow, list(per_day)[-1][5:]),
                    fg=ui.role("dim"),
                )
            )
        else:
            left.append("  " + ui.paint("sem atividade registrada", fg=ui.role("dim")))
    right: List[str] = [ui.section("arquivos recentes", right_w)]
    visible = entries[: max(3, height - 16)]
    for index, entry in enumerate(visible):
        right.append(
            ui.file_row(
                entry.name,
                human_bytes(entry.size),
                human_int(entry.lines or 0),
                entry.when,
                right_w,
                selected=index == state.get("selected", 0),
            )
        )
    if not entries:
        right.append("  " + ui.paint("nenhum arquivo no diretorio de saida", fg=ui.role("dim")))
    lines.extend(columns(left, right, width, 2, left_width=left_w))
    lines.extend(_footer(ui, state.get("hints", []), state.get("note", ""), width))
    return lines


def view_settings(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    lines = _header(ui, state.get("path", "configuracoes"), state.get("status", ""), width)
    note = state.get("note", "")
    if note:
        lines.extend(ui.notice(note, "success", width))
        lines.append("")
    items: Sequence[MenuItem] = state.get("items", [])
    lines.append(ui.section(state.get("title", "preferencias"), width))
    available = max(4, height - len(lines) - 4)
    lines.extend(ui.menu(items, state.get("selected", 0), width, height=available))
    lines.extend(_footer(ui, state.get("hints", []), state.get("footer_note", ""), width))
    return lines


def view_about(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    lines = _header(ui, "sobre", state.get("status", ""), width)
    lines.extend(ui.banner(width) if height >= 30 else [ui.logo_line(width)])
    lines.append("")
    from ..version import AUTHOR, BUILD, CODENAME, REPO_URL, TAG, TELEGRAM_URL

    left_w, right_w = split_widths(width, 2, 0.5)
    left = [ui.section("sobre o projeto", left_w)]
    project = [
        ("produto", "LBin Gen"),
        ("versao", TAG),
        ("codename", CODENAME),
        ("build", BUILD),
        ("autor", AUTHOR),
        ("licenca", "Apache-2.0"),
    ]
    left.extend(ui.kv_block(project[:3] if height < 18 else project, left_w, 11))
    left.append("")
    if height >= 26:
        left.extend(
            ui.wrap(
                "Kit de geracao de dados de teste para cartoes. Gera numeros validos por Luhn, "
                "consulta BINs, monta combinacoes de validade/CVV e exporta em 8 formatos.",
                left_w - 2,
            )
        )
    else:
        left.pop()
    right = [ui.section("canais", right_w)]
    channels = [
        ("telegram", "@" + TELEGRAM_URL.rsplit("/", 1)[-1]),
        ("repositorio", REPO_URL.replace("https://", "")),
        ("suporte", "issues no github"),
        ("plataformas", "windows · linux · termux"),
    ]
    right.extend(ui.kv_block(channels[:2] if height < 18 else channels, right_w, 11))
    right.append("")
    if height >= 22:
        right.append(ui.section("recursos", right_w))
        features = (
            "gerador em massa + consulta de BIN",
            "validador Luhn e detector de bandeira",
            "combinacoes de validade e CVV",
            "exportacao txt/csv/json/jsonl/js/sql/xml/html",
            "historico e estatisticas locais",
            "zero dependencias externas",
        )
        if height < 24:
            features = features[:3]
        for feature in features:
            right.append(fit("  " + ui.paint(ui.glyphs.check + " " + feature, fg=ui.role("muted")), right_w))
    else:
        right.pop()
    lines.extend(columns(left, right, width, 2, left_width=left_w))
    lines.append("")
    lines.extend(
        ui.notice(
            "use apenas em ambientes que voce controla, em testes autorizados e dados ficticios.",
            "warn",
            width,
        )
    )
    lines.extend(_footer(ui, state.get("hints", []), "", width))
    return lines


def view_doctor(ui: UI, state: Dict[str, Any]) -> List[str]:
    width = state.get("width") or ui.width
    height = state.get("height") or ui.caps.height
    lines = _header(ui, "diagnostico", "", width)
    rows = [[name, value, _status_cell(ui, status)] for name, value, status in state.get("checks", [])]
    notice = ui.notice(state.get("note", "ambiente pronto para uso"), "info", width)
    while rows:
        table = ui.table(["item", "valor", "situacao"], rows, width=width, aligns=("left", "left", "right"))
        if len(lines) + len(table) + 1 + len(notice) <= height:
            break
        rows.pop()
    lines.extend(
        ui.table(["item", "valor", "situacao"], rows, width=width, aligns=("left", "left", "right"))
        if rows
        else [ui.paint("  diagnostico indisponivel nesta altura", fg=ui.role("dim"))]
    )
    lines.append("")
    lines.extend(notice)
    return lines


def _status_cell(ui: UI, status: str) -> str:
    text = (status or "").strip().lower()
    if text == "ok":
        return ui.paint(ui.glyphs.check + " ok", fg=ui.role("success"))
    if text.startswith("aten"):
        return ui.paint(ui.glyphs.warning + " atencao", fg=ui.role("warn"))
    if text == "padrao":
        return ui.paint(ui.glyphs.dot + " padrao", fg=ui.role("dim"))
    if text.startswith("modo script"):
        return ui.paint(ui.glyphs.info + " modo script", fg=ui.role("info"))
    return ui.paint(status or "—", fg=ui.role("muted"))
