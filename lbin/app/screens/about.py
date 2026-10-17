from __future__ import annotations

from typing import Any, Dict, List

from ...version import __version__
from ...ui.widgets import MenuItem
from ..doctor import checks, self_test, summary_line
from ..live import press_any
from ..views import view_about, view_doctor


def run(ctx: Any) -> None:
    ui = ctx.ui
    width = ctx.term.size()[0]
    if not ctx.term.interactive:
        lines = view_about(
            ui,
            {
                "width": width,
                "height": ctx.term.size()[1],
                "hints": [("ENTER", "acoes"), ("Q", "voltar")],
                "status": "v" + __version__,
            },
        )
        ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
        return
    while True:
        lines = view_about(
            ui,
            {
                "width": width,
                "height": ctx.term.size()[1],
                "hints": [("ENTER", "acoes"), ("Q", "voltar")],
                "status": "v" + __version__,
            },
        )
        ctx.term.frame(lines, width, ctx.term.size()[1], pad=False)
        press_any(ctx, "pressione qualquer tecla para as opcoes")
        choice = ctx.prompt.select(
            [
                MenuItem("diagnostico", "Diagnostico do ambiente", "terminal, cores, rede e caminhos", "", "primary"),
                MenuItem("autoteste", "Autoteste do nucleo", "luhn, bandeiras, geracao e consulta offline", "", "secondary"),
                MenuItem("telegram", "Falar com o autor", "t.me/lalaio1", "", "accent"),
                MenuItem("back", "Voltar", "", "", "dim"),
            ],
            title="sobre",
            header=[ui.app_header("sobre", "@lalaio1"), ""],
        )
        if choice in (None, "back"):
            return
        if choice == "telegram":
            from ...version import TELEGRAM_URL

            body = [ui.app_header("contato", "@lalaio1", width), "", ui.section("canais de suporte", width), ""]
            body.extend(
                ui.kv_block(
                    [
                        ("telegram", "@lalaio1"),
                        ("url", TELEGRAM_URL),
                        ("repositorio", "github.com/lalaio1/LBin-gen"),
                        ("bugs", "abra uma issue no repositorio"),
                    ],
                    width,
                )
            )
            ctx.term.frame(body, width, ctx.term.size()[1], pad=False)
            ctx.term.write("\n")
            press_any(ctx)
        elif choice == "diagnostico":
            rows = checks(ctx)
            body = view_doctor(ui, {"width": width, "height": ctx.term.size()[1], "checks": rows, "note": summary_line(ctx)})
            ctx.term.frame(body, width, ctx.term.size()[1], pad=False)
            ctx.term.write("\n")
            press_any(ctx)
        elif choice == "autoteste":
            rows = self_test(ctx)
            body = view_doctor(
                ui,
                {"width": width, "height": ctx.term.size()[1], "checks": rows, "note": "todos os componentes responderam"},
            )
            ctx.term.frame(body, width, ctx.term.size()[1], pad=False)
            ctx.term.write("\n")
            press_any(ctx)


def doctor_lines(ctx: Any) -> List[str]:
    return ["%s: %s (%s)" % row for row in checks(ctx)]


def doctor_data(ctx: Any) -> Dict[str, Any]:
    return {"checks": checks(ctx), "selftest": self_test(ctx), "summary": summary_line(ctx)}
