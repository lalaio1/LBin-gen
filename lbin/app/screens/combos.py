from __future__ import annotations

import json
import time
from pathlib import Path
from typing import Any, Dict, List, Optional

from ...core import combos as combos_mod
from ...core import exporters as exporters_mod
from ...core import generator as generator_mod
from ...core import validator as validator_mod
from ...core.storage import human_bytes, human_duration, human_int
from ...ui.widgets import MenuItem, Tile
from ..jobs import ComboJob
from ..live import press_any, run_job_screen
from ..views import view_combos
from . import form_screen

HINTS = (("Q", "abortar"), ("P", "pausar"), ("ENTER", "concluir"))
MAX_PREVIEW = 10


def _cards_from_text(text: str) -> List[str]:
    tokens: List[str] = []
    for chunk in text.replace(",", " ").replace(";", " ").split():
        digits = "".join(ch for ch in chunk if ch.isdigit())
        if len(digits) >= 6:
            tokens.append(digits)
    return tokens


def _to_full_number(value: str) -> str:
    digits = "".join(ch for ch in value if ch.isdigit())
    if len(digits) >= 12:
        return digits[:19]
    length = 15 if digits.startswith(("34", "37")) else 16
    return generator_mod.generate_number(digits, length)


def collect(ctx: Any) -> Optional[Dict[str, Any]]:
    prompt = ctx.prompt
    width = ctx.term.size()[0]
    form_screen(
        ctx,
        "Combinacoes de validade e CVV",
        subtitle="Expande um ou mais cartoes em todas as combinacoes de mes, ano e CVV escolhidas.",
        note="BINs curtos (6 a 8 digitos) sao completados automaticamente com digito verificador valido.",
    )
    source = prompt.select(
        [
            MenuItem("text", "Informar cartoes agora", "digite um ou mais numeros", "", "primary"),
            MenuItem("file", "Ler de um arquivo", "um cartao ou BIN por linha", "", "secondary"),
            MenuItem("back", "Voltar", "", "", "dim"),
        ],
        title="origem dos cartoes",
        header=[ctx.ui.app_header("combinacoes", "@lalaio1"), ""],
    )
    if source in (None, "back"):
        return None
    raw_cards: List[str] = []
    if source == "file":
        path_value = prompt.read("Arquivo", hint="(um cartao por linha)")
        path = Path(path_value).expanduser()
        if not path.exists():
            form_screen(ctx, "Combinacoes", note="arquivo nao encontrado", color="error")
            press_any(ctx)
            return None
        with path.open("r", encoding="utf-8", errors="replace") as handle:
            for line in handle:
                raw_cards.extend(_cards_from_text(line))
                if len(raw_cards) >= 500:
                    break
    else:
        text = prompt.read("Cartoes ou BINs", hint="(separados por espaco ou virgula)")
        raw_cards = _cards_from_text(text)
    if not raw_cards:
        form_screen(ctx, "Combinacoes", note="nenhum cartao valido informado", color="warn")
        press_any(ctx)
        return None
    numbers: List[str] = []
    seen = set()
    for value in raw_cards:
        full = _to_full_number(value)
        if full not in seen:
            seen.add(full)
            numbers.append(full)
    reports = [validator_mod.inspect(number) for number in numbers]
    valid = [report for report in reports if report.luhn_ok]
    invalid = [report for report in reports if not report.luhn_ok]
    pairs = [
        ("cartoes", human_int(len(numbers))),
        ("validos (luhn)", human_int(len(valid))),
        ("invalidos", human_int(len(invalid))),
        ("exemplo", numbers[0]),
    ]
    ui = ctx.ui
    if invalid:
        status_line = "  " + ui.paint(
            "%s %d numeros nao passaram no Luhn" % (ui.glyphs.warning, len(invalid)), fg=ui.role("warn")
        )
    else:
        status_line = "  " + ui.paint(
            "%s todos os numeros passaram no Luhn" % ui.glyphs.check, fg=ui.role("success")
        )
    form_screen(
        ctx,
        "Combinacoes · cartoes carregados",
        pairs=pairs,
        extra=[status_line, ""],
        note="invalidos continuam no lote, mas ficam marcados na saida quando o formato permite.",
    )
    if invalid and not prompt.confirm("Manter os invalidos no lote", default=False):
        numbers = [report.digits for report in reports if report.luhn_ok]

    now = time.localtime()
    default_years = "%d-%d" % (now.tm_year % 100, (now.tm_year + 5) % 100)
    form_screen(ctx, "Combinacoes · periodo", subtitle="Defina meses e anos que entram no produto cartesiano.")
    months_raw = prompt.read("Meses", default="1-12", hint="(ex: 1-12, 6, 12)")
    years_raw = prompt.read("Anos", default=default_years, hint="(aceita 26-31 ou 2026-2031)")
    try:
        months = combos_mod.parse_months(months_raw)
        years = combos_mod.parse_years(years_raw)
    except ValueError as error:
        form_screen(ctx, "Combinacoes", note=str(error), color="error")
        press_any(ctx)
        return None

    mode = prompt.select(
        [
            MenuItem("range", "Faixa completa de CVV", "000 a 999 (ou 0000 a 9999)", "1000 valores", "primary"),
            MenuItem("custom", "Intervalo personalizado", "informe inicio e fim", "custom", "secondary"),
            MenuItem("sample", "Amostra aleatoria", "N CVVs por combinacao", "aleatorio", "accent"),
            MenuItem("back", "Voltar", "", "", "dim"),
        ],
        title="estrategia de cvv",
        header=[ctx.ui.app_header("combinacoes", "@lalaio1"), ""],
    )
    if mode in (None, "back"):
        return None
    cvc_length = prompt.read_int("Digitos do CVV", default=3, low=3, high=4)
    spec = combos_mod.ComboSpec(numbers=numbers, months=months, years=years, cvc_length=int(cvc_length or 3))
    if mode == "custom":
        low = prompt.read_int("CVV inicial", default=0, low=0, high=10 ** spec.cvc_length - 1)
        high = prompt.read_int("CVV final", default=10 ** spec.cvc_length - 1, low=0, high=10 ** spec.cvc_length - 1)
        spec.cvc_from = int(low or 0)
        spec.cvc_to = int(high if high is not None else spec.cvc_from)
    elif mode == "sample":
        spec.cvc_mode = "random"
        spec.sample = int(prompt.read_int("Amostras por combinacao", default=5, low=1, high=1000) or 1)
        spec.seed = int(time.time())

    templates = combos_mod.TEMPLATES
    template = prompt.select(
        [MenuItem(key, label, "{number}|{month}|{year}|{cvc}", desc, "primary") for key, label, desc in templates]
        + [MenuItem("custom", "Template personalizado", "escreva o seu", "", "secondary")],
        title="modelo de linha",
        header=[ctx.ui.app_header("combinacoes", "@lalaio1"), ""],
    )
    if template is None:
        return None
    if template == "custom":
        spec.template = prompt.read(
            "Template", default=combos_mod.DEFAULT_TEMPLATE, hint="({number} {dashed} {month} {year} {cvc} {brand})"
        )
    else:
        for key, line, _ in templates:
            if key == template:
                spec.template = line
                break
    fmt = prompt.read(
        "Formato (txt, csv, jsonl)",
        default="txt",
        validate=lambda value: None if value in ("txt", "csv", "jsonl") else "use txt, csv ou jsonl",
    )
    filename = prompt.read(
        "Arquivo de saida",
        default="combos-%s.%s" % (time.strftime("%Y%m%d-%H%M%S"), fmt),
    )
    total = combos_mod.total(spec)
    return {
        "spec": spec,
        "format": fmt,
        "filename": filename,
        "total": total,
        "months": months_raw,
        "years": years_raw,
        "cvv": _cvv_label(spec),
        "card": numbers[0],
        "numbers": numbers,
    }


