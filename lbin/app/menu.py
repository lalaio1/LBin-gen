from __future__ import annotations

import time
from typing import Any, Dict, List, Optional

from ..ui.widgets import MenuItem
from ..version import CODENAME, REPO_URL, TAG, TAGLINE, TELEGRAM, VERSION
from .live import press_any
from .screens import get_screen


def menu_items(ctx: Any) -> List[MenuItem]:
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


def welcome_lines(ctx: Any, width: int, height: Optional[int] = None) -> List[str]:
    ui = ctx.ui
    height = height or ctx.term.size()[1]
    lines: List[str] = []
    lines.extend(ui.banner(width) if height >= 30 and width >= 78 else [ui.logo_line(width)])
    lines.append("")
    panel_width = min(width, 84)
    if height < 21:
        body = [
            ui.paint("  Bem-vindo ao LBin Gen %s." % TAG, fg=ui.role("text"), bold=True),
            "",
            "  " + ui.paint("Gera numeros de cartao de teste (Luhn valido) e", fg=ui.role("muted")),
            "  " + ui.paint("consulta BINs publicos para laboratorio.", fg=ui.role("muted")),
            "",
            "  " + ui.paint("permitido: ambientes proprios, testes autorizados", fg=ui.role("success")),
            "  " + ui.paint("proibido: fraude ou uso contra terceiros", fg=ui.role("danger")),
        ]
    else:
        body = [
            ui.paint("  Bem-vindo ao LBin Gen %s \"%s\"." % (TAG, CODENAME), fg=ui.role("text"), bold=True),
            "",
            "  " + ui.paint("Esta ferramenta gera numeros de cartao de teste", fg=ui.role("muted")),
            "  " + ui.paint("(Luhn valido), consulta BINs publicos e monta", fg=ui.role("muted")),
            "  " + ui.paint("massas de dados para laboratorio.", fg=ui.role("muted")),
            "",
            "  " + ui.paint("Uso permitido:", fg=ui.role("success"), bold=True),
            "  " + ui.paint("ambientes proprios, testes autorizados,", fg=ui.role("text")),
            "  " + ui.paint("sandbox de pagamento e estudos de seguranca.", fg=ui.role("text")),
            "",
            "  " + ui.paint("Uso proibido:", fg=ui.role("danger"), bold=True),
            "  " + ui.paint("fraude, compras reais ou qualquer atividade", fg=ui.role("text")),
            "  " + ui.paint("contra terceiros sem autorizacao escrita.", fg=ui.role("text")),
        ]
    block = ui.panel(
        body,
        title="aviso de responsabilidade",
        width=panel_width,
        color="primary",
    )
    pad = " " * max(0, (width - panel_width) // 2)
    lines.extend(pad + line for line in block)
    lines.append("")
    if len(lines) + 4 <= height:
        lines.append(
            ui.center(
                ui.paint("Telegram @%s · %s" % (TELEGRAM, REPO_URL.replace("https://", "")), fg=ui.role("dim")),
                width,
            )
        )
        lines.append("")
    lines.append(ui.footer_bar([("enter", "aceitar"), ("q", "encerrar")], "revise o aviso antes de continuar", width))
    return lines


def welcome(ctx: Any) -> bool:
    config = ctx.config
    profile = config.section("profile")
    if profile.get("accepted_terms"):
        return True
    width = ctx.term.size()[0]
    lines = welcome_lines(ctx, width)
    ctx.term.frame(lines, width, ctx.term.size()[1])
    if not ctx.term.interactive:
        return True
    if ctx.term.enter_raw():
        try:
            key = ctx.term.read_key(120)
        finally:
            ctx.term.leave_raw()
        if key in ("q", "esc", "ctrl-c"):
            return False
    config.set("profile", "accepted_terms", True)
    config.set("profile", "first_run", time.strftime("%Y-%m-%dT%H:%M:%S"))
    config.save()
    return True


def farewell(ctx: Any) -> None:
    ui = ctx.ui
    width = ctx.term.size()[0]
    lines: List[str] = []
    lines.append("")
    lines.extend(ui.banner(width) if ctx.term.size()[1] >= 30 else [ui.logo_line(width)])
    lines.append("")
    nickname = ctx.nickname()
    message = "sessao encerrada"
    if nickname:
        message = "ate a proxima, %s" % nickname
    lines.append(ui.center(ui.paint(message, fg=ui.role("primary"), bold=True), width))
    lines.append("")
    lines.append(ui.center(ui.paint("telegram @%s  ·  %s  ·  %s" % (TELEGRAM, TAG, TAGLINE), fg=ui.role("dim")), width))
    lines.append("")
    ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)


def cli_hint(ctx: Any) -> int:
    ui = ctx.ui
    term = ctx.term
    width = term.size()[0]
    term.write(ui.logo_line(width) + "\n")
    term.write("\n")
    term.write("  " + ui.paint("a interface interativa precisa de um terminal (TTY).", fg=ui.role("warn")) + "\n")
    term.write("\n")
    term.write("  " + ui.paint("no modo linha de comando:", fg=ui.role("dim")) + "\n")
    for line in (
        "lbin gen -b 411111 -n 10",
        "lbin bulk -b 606282 -n 5000 -o lote.txt",
        "lbin lookup 516230 --offline --json",
        "lbin validate 4111111111111111",
        "lbin combos 4111111111111111 --years 26-31 --out combos.txt",
        "lbin demo menu",
        "lbin --help",
    ):
        term.write("    " + ui.paint(line, fg=ui.role("text")) + "\n")
    term.write("\n")
    term.write("  " + ui.paint("contato: t.me/%s" % TELEGRAM, fg=ui.role("secondary")) + "\n")
    term.write("\n")
    return 0


def run(ctx: Any) -> int:
    ui = ctx.ui
    term = ctx.term
    if not welcome(ctx):
        return 0
    if not term.interactive:
        return cli_hint(ctx)
    term.begin()
    term.hide_cursor()
    try:
        while True:
            width, height = term.size()
            banner: List[str] = []
            if bool(ctx.config.get("ui", "banner", True)) and height >= 30 and width >= 78:
                banner = ui.banner(width)
            else:
                banner = [ui.logo_line(width)]
            header: List[str] = [ui.app_header("menu principal", time.strftime("%H:%M"), width), ""]
            header.extend(banner)
            header.append("")
            header.append(ui.section("o que vamos fazer", width))
            footer: List[str] = []
            note = "%s · %s" % (TAG, TAGLINE)
            choice = ctx.prompt.select(
                menu_items(ctx),
                title=None,
                header=header,
                footer=footer,
                hint=note,
                allow_back=True,
            )
            if choice is None or choice == "quit":
                if choice == "quit" and bool(ctx.config.get("ui", "confirm_exit", True)):
                    term.leave_raw()
                    confirmed = ctx.prompt.confirm("Encerrar a sessao", default=True)
                    if not confirmed:
                        continue
                return 0
            screen = get_screen(choice)
            if screen is None:
                continue
            term.leave_raw()
            term.show_cursor()
            try:
                screen(ctx)
            except KeyboardInterrupt:
                pass
            finally:
                ctx.config.save()
                ctx.reload_layout()
                term.hide_cursor()
    except KeyboardInterrupt:
        return 130
    finally:
        term.restore()
        farewell(ctx)
