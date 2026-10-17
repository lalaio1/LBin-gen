from __future__ import annotations

import time
from typing import Any, Dict, List, Optional

from ...core import brands as brands_mod
from ...core import exporters as exporters_mod
from ...core import generator as generator_mod
from ...core.storage import human_bytes, human_duration, human_int
from ...ui.widgets import Tile
from ..jobs import BulkJob
from ..live import press_any, run_job_screen
from ..views import bar_compact, view_bulk
from . import form_screen

HINTS = (("Q", "abortar"), ("P", "pausar"), ("S", "sincronizar"))
MAX_PREVIEW = 12


def _spec_validator(spec: str) -> Optional[str]:
    clean = generator_mod.normalize_spec(spec)
    if not clean and not spec:
        return None
    if len(clean) < 4:
        return "informe ao menos 4 digitos (ou deixe vazio para numeros aleatorios)"
    return None


def collect_options(ctx: Any) -> Dict[str, Any]:
    prompt = ctx.prompt
    config = ctx.config
    from ...core import exporters

    formats = exporters.format_keys()
    form_screen(
        ctx,
        "Gerador turbo · lote offline",
        subtitle="Gera em alta velocidade, sem consultas de rede, gravando direto no arquivo escolhido.",
        note="ideal para lotes grandes: 10 mil cartoes em poucos segundos.",
    )
    spec = prompt.read(
        "BIN / prefixo (vazio = aleatorio)",
        default=str(config.get("generator", "default_spec", "411111")),
        allow_empty=True,
        validate=_spec_validator,
    )
    count = prompt.read_int("Quantidade", default=10000, low=1, high=5000000)
    brand_auto = brands_mod.detect(spec) if spec else None
    default_length = (
        brand_auto.lengths[-1] if brand_auto and len(brand_auto.lengths) > 2 else (brand_auto.lengths[0] if brand_auto else 16)
    )
    length = prompt.read_int("Comprimento", default=int(default_length), low=12, high=19)
    with_expiry = prompt.confirm("Gerar validade (mes/ano)", default=bool(config.get("generator", "with_expiry", True)))
    with_cvv = prompt.confirm("Gerar CVV", default=bool(config.get("generator", "with_cvv", True)))
    with_holder = prompt.confirm(
        "Gerar titular ficticio", default=bool(config.get("generator", "with_holder", False))
    )
    default_format = str(config.get("output", "format", "txt"))
    fmt = prompt.read(
        "Formato (%s)" % ", ".join(formats),
        default=default_format,
        validate=lambda value: None if value in formats else "formatos: %s" % ", ".join(formats),
    )
    template = str(config.get("output", "template", "{number}|{month}|{year}|{cvc}"))
    if fmt == "txt":
        template = prompt.read("Template da linha", default=template, hint="({number} {month} {year} {cvc})")
    spec_token = spec.replace("x", "0")[:6] if spec else "random"
    filename = prompt.read(
        "Arquivo de saida",
        default="lbin-%s-%s.%s" % (spec_token, time.strftime("%Y%m%d-%H%M%S"), exporters.extension_for(fmt)),
    )
    return {
        "spec": spec,
        "count": int(count or 1000),
        "length": int(length or 16),
        "with_expiry": with_expiry,
        "with_cvv": with_cvv,
        "with_holder": with_holder,
        "format": fmt,
        "template": template,
        "filename": filename,
    }


def run(ctx: Any) -> None:
    options = collect_options(ctx)
    ui = ctx.ui
    width = ctx.term.size()[0]
    fmt = exporters_mod.resolve_format(options["format"])
    output_path = ctx.output_dir() / options["filename"]
    estimated = options["count"] * 40
    form_screen(
        ctx,
        "Gerador turbo · confirmar",
        pairs=[
            ("bin", options["spec"] or "aleatorio"),
            ("quantidade", human_int(options["count"])),
            ("comprimento", str(options["length"])),
            ("validade/cvv", "sim" if options["with_expiry"] else "nao"),
            ("formato", "%s (%s)" % (fmt.label, fmt.extension)),
            ("arquivo", str(output_path)),
            ("tamanho estimado", human_bytes(estimated)),
        ],
        note="a gravacao e incremental: interromper com Q preserva tudo o que ja foi escrito.",
    )
    ctx.prompt.read("Iniciar", default="enter", allow_empty=True)

    writer = ctx.writer(output_path, options["format"], {"spec": options["spec"], "count": options["count"]})
    writer.template = options["template"]
    writer.__enter__()
    job = BulkJob(
        spec=options["spec"],
        count=options["count"],
        length=options["length"],
        with_expiry=options["with_expiry"],
        with_cvv=options["with_cvv"],
        with_holder=options["with_holder"],
        span_years=int(ctx.config.get("generator", "span_years", 5)),
    )
    state: Dict[str, Any] = {
        "path": "gerador turbo",
        "status": "gravando em %s" % output_path.name,
        "stats": {},
        "preview": [],
        "output": str(output_path),
        "format": fmt.label,
        "template": options["template"],
        "unique": True,
        "note": "",
    }

    def on_item(state: Dict[str, Any], card: Any) -> None:
        record = card.as_dict()
        writer.write(record)
        line = exporters_mod.render(fmt, record, options["template"]).rstrip("\n")
        state["preview"].append(line)
        if len(state["preview"]) > MAX_PREVIEW:
            del state["preview"][:-MAX_PREVIEW]
        state["bytes"] = writer.bytes

    def on_key(key: str, state: Dict[str, Any]) -> Optional[str]:
        if key in ("q", "esc"):
            return "quit"
        if key == "p":
            return "pause" if job.pause_event.is_set() else "resume"
        if key == "s":
            writer.flush()
            state["note"] = "buffer sincronizado em disco"
            return "save"
        return None

    job.start()
    stats = run_job_screen(
        ctx, job, state, lambda current: view_bulk(ui, current), hints=HINTS, on_item=on_item, on_key=on_key
    )
    writer.__exit__(None, None, None)

    ctx.save_session(
        "bulk",
        stats.get("generated", 0),
        stats.get("elapsed", 0.0),
        stats.get("brands", {}),
        str(output_path),
        {"format": options["format"], "spec": options["spec"]},
    )
    lines: List[str] = [ui.app_header("gerador turbo", "concluido", width), ""]
    lines.append(ui.section("lote finalizado", width))
    lines.append("")
    lines.extend(
        ui.tiles(
            [
                Tile("LINHAS", human_int(writer.records), "gravadas no arquivo", "primary"),
                Tile("TAMANHO", human_bytes(writer.bytes), "em disco", "secondary"),
                Tile("TEMPO", human_duration(stats.get("elapsed", 0.0)), "%.0f cartoes/s" % stats.get("rate", 0.0), "accent"),
                Tile("ERROS", human_int(stats.get("errors", 0)), "nenhum" if not stats.get("errors") else "verifique a saida", "warn"),
            ],
            width,
            per_row=4 if width >= 92 else 2,
        )
    )
    lines.append("")
    lines.append(ui.section("bandeiras", width))
    lines.extend(bar_compact(ui, sorted(stats.get("brands", {}).items(), key=lambda item: -item[1]), width))
    lines.append("")
    if job.stop_event.is_set():
        lines.extend(ui.notice("lote interrompido — arquivo fechado com %s linhas" % human_int(writer.records), "warn", width))
    else:
        lines.extend(
            ui.notice(
                "pronto: %s (%s)" % (output_path.name, human_bytes(writer.bytes)),
                "success",
                width,
            )
        )
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
    ctx.term.write("\n")
    press_any(ctx)
