from __future__ import annotations

import time
from pathlib import Path
from typing import Any, Dict, List, Optional

from ...core import exporters as exporters_mod
from ...core.storage import human_bytes, human_int
from ...ui.widgets import MenuItem
from ..live import press_any
from ..views import view_library
from . import form_screen


def _file_item(entry: Any) -> MenuItem:
    return MenuItem(
        key=str(entry.path),
        label=entry.name,
        hint="%s · %s linhas · %s" % (human_bytes(entry.size), human_int(entry.lines), entry.when),
        badge=None if entry.lines else None,
        color="primary",
    )


def preview(ctx: Any, path: Path) -> None:
    ui = ctx.ui
    width = ctx.term.size()[0]
    lines: List[str] = []
    try:
        with path.open("r", encoding="utf-8", errors="replace") as handle:
            for _ in range(14):
                raw = handle.readline()
                if not raw:
                    break
                lines.append(raw.rstrip("\n"))
    except OSError as error:
        form_screen(ctx, "arquivo", note=str(error), color="error")
        press_any(ctx)
        return
    body = [ui.app_header("amostra", path.name, width), "", ui.section("primeiras linhas", width), ""]
    for line in lines:
        body.append("  " + ui.paint(line[: width - 4], fg=ui.role("muted")))
    if not lines:
        body.append("  " + ui.paint("arquivo vazio", fg=ui.role("dim")))
    body.append("")
    body.extend(
        ui.kv_block(
            [
                ("arquivo", str(path)),
                ("tamanho", human_bytes(path.stat().st_size)),
                ("modificado", time.strftime("%d/%m/%Y %H:%M", time.localtime(path.stat().st_mtime))),
            ],
            width,
        )
    )
    ctx.term.frame(body, width, ctx.term.size()[1], pad=False)
    ctx.term.write("\n")
    press_any(ctx)


def convert(ctx: Any, path: Path) -> None:
    ui = ctx.ui
    width = ctx.term.size()[0]
    formats = exporters_mod.format_keys()
    target = ctx.prompt.read(
        "Formato de destino (%s)" % ", ".join(formats),
        default="json",
        validate=lambda value: None if value in formats else "formatos: %s" % ", ".join(formats),
    )
    default_name = "%s.%s" % (path.stem, exporters_mod.extension_for(target))
    name = ctx.prompt.read("Nome do arquivo", default=default_name)
    output = ctx.output_dir() / name
    fmt = exporters_mod.resolve_format(target)
    count = 0
    with ctx.writer(output, target) as writer:
        for record in exporters_mod.read_records(str(path)):
            writer.write(record)
            count += 1
    lines = [ui.app_header("conversao", "concluida", width), ""]
    lines.extend(ui.notice("%s registros convertidos para %s" % (human_int(count), fmt.label), "success", width))
    lines.append("")
    lines.extend(
        ui.kv_block(
            [
                ("origem", str(path)),
                ("destino", str(output)),
                ("tamanho", human_bytes(writer.bytes)),
            ],
            width,
        )
    )
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
    ctx.term.write("\n")
    press_any(ctx)


def file_actions(ctx: Any, path: Path) -> None:
    while True:
        choice = ctx.prompt.select(
            [
                MenuItem("preview", "Ver amostra", "primeiras linhas do arquivo", "", "primary"),
                MenuItem("convert", "Converter formato", "txt, csv, json, jsonl, js, sql, xml, html", "", "secondary"),
                MenuItem("reveal", "Copiar caminho", str(path), "", "info"),
                MenuItem("delete", "Excluir arquivo", "remove definitivamente", "", "danger"),
                MenuItem("back", "Voltar", "", "", "dim"),
            ],
            title=path.name,
            header=[ctx.ui.app_header("arquivos", "@lalaio1"), ""],
        )
        if choice in (None, "back"):
            return
        if choice == "preview":
            preview(ctx, path)
        elif choice == "convert":
            convert(ctx, path)
        elif choice == "reveal":
            form_screen(ctx, "caminho do arquivo", pairs=[("arquivo", str(path))], note="copie o caminho acima", color="info")
            press_any(ctx)
        elif choice == "delete":
            if ctx.prompt.confirm("Excluir %s" % path.name, default=False):
                try:
                    path.unlink()
                except OSError as error:
                    form_screen(ctx, "erro", note=str(error), color="error")
                    press_any(ctx)
                return


def run(ctx: Any) -> None:
    while True:
        entries = ctx.outputs()
        totals = ctx.history.totals()
        width = ctx.term.size()[0]
        state = {
            "width": width,
            "height": ctx.term.size()[1],
            "entries": entries,
            "totals": totals,
            "dir": ctx.output_dir().name,
            "path": "biblioteca",
            "status": "%d arquivos" % len(entries),
            "hints": [("ENTER", "abrir"), ("R", "atualizar"), ("Q", "voltar")],
            "note": "",
        }
        ctx.term.frame(view_library(ctx.ui, state), width, ctx.term.size()[1])
        key = ctx.term.read_key(0.4)
        if key in ("q", "esc"):
            return
        if key == "r":
            continue
        if key in ("enter", "right", None):
            break

    items: List[MenuItem] = [_file_item(entry) for entry in entries]
    items.append(MenuItem("clean", "Limpar historico de sessoes", "apaga estatisticas locais", "", "warn"))
    items.append(MenuItem("folder", "Abrir pasta de saida", str(ctx.output_dir()), "", "info"))
    items.append(MenuItem("back", "Voltar ao menu", "", "", "dim"))
    if not entries:
        items.insert(0, MenuItem("empty", "Nenhum arquivo ainda", "gere um lote para popular a pasta", "", "dim", enabled=False))
    choice = ctx.prompt.select(
        items,
        title="biblioteca de saida",
        header=[ctx.ui.app_header("biblioteca", "@lalaio1"), ""],
    )
    if choice in (None, "back", "empty"):
        return
    if choice == "clean":
        if ctx.prompt.confirm("Limpar todo o historico de estatisticas", default=False):
            ctx.history.clear()
            form_screen(ctx, "historico", note="historico limpo", color="success")
            press_any(ctx)
        return
    if choice == "folder":
        form_screen(ctx, "pasta de saida", pairs=[("caminho", str(ctx.output_dir()))], note="abrir no gerenciador de arquivos", color="info")
        press_any(ctx)
        return
    path = Path(choice)
    if path.exists():
        file_actions(ctx, path)
