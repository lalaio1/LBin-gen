from __future__ import annotations

import os
from typing import Any, Dict, List, Optional, Sequence, Tuple

from ...core.storage import human_int
from ...ui.theme import theme_names
from ...ui.widgets import MenuItem
from ..live import press_any
from ..views import view_settings
from . import form_screen

SECTIONS: Sequence[Tuple[str, str]] = (
    ("ui", "interface"),
    ("generator", "geracao"),
    ("output", "saida"),
    ("network", "rede e provedores"),
    ("profile", "perfil"),
    ("maintenance", "manutencao"),
)


def _fmt_bool(value: Any) -> str:
    return "ativado" if value else "desativado"


def _items(ctx: Any) -> List[MenuItem]:
    config = ctx.config
    ui = ctx.ui
    entries: List[MenuItem] = []
    for section, title in SECTIONS:
        entries.append(
            MenuItem("header:%s" % section, title.upper(), "", "", "dim", enabled=False)
        )
        if section == "ui":
            entries.append(MenuItem("ui.theme", "tema", "paleta de cores da interface", str(config.get("ui", "theme")), "primary"))
            entries.append(MenuItem("ui.glyphs", "glifos", "unicode ou ascii", str(config.get("ui", "glyphs")), "primary"))
            entries.append(MenuItem("ui.color", "cor", "auto, always ou never", str(config.get("ui", "color")), "primary"))
            entries.append(MenuItem("ui.animations", "animacoes", "spinners e transicoes", _fmt_bool(config.get("ui", "animations", True)), "secondary"))
            entries.append(MenuItem("ui.banner", "banner", "exibir arte no menu", _fmt_bool(config.get("ui", "banner", True)), "secondary"))
            entries.append(MenuItem("ui.confirm_exit", "confirmar saida", "pedir confirmacao ao sair", _fmt_bool(config.get("ui", "confirm_exit", True)), "secondary"))
        elif section == "generator":
            entries.append(MenuItem("generator.default_spec", "bin padrao", "prefixo usado por padrao", str(config.get("generator", "default_spec", "411111")), "primary"))
            entries.append(MenuItem("generator.count", "quantidade padrao", "tamanho do lote sugerido", human_int(int(config.get("generator", "count", 50))), "primary"))
            entries.append(MenuItem("generator.length", "comprimento padrao", "12 a 19 digitos", str(config.get("generator", "length", 16)), "primary"))
            entries.append(MenuItem("generator.span_years", "span de validade", "anos a frente", "%d anos" % int(config.get("generator", "span_years", 5)), "secondary"))
            entries.append(MenuItem("generator.with_expiry", "gerar validade", "mes e ano", _fmt_bool(config.get("generator", "with_expiry", True)), "secondary"))
            entries.append(MenuItem("generator.with_cvv", "gerar cvv", "codigo de seguranca", _fmt_bool(config.get("generator", "with_cvv", True)), "secondary"))
            entries.append(MenuItem("generator.with_holder", "gerar titular", "nome ficticio", _fmt_bool(config.get("generator", "with_holder", False)), "secondary"))
            entries.append(MenuItem("generator.auto_save", "salvar automatico", "gravar lote ao gerar", _fmt_bool(config.get("generator", "auto_save", True)), "secondary"))
        elif section == "output":
            entries.append(MenuItem("output.format", "formato padrao", "txt, csv, json, ...", str(config.get("output", "format", "txt")), "primary"))
            entries.append(MenuItem("output.template", "template da linha", "usado no formato txt", str(config.get("output", "template", "")), "secondary"))
            entries.append(MenuItem("output.dir", "diretorio de saida", str(ctx.config.output_dir()), "info"))
            entries.append(MenuItem("output.unique", "numeros unicos", "evitar repetidos no lote", _fmt_bool(config.get("output", "unique", True)), "secondary"))
        elif section == "network":
            providers = ", ".join(config.get("network", "providers", []) or []) or "nenhum"
            entries.append(MenuItem("network.providers", "provedores", "fontes de consulta de bin", providers, "primary"))
            entries.append(MenuItem("network.offline_first", "base local primeiro", "responde offline antes da rede", _fmt_bool(config.get("network", "offline_first", True)), "secondary"))
            entries.append(MenuItem("network.workers", "workers", "consultas em paralelo", str(config.get("network", "workers", 8)), "accent"))
            entries.append(MenuItem("network.rate", "limite de requisicoes", "por segundo", "%.1f/s" % float(config.get("network", "rate", 4.0)), "accent"))
            entries.append(MenuItem("network.timeout", "timeout", "segundos por requisicao", "%.1fs" % float(config.get("network", "timeout", 6.0)), "secondary"))
            entries.append(MenuItem("network.retries", "tentativas", "repeticoes por falha", str(config.get("network", "retries", 2)), "secondary"))
            proxies = list(config.get("network", "proxies", []) or [])
            entries.append(MenuItem("network.proxies", "proxies", "http/socks por requisicao", "%d cadastrado(s)" % len(proxies), "secondary"))
            key = str(config.get("network", "bincodes_key", "") or "")
            entries.append(MenuItem("network.bincodes_key", "chave bincodes", "provedor opcional", "definida" if key else "vazia", "dim"))
        elif section == "profile":
            entries.append(MenuItem("profile.nickname", "apelido", "usado nas saudações", str(config.get("profile", "nickname", "") or "—"), "primary"))
            entries.append(MenuItem("profile.telegram", "telegram", "contato do projeto", str(config.get("profile", "telegram", "") or "@lalaio1"), "secondary"))
        elif section == "maintenance":
            entries.append(MenuItem("utils.cache", "cache de bins", "consultas memorizadas", "%s entradas" % human_int(len(ctx.cache) if ctx.cache else 0), "accent"))
            entries.append(MenuItem("utils.paths", "caminhos do app", "config, cache e historico", "ver", "info"))
            entries.append(MenuItem("utils.reset", "restaurar padroes", "apaga a configuracao atual", "cuidado", "danger"))
    return entries


