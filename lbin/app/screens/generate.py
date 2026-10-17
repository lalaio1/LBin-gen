from __future__ import annotations

import time
from pathlib import Path
from typing import Any, Dict, List, Optional

from ...core import brands as brands_mod
from ...core import generator as generator_mod
from ...core.storage import human_bytes, human_duration, human_int
from ...ui.widgets import Tile
from ..jobs import EnrichJob
from ..live import press_any, run_job_screen
from ..views import bar_compact, view_generate
from . import form_screen

HINTS = (("Q", "abortar"), ("P", "pausar"), ("S", "salvar agora"))
MAX_LIVE = 40


def _spec_validator(spec: str) -> Optional[str]:
    clean = generator_mod.normalize_spec(spec)
    if len(clean) < 4:
        return "informe ao menos 4 digitos (use x como coringa, ex: 4111xxxxxxxxxxxx)"
    return None


def collect_options(ctx: Any) -> Optional[Dict[str, Any]]:
    prompt = ctx.prompt
    config = ctx.config
    answers: Dict[str, Any] = {}
    online_default = ctx.client is not None

    form_screen(
        ctx,
        "Gerador online · novo lote",
        subtitle="Gera numeros validos por Luhn e cruza cada BIN com a base local e os provedores online.",
        note="dica: x funciona como coringa em qualquer posicao do BIN.",
    )
    spec = prompt.read(
        "BIN / prefixo do cartao",
        default=str(config.get("generator", "default_spec", "411111")),
        hint="(ex: 411111, 457173, 5162xxxxxxxxxxxx)",
        validate=_spec_validator,
    )
    answers["spec"] = spec
    brand_auto = brands_mod.detect(spec)
    answers["brand"] = brand_auto.key if brand_auto else ""

    form_screen(
        ctx,
        "Gerador online · novo lote",
        pairs=[("bin", answers["spec"]), ("bandeira", brand_auto.name if brand_auto else "auto")],
        subtitle="Quantidade, comprimento e enriquecimento dos resultados.",
    )
    answers["count"] = prompt.read_int("Quantidade", default=int(config.get("generator", "count", 50)), low=1, high=200000)
    default_length = brand_auto.lengths[-1] if brand_auto and len(brand_auto.lengths) > 2 else (brand_auto.lengths[0] if brand_auto else 16)
    answers["length"] = prompt.read_int("Comprimento", default=int(default_length), low=12, high=19)
    if online_default:
        answers["online"] = prompt.confirm("Consultar BINs online (banco/país/categoria)", default=True)
    else:
        answers["online"] = False
    answers["workers"] = prompt.read_int("Workers de consulta", default=int(config.get("network", "workers", 8)), low=1, high=32)
    answers["save"] = prompt.confirm("Salvar em arquivo", default=bool(config.get("generator", "auto_save", True)))
    if answers["save"]:
        from ...core import exporters

        choices = exporters.format_keys()
        default = str(config.get("output", "format", "txt"))
        answers["format"] = prompt.read(
            "Formato (%s)" % ", ".join(choices),
            default=default,
            validate=lambda value: None if value in choices else "use um dos formatos: %s" % ", ".join(choices),
        )
        answers["filename"] = prompt.read(
            "Nome do arquivo",
            default="lbin-%s-%s.%s" % (
                answers["spec"].replace("x", "0")[:6],
                time.strftime("%Y%m%d-%H%M%S"),
                exporters.extension_for(answers["format"]),
            ),
        )
    return answers


