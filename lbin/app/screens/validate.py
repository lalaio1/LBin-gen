from __future__ import annotations

import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

from ...core import exporters as exporters_mod
from ...core import validator as validator_mod
from ...core.storage import human_bytes, human_int
from ...ui.widgets import MenuItem, Tile
from ..live import press_any
from ..views import bar_compact, view_validate
from . import form_screen

HINTS = (("ENTER", "continuar"), ("Q", "voltar"))


def single(ctx: Any) -> None:
    ui = ctx.ui
    width = ctx.term.size()[0]
    value = ctx.prompt.read("Numero do cartao", hint="(enter vazio para voltar)", allow_empty=True)
    if not value:
        return
    report = validator_mod.inspect(value)
    lines = view_validate(
        ui,
        {
            "width": width,
            "height": ctx.term.size()[1],
            "report": report,
            "path": "validador",
            "status": "luhn %s" % ("ok" if report.luhn_ok else "falhou"),
            "hints": [("ENTER", "validar outro"), ("Q", "voltar")],
        },
    )
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
    press_any(ctx)


def batch(ctx: Any) -> None:
    ui = ctx.ui
    width = ctx.term.size()[0]
    form_screen(
        ctx,
        "Validador em lote",
        subtitle="Aponte um arquivo com cartoes (um por linha) ou cole a lista para validar tudo de uma vez.",
        note="linhas com texto extra tambem funcionam: os numeros sao extraidos automaticamente.",
    )
    source = ctx.prompt.read("Arquivo", hint="(vazio para colar a lista)", allow_empty=True)
    numbers: List[str] = []
    if source:
        path = Path(source).expanduser()
        if not path.exists():
            form_screen(ctx, "Validador", note="arquivo nao encontrado: %s" % path, color="error")
            press_any(ctx)
            return
        with path.open("r", encoding="utf-8", errors="replace") as handle:
            for line in handle:
                numbers.extend(validator_mod.extract_numbers(line))
                if len(numbers) >= 200000:
                    break
    else:
        raw = ctx.prompt.read("Lista de cartoes", hint="(separados por espaco, virgula ou quebra de linha)")
        for chunk in raw.replace(",", " ").split():
            digits = "".join(ch for ch in chunk if ch.isdigit())
            if len(digits) >= 12:
                numbers.append(digits)
    if not numbers:
        form_screen(ctx, "Validador", note="nenhum numero encontrado", color="warn")
        press_any(ctx)
        return
    started = time.monotonic()
    reports = [validator_mod.inspect(number) for number in numbers]
    summary = validator_mod.summarize(reports)
    rows: List[List[str]] = []
    for report in reports[:300]:
        mark = ui.paint(ui.glyphs.check if report.ok else ui.glyphs.cross_mark, fg=ui.role("success" if report.ok else "danger"))
        rows.append(
            [
                mark,
                report.digits,
                report.brand_name,
                str(report.length),
                "ok" if report.luhn_ok else "falhou",
                report.findings[0].message if report.findings else "—",
            ]
        )
    lines = [ui.app_header("validador em lote", "%s numeros" % human_int(len(reports)), width), ""]
    lines.extend(
        ui.tiles(
            [
                Tile("TOTAL", human_int(summary["total"]), "numeros analisados", "primary"),
                Tile("VALIDOS", human_int(summary["valid"]), "%.1f%% do lote" % summary["rate"], "success"),
                Tile("INVALIDOS", human_int(summary["invalid"]), "luhn ou tamanho", "danger"),
                Tile("TEMPO", "%.0f ms" % ((time.monotonic() - started) * 1000), "processamento local", "info"),
            ],
            width,
            per_row=4 if width >= 92 else 2,
        )
    )
    lines.append("")
    lines.append(ui.section("distribuicao por bandeira", width))
    lines.extend(bar_compact(ui, sorted(summary["brands"].items(), key=lambda item: -item[1]), width))
    lines.append("")
    lines.append(ui.section("amostra" + (" (300 primeiros)" if len(reports) > 300 else ""), width))
    lines.extend(
        ui.table(
            ["", "numero", "bandeira", "len", "luhn", "observacao"],
            rows,
            width=width,
            zebra=True,
        )
    )
    if ctx.prompt.confirm("Salvar apenas os validos em arquivo", default=False):
        valid = [report for report in reports if report.ok]
        name = "validados-%s.txt" % time.strftime("%Y%m%d-%H%M%S")
        output = ctx.output_dir() / name
        with ctx.writer(output, "txt") as writer:
            for report in valid:
                writer.write({"number": report.digits, "month": "", "year": "", "cvv": "", "bin": report.digits[:6]})
        lines.append("")
        lines.extend(
            ui.notice(
                "%s numeros validos salvos em %s (%s)" % (human_int(len(valid)), output.name, human_bytes(writer.bytes)),
                "success",
                width,
            )
        )
    ctx.save_session("validate", len(reports), time.monotonic() - started, summary["brands"], "", {"mode": "batch"})
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
    ctx.term.write("\n")
    press_any(ctx)


def run(ctx: Any) -> None:
    while True:
        choice = ctx.prompt.select(
            [
                MenuItem("single", "Validar um numero", "luhn, iin, bandeira e comprimento", "rapido", "primary"),
                MenuItem("batch", "Validar arquivo ou lista", "estatisticas completas do lote", "lote", "secondary"),
                MenuItem("back", "Voltar ao menu", "", "", "dim"),
            ],
            title="validador",
            header=[ctx.ui.app_header("validador", "@lalaio1"), ""],
        )
        if choice in (None, "back"):
            return
        try:
            if choice == "single":
                single(ctx)
            else:
                batch(ctx)
        except KeyboardInterrupt:
            return