def _apply(ctx: Any, key: str) -> str:
    config = ctx.config
    prompt = ctx.prompt
    ui = ctx.ui
    if key == "ui.theme":
        names = [item[0] for item in theme_names()]
        value = prompt.select(
            [MenuItem(name, name, "", "", "primary") for name in names],
            title="escolha o tema",
            header=[ui.app_header("configuracoes · tema", "@lalaio1"), ""],
        )
        if value:
            ctx.apply_theme(value)
            config.save()
            return "tema alterado para %s" % value
    elif key == "ui.glyphs":
        value = prompt.read("Glifos (auto, unicode, ascii)", default=str(config.get("ui", "glyphs", "auto")),
                            validate=lambda item: None if item in ("auto", "unicode", "ascii") else "use auto, unicode ou ascii")
        config.set("ui", "glyphs", value)
        ctx.rebuild_ui()
        config.save()
        return "glifos: %s" % value
    elif key == "ui.color":
        value = prompt.read("Cor (auto, always, never)", default=str(config.get("ui", "color", "auto")),
                            validate=lambda item: None if item in ("auto", "always", "never") else "use auto, always ou never")
        config.set("ui", "color", value)
        ctx.rebuild_ui()
        config.save()
        return "cor: %s" % value
    elif key in ("ui.animations", "ui.banner", "ui.confirm_exit", "generator.with_expiry",
                 "generator.with_cvv", "generator.with_holder", "generator.auto_save",
                 "network.offline_first", "output.unique"):
        section, field = key.split(".", 1)
        value = config.toggle(section, field)
        config.save()
        return "%s: %s" % (field.replace("_", " "), _fmt_bool(value))
    elif key in ("generator.length", "generator.span_years", "generator.count", "network.workers", "network.retries"):
        section, field = key.split(".", 1)
        limits = {
            "generator.length": (12, 19),
            "generator.span_years": (1, 15),
            "generator.count": (1, 5000000),
            "network.workers": (1, 32),
            "network.retries": (0, 10),
        }[key]
        value = prompt.read_int(
            field.replace("_", " ").capitalize(),
            default=int(config.get(section, field, limits[0])),
            low=limits[0],
            high=limits[1],
        )
        if value is not None:
            config.set(section, field, value)
            config.save()
            return "%s: %d" % (field.replace("_", " "), value)
    elif key in ("network.rate", "network.timeout"):
        section, field = key.split(".", 1)
        default = float(config.get(section, field, 4.0))
        raw = prompt.read("%s" % field.capitalize(), default="%.1f" % default)
        try:
            value = float(raw.replace(",", "."))
        except ValueError:
            return "valor invalido"
        config.set(section, field, value)
        config.save()
        return "%s: %.1f" % (field, value)
    elif key in ("generator.default_spec", "output.format", "output.template", "output.dir",
                 "profile.nickname", "profile.telegram", "network.bincodes_key"):
        section, field = key.split(".", 1)
        current = config.get(section, field, "")
        value = prompt.read(field.replace("_", " ").capitalize(), default=str(current), allow_empty=True)
        config.set(section, field, value)
        config.save()
        return "%s atualizado" % field.replace("_", " ")
    elif key == "network.providers":
        chosen = prompt.multi_select(
            [
                MenuItem("binlist", "binlist.net", "gratuito, sem chave", "", "primary"),
                MenuItem("bincodes", "bincodes.com", "requer chave de api", "", "secondary"),
            ],
            title="provedores online",
            header=[ui.app_header("configuracoes · provedores", "@lalaio1"), ""],
        )
        if chosen is not None:
            if not chosen:
                chosen = ["binlist"]
            config.set("network", "providers", chosen)
            config.save()
            return "provedores: %s" % ", ".join(chosen)
    elif key == "network.proxies":
        raw = prompt.read(
            "Proxies (separados por virgula)",
            default=",".join(config.get("network", "proxies", []) or []),
            allow_empty=True,
            hint="(ex: http://127.0.0.1:8080, socks5://10.0.0.1:1080)",
        )
        proxies = [item.strip() for item in raw.replace(";", ",").split(",") if item.strip()]
        config.set("network", "proxies", proxies)
        config.save()
        return "%d proxies salvos" % len(proxies)
    elif key == "utils.cache":
        if ctx.cache is None:
            return "cache indisponivel neste modo"
        if prompt.confirm("Limpar o cache de consultas de BIN", default=False):
            size = ctx.cache.clear()
            return "%d entradas removidas" % size
    elif key == "utils.paths":
        paths = ctx.paths
        form_screen(
            ctx,
            "caminhos do aplicativo",
            pairs=[
                ("config", str(paths.config_file)),
                ("cache", str(paths.bin_cache)),
                ("historico", str(paths.history_file)),
                ("saida", str(ctx.output_dir())),
            ],
            note="defina LBIN_HOME para mover tudo para outro diretorio",
        )
        press_any(ctx)
        return ""
    elif key == "utils.reset":
        if prompt.confirm("Restaurar todas as configuracoes padrao", default=False):
            from ...core.storage import DEFAULT_CONFIG
            import json as json_module

            ctx.config.data = json_module.loads(json_module.dumps(DEFAULT_CONFIG))
            ctx.config.save()
            ctx.rebuild_ui()
            return "configuracoes restauradas"
    return ""


def run(ctx: Any) -> None:
    ui = ctx.ui
    note = ""
    selected = 0
    while True:
        items = _items(ctx)
        width = ctx.term.size()[0]
        state = {
            "width": width,
            "height": ctx.term.size()[1],
            "items": items,
            "selected": selected,
            "title": "preferencias",
            "path": "configuracoes",
            "status": "salvo automaticamente",
            "note": note,
            "hints": [("ENTER", "alterar"), ("↑↓", "navegar"), ("Q", "voltar")],
            "footer_note": str(ctx.paths.config_file),
        }
        ctx.term.frame(view_settings(ui, state), width, ctx.term.size()[1])
        key = ctx.term.read_key(0.4)
        if key in ("q", "esc"):
            return
        if key == "up":
            selected = (selected - 1) % len(items)
        elif key == "down":
            selected = (selected + 1) % len(items)
        elif key == "enter":
            item = items[selected]
            if item.key.startswith("header:"):
                continue
            ctx.term.leave_raw()
            try:
                note = _apply(ctx, item.key)
            except KeyboardInterrupt:
                note = "alteracao cancelada"
            finally:
                if ctx.term.interactive:
                    ctx.term.enter_raw()
            ctx.reload_layout()