def run(ctx: Any) -> None:
    answers = collect_options(ctx)
    if answers is None:
        return
    ui = ctx.ui
    spec = answers["spec"]
    count = int(answers["count"] or 50)
    length = int(answers["length"] or 16)
    workers = int(answers["workers"] or 4)
    online = bool(answers["online"])

    summary_pairs = [
        ("bin", spec),
        ("quantidade", human_int(count)),
        ("comprimento", str(length)),
        ("consulta online", "ativa" if online else "somente base local"),
        ("workers", str(workers)),
        ("saida", answers.get("filename", "apenas exibicao") if answers.get("save") else "apenas exibicao"),
    ]
    form_screen(
        ctx,
        "Gerador online · confirmar",
        pairs=summary_pairs,
        note="pressione ENTER para comecar. dentro do painel: Q aborta, P pausa, S salva.",
    )
    ctx.prompt.read("Iniciar", default="enter", allow_empty=True)

    writer = None
    output_path = None
    if answers.get("save"):
        output_path = ctx.output_dir() / str(answers["filename"])
        writer = ctx.writer(output_path, answers.get("format", "txt"), {"spec": spec, "count": count})
        writer.__enter__()

    job = EnrichJob(
        spec=spec,
        count=count,
        resolver=ctx.resolver,
        workers=workers,
        allow_network=online,
        length=length,
        with_expiry=bool(ctx.config.get("generator", "with_expiry", True)),
        with_cvv=bool(ctx.config.get("generator", "with_cvv", True)),
        with_holder=bool(ctx.config.get("generator", "with_holder", False)),
        span_years=int(ctx.config.get("generator", "span_years", 5)),
    )
    state: Dict[str, Any] = {
        "path": "gerador online",
        "status": "streaming" if online else "base local",
        "cards": [],
        "stats": {},
        "note": "",
    }

    def on_item(state: Dict[str, Any], card: Any) -> None:
        state["cards"].append(card)
        if len(state["cards"]) > MAX_LIVE:
            del state["cards"][:-MAX_LIVE]
        if writer is not None:
            writer.write(card.as_dict())

    def on_key(key: str, state: Dict[str, Any]) -> Optional[str]:
        if key in ("q", "esc"):
            return "quit"
        if key == "p":
            return "pause" if job.pause_event.is_set() else "resume"
        if key == "s" and writer is not None:
            writer.flush()
            state["note"] = "dados sincronizados em %s" % output_path.name
            return "save"
        return None

    job.start()
    stats = run_job_screen(
        ctx,
        job,
        state,
        lambda current: view_generate(ui, current),
        hints=HINTS,
        on_item=on_item,
        on_key=on_key,
    )
    size_bytes = 0
    if writer is not None:
        writer.__exit__(None, None, None)
        size_bytes = writer.bytes
        if size_bytes == 0 and output_path is not None and output_path.exists():
            size_bytes = output_path.stat().st_size

    brands = sorted(stats.get("brands", {}).items(), key=lambda item: -item[1])
    ctx.save_session(
        "generate",
        stats.get("generated", 0),
        stats.get("elapsed", 0.0),
        stats.get("brands", {}),
        str(output_path) if output_path else "",
        {"online": online, "spec": spec, "aborted": job.stop_event.is_set()},
    )
    lines: List[str] = []
    width = ctx.term.size()[0]
    lines.append(ui.app_header("gerador online", "concluido", width))
    lines.append("")
    lines.append(ui.section("resumo do lote", width))
    lines.append("")
    lines.extend(
        ui.tiles(
            [
                Tile("GERADOS", human_int(stats.get("generated", 0)), "%s unicos" % human_int(stats.get("generated", 0)), "primary"),
                Tile("CONSULTADOS", human_int(stats.get("enriched", 0)), "bins resolvidos", "secondary"),
                Tile("VELOCIDADE", "%.1f/s" % stats.get("rate", 0.0), human_duration(stats.get("elapsed", 0.0)) + " no total", "accent"),
                Tile("ARQUIVO", human_bytes(size_bytes), str(output_path.name) if output_path else "nao salvo", "info"),
            ],
            width,
            per_row=4 if width >= 92 else 2,
        )
    )
    lines.append("")
    lines.append(ui.section("bandeiras", width))
    lines.extend(bar_compact(ui, brands, width))
    if stats.get("error"):
        lines.append("")
        lines.extend(ui.notice(stats["error"], "error", width))
    elif job.stop_event.is_set():
        lines.append("")
        lines.extend(ui.notice("lote interrompido pelo operador", "warn", width))
    else:
        lines.append("")
        lines.extend(ui.notice("lote concluido com sucesso", "success", width))
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
    ctx.term.write("\n")
    press_any(ctx)