def _cvv_label(spec: combos_mod.ComboSpec) -> str:
    if spec.cvc_mode == "random":
        return "%d aleatorios por par" % spec.sample
    width = spec.cvc_length
    if spec.cvc_from == 0 and spec.cvc_to == 10 ** width - 1:
        return "faixa completa %0*d-%0*d" % (width, 0, width, spec.cvc_to)
    return "intervalo %0*d-%0*d" % (width, spec.cvc_from, width, spec.cvc_to)


def run(ctx: Any) -> None:
    options = collect(ctx)
    if options is None:
        return
    spec: combos_mod.ComboSpec = options["spec"]
    ui = ctx.ui
    width = ctx.term.size()[0]
    total = int(options["total"])
    estimate = total * 30
    if total <= 0:
        form_screen(ctx, "Combinacoes", note="nenhuma combinacao seria gerada", color="warn")
        press_any(ctx)
        return
    if total > 2000000:
        if not ctx.prompt.confirm(
            "Isso gerara %s linhas (~%s). Continuar" % (human_int(total), human_bytes(estimate)), default=False
        ):
            return
    form_screen(
        ctx,
        "Combinacoes · confirmar",
        pairs=[
            ("cartoes", human_int(len(options["numbers"]))),
            ("meses", options["months"]),
            ("anos", options["years"]),
            ("cvv", options["cvv"]),
            ("combinacoes", human_int(total)),
            ("tamanho estimado", human_bytes(estimate)),
            ("modelo", spec.template),
            ("arquivo", options["filename"]),
        ],
        note="precisa de espaco em disco livre: %s" % human_bytes(estimate),
    )
    ctx.prompt.read("Iniciar", default="enter", allow_empty=True)

    fmt = exporters_mod.resolve_format(options["format"])
    output = ctx.output_dir() / options["filename"]

    def formatter(record: Dict[str, Any]) -> str:
        return exporters_mod.render(fmt, record, spec.template)

    job = ComboJob(spec, formatter)
    state: Dict[str, Any] = {
        "path": "combinacoes",
        "status": "gravando em %s" % output.name,
        "stats": {},
        "preview": [],
        "card": options["card"],
        "months": options["months"],
        "years": options["years"],
        "cvv": options["cvv"],
        "template": spec.template,
        "output": str(output),
        "estimate": estimate,
        "bytes": 0,
    }
    handle = output.open("w", encoding="utf-8", newline="")
    try:
        def on_item(state: Dict[str, Any], line: str) -> None:
            handle.write(line)
            state["bytes"] += len(line)
            state["preview"].append(line.rstrip("\n"))
            if len(state["preview"]) > MAX_PREVIEW:
                del state["preview"][:-MAX_PREVIEW]

        def on_key(key: str, state: Dict[str, Any]) -> Optional[str]:
            if key in ("q", "esc"):
                return "quit"
            if key == "p":
                return "pause" if job.pause_event.is_set() else "resume"
            return None

        job.start()
        stats = run_job_screen(
            ctx, job, state, lambda current: view_combos(ui, current), hints=HINTS, on_item=on_item, on_key=on_key
        )
    finally:
        handle.flush()
        handle.close()
    size = output.stat().st_size if output.exists() else 0
    ctx.save_session(
        "combos",
        stats.get("generated", 0),
        stats.get("elapsed", 0.0),
        {},
        str(output),
        {"cards": len(options["numbers"]), "months": options["months"], "years": options["years"]},
    )
    lines: List[str] = [ui.app_header("combinacoes", "concluido", width), ""]
    lines.append(ui.section("lote de combinacoes", width))
    lines.append("")
    lines.extend(
        ui.tiles(
            [
                Tile("LINHAS", human_int(stats.get("generated", 0)), "de %s planejadas" % human_int(total), "accent"),
                Tile("TAMANHO", human_bytes(size), "em disco", "primary"),
                Tile("TEMPO", human_duration(stats.get("elapsed", 0.0)), "%.0f linhas/s" % stats.get("rate", 0.0), "info"),
                Tile("ARQUIVO", "pronto", output.name, "secondary"),
            ],
            width,
            per_row=4 if width >= 92 else 2,
        )
    )
    lines.append("")
    if job.stop_event.is_set():
        lines.extend(ui.notice("interrompido: %s linhas gravadas" % human_int(stats.get("generated", 0)), "warn", width))
    else:
        lines.extend(ui.notice("concluido: %s linhas em %s" % (human_int(stats.get("generated", 0)), output.name), "success", width))
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
    ctx.term.write("\n")
    press_any(ctx)
