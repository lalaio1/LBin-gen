from __future__ import annotations

import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any, Dict, List, Optional

from ...core import brands as brands_mod
from ...core import exporters as exporters_mod
from ...core import validator as validator_mod
from ...core.storage import human_bytes, human_duration, human_int
from ...ui.widgets import MenuItem, Tile
from ..live import press_any
from ..views import brand_tone, view_lookup
from . import form_screen

HINTS = (("ENTER", "continuar"), ("Q", "voltar"))


def _resolve(ctx: Any, value: str, allow_network: bool) -> Any:
    return ctx.resolver.resolve(value, allow_network=allow_network)


def single(ctx: Any) -> None:
    ui = ctx.ui
    config = ctx.config
    online = ctx.client is not None and bool(config.get("network", "offline_first", True))
    while True:
        form_screen(
            ctx,
            "Consulta de BIN",
            subtitle="Digerir um BIN de 6 a 8 digitos para descobrir bandeira, banco, pais, tipo e categoria.",
            note="a base offline responde na hora; os provedores online enriquecem o resultado.",
        )
        value = ctx.prompt.read(
            "BIN ou numero do cartao",
            hint="(ex: 411111, 516230 · enter vazio para voltar)",
            allow_empty=True,
        )
        if not value:
            return
        use_network = online and ctx.prompt.confirm("Consultar provedores online", default=True)
        ctx.term.hide_cursor()
        ctx.term.frame(
            [ctx.ui.app_header("consulta de bin", "consultando…", ctx.term.size()[0]), "", ""]
            + ctx.ui.notice("resolvendo %s…" % value, "info", ctx.term.size()[0]),
            ctx.term.size()[0],
            ctx.term.size()[1],
            pad=False,
        )
        info = _resolve(ctx, value, use_network)
        digits = "".join(ch for ch in value if ch.isdigit())
        report = validator_mod.inspect(digits) if len(digits) >= 12 else None
        width = ctx.term.size()[0]
        lines = view_lookup(
            ui,
            {
                "width": width,
                "height": ctx.term.size()[1],
                "info": info,
                "number": digits,
                "report": report,
                "path": "consulta de bin",
                "status": "online" if use_network else "base local",
                "hints": [("ENTER", "nova consulta"), ("Q", "voltar")],
            },
        )
        ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
        press_any(ctx, "pressione qualquer tecla para consultar outro bin")


def batch(ctx: Any) -> None:
    ui = ctx.ui
    width = ctx.term.size()[0]
    form_screen(
        ctx,
        "Consulta em lote",
        subtitle="Informe um arquivo com cartoes/BINs (um por linha) ou cole uma lista separada por espacos.",
        note="linhas duplicadas sao removidas automaticamente.",
    )
    path_value = ctx.prompt.read("Arquivo com a lista", hint="(vazio para colar)", allow_empty=True)
    values: List[str] = []
    if path_value:
        path = Path(path_value).expanduser()
        if not path.exists():
            form_screen(ctx, "Consulta em lote", note="arquivo nao encontrado: %s" % path, color="error")
            press_any(ctx)
            return
        with path.open("r", encoding="utf-8", errors="replace") as handle:
            for line in handle:
                values.extend(validator_mod.extract_numbers(line))
                if len(values) >= 5000:
                    break
    else:
        raw = ctx.prompt.read("Lista de BINs/cartoes", hint="(separados por espaco ou virgula)")
        for chunk in raw.replace(",", " ").split():
            digits = "".join(ch for ch in chunk if ch.isdigit())
            if len(digits) >= 6:
                values.append(digits)
    unique: List[str] = []
    seen = set()
    for value in values:
        token = value[:8]
        if token not in seen:
            seen.add(token)
            unique.append(value)
    if not unique:
        form_screen(ctx, "Consulta em lote", note="nenhum BIN valido encontrado", color="warn")
        press_any(ctx)
        return
    workers = ctx.prompt.read_int(
        "Workers", default=int(ctx.config.get("network", "workers", 8)), low=1, high=32
    )
    allow_network = ctx.client is not None and ctx.prompt.confirm("Consultar provedores online", default=True)

    results: List[Any] = []
    stop = {"flag": False}
    started = time.monotonic()
    with ThreadPoolExecutor(max_workers=max(1, int(workers or 4))) as executor:
        futures = {
            executor.submit(ctx.resolver.resolve, value, allow_network): value for value in unique
        }
        last_render = 0.0
        for future in as_completed(futures):
            try:
                results.append(future.result())
            except Exception:
                continue
            now = time.monotonic()
            if now - last_render > 0.12 or len(results) == len(unique):
                last_render = now
                frame = [
                    ui.app_header("consulta em lote", "processando", width),
                    "",
                    ui.section("progresso", width),
                    "",
                    ui.progress(
                        len(results),
                        len(unique),
                        max(24, width - 40),
                        "bins",
                        "primary",
                        "%s/%s" % (human_int(len(results)), human_int(len(unique))),
                    ),
                    "",
                    ui.tiles(
                        [
                            Tile("CONSULTADOS", human_int(len(results)), "de %s" % human_int(len(unique)), "primary"),
                            Tile("TEMPO", human_duration(now - started), "decorrido", "info"),
                            Tile("REDE", "ativa" if allow_network else "offline", "provedores", "secondary"),
                            Tile("WORKERS", str(workers), "paralelos", "accent"),
                        ],
                        width,
                        per_row=4 if width >= 92 else 2,
                    ),
                ]
                ctx.term.frame(frame, width, ctx.term.size()[1])
                key = ctx.term.read_key(0.001)
                if key in ("q", "esc"):
                    stop["flag"] = True
    if stop["flag"]:
        return
    rows: List[List[str]] = []
    for info in results:
        tone_key = info.brand_key
        rows.append(
            [
                ui.paint(info.bin, fg=ui.role("primary")),
                ui.paint((brands_mod.by_key(tone_key).name if brands_mod.by_key(tone_key) else info.scheme) or "—", fg=brand_tone(ui, tone_key)),
                info.bank or "—",
                ("%s %s" % (info.country_code, info.country)).strip() or "—",
                info.kind_label,
                info.source,
            ]
        )
    lines = [ui.app_header("consulta em lote", "%d bins" % len(results), width), ""]
    lines.append(ui.section("resultado", width))
    lines.extend(
        ui.table(["bin", "bandeira", "banco", "pais", "tipo", "origem"], rows, width=width, zebra=True)
    )
    if ctx.prompt.confirm("Salvar resultado em CSV", default=False):
        fmt = exporters_mod.resolve_format("csv")
        name = "bin-consulta-%s.csv" % time.strftime("%Y%m%d-%H%M%S")
        output = ctx.output_dir() / name
        with ctx.writer(output, "csv", {"count": len(results)}) as writer:
            for info in results:
                writer.write(
                    {
                        "number": "",
                        "month": "",
                        "year": "",
                        "cvv": "",
                        "brand": info.brand_key,
                        "scheme": info.scheme,
                        "type": info.kind,
                        "bank": info.bank,
                        "country": ("%s %s" % (info.country_code, info.country)).strip(),
                        "holder": "",
                        "bin": info.bin,
                    }
                )
        lines.append("")
        lines.extend(ui.notice("salvo em %s (%s)" % (output.name, human_bytes(writer.bytes)), "success", width))
    ctx.save_session("lookup", len(results), time.monotonic() - started, {}, "", {"mode": "batch"})
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
    ctx.term.write("\n")
    press_any(ctx)


def run(ctx: Any) -> None:
    while True:
        choice = ctx.prompt.select(
            [
                MenuItem("single", "Consultar um BIN", "bandeira, banco, pais, tipo, categoria", "online", "primary"),
                MenuItem("batch", "Consultar varios BINs", "a partir de arquivo ou lista colada", "lote", "secondary"),
                MenuItem("back", "Voltar ao menu", "", "", "dim"),
            ],
            title="consulta de bin",
            header=[ctx.ui.app_header("consulta de bin", "@lalaio1"), ""],
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
