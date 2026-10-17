from __future__ import annotations

import argparse
import json
import os
import sys
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

from .. import version as version_mod
from ..core import brands as brands_mod
from ..core import combos as combos_mod
from ..core import exporters as exporters_mod
from ..core import generator as generator_mod
from ..core import validator as validator_mod
from ..core.storage import human_bytes, human_duration, human_int, list_outputs
from ..ui.ansi import strip
from ..ui.widgets import Tile
from .context import build_context
from .jobs import BulkJob, EnrichJob
from .views import bar_compact

__all__ = ["build_parser", "main"]

EPILOG = """
exemplos:
  lbin gen -b 411111 -n 20 --format csv
  lbin gen -b 4571xxxxxxxxxxxx -n 500 --online --out lote.json --format json
  lbin bulk -b 606282 -n 50000 -o lote.txt
  lbin lookup 45717360 516230
  lbin validate 4111111111111111
  lbin validate --file lote.txt --json
  lbin combos 4111111111111111 --years 26-31 --cvv-mode range --out combos.txt
  lbin export lote.txt --format html
  lbin demo generate

contato: https://t.me/lalaio1
"""


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="lbin",
        description="LBin Gen %s - %s" % (version_mod.VERSION, version_mod.TAGLINE),
        epilog=EPILOG,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("--version", action="version", version="LBin Gen %s (%s)" % (version_mod.VERSION, version_mod.CODENAME))
    parser.add_argument("--color", choices=("auto", "always", "never"), default=None, help="controle de cores")
    parser.add_argument("--ascii", action="store_true", help="forcar glifos ascii")
    parser.add_argument("--no-anim", action="store_true", help="desativar animacoes")
    parser.add_argument("--width", type=int, default=None, help="forcar largura da interface")
    parser.add_argument("--yes", action="store_true", help="aceitar automaticamente os avisos")
    sub = parser.add_subparsers(dest="command")

    sub.add_parser("menu", help="abrir a interface interativa (padrao)")
    sub.add_parser("about", help="creditos e informacoes do projeto")

    gen = sub.add_parser("gen", help="gerar cartoes (com consulta opcional de BIN)")
    _add_generation_flags(gen)
    gen.add_argument("--online", action="store_true", help="consultar BINs nos provedores")
    gen.add_argument("--workers", "-w", type=int, default=None, help="workers de consulta")
    gen.add_argument("--quiet", "-q", action="store_true", help="sem barra de progresso")

    bulk = sub.add_parser("bulk", help="geracao offline em alta velocidade")
    _add_generation_flags(bulk)
    bulk.add_argument("--quiet", "-q", action="store_true", help="sem barra de progresso")

    lookup = sub.add_parser("lookup", help="consultar BIN(s)")
    lookup.add_argument("bins", nargs="+", help="BINs ou numeros de cartao")
    lookup.add_argument("--offline", action="store_true", help="usar apenas a base local")
    lookup.add_argument("--json", action="store_true", help="saida em json")
    lookup.add_argument("--workers", "-w", type=int, default=8)

    validate = sub.add_parser("validate", help="validar numeros de cartao")
    validate.add_argument("numbers", nargs="*", help="numeros para validar")
    validate.add_argument("--file", "-f", default=None, help="arquivo com numeros")
    validate.add_argument("--json", action="store_true", help="saida em json")
    validate.add_argument("--only-valid", action="store_true", help="mostrar apenas validos")

    combos = sub.add_parser("combos", help="gerar combinacoes de validade e CVV")
    combos.add_argument("cards", nargs="*", help="cartoes, BINs ou numeros")
    combos.add_argument("--file", "-f", default=None, help="arquivo com cartoes")
    combos.add_argument("--months", default="1-12", help="meses (ex: 1-12)")
    combos.add_argument("--years", default=None, help="anos (ex: 26-31 ou 2026-2031)")
    combos.add_argument("--cvv-mode", choices=("range", "sample"), default="range")
    combos.add_argument("--cvv-from", type=int, default=0)
    combos.add_argument("--cvv-to", type=int, default=None)
    combos.add_argument("--cvv-len", type=int, default=3)
    combos.add_argument("--sample", type=int, default=5, help="amostras por par (modo sample)")
    combos.add_argument("--template", default=combos_mod.DEFAULT_TEMPLATE)
    combos.add_argument("--format", "-F", default="txt")
    combos.add_argument("--out", "-o", default=None)
    combos.add_argument("--quiet", "-q", action="store_true")

    library = sub.add_parser("library", help="listar arquivos de saida")
    library.add_argument("--dir", default=None, help="diretorio de saida")
    library.add_argument("--json", action="store_true")

    export = sub.add_parser("export", help="converter um arquivo de saida")
    export.add_argument("source", help="arquivo de origem")
    export.add_argument("--format", "-F", default="json")
    export.add_argument("--out", "-o", default=None)

    doctor = sub.add_parser("doctor", help="diagnostico do ambiente")
    doctor.add_argument("--json", action="store_true")

    demo = sub.add_parser("demo", help="renderizar uma tela com dados ficticios")
    demo.add_argument("screen", nargs="?", default="menu")
    demo.add_argument("--height", type=int, default=None)
    demo.add_argument("--width", type=int, default=argparse.SUPPRESS)
    demo.add_argument("--list", action="store_true", help="listar telas disponiveis")
    return parser


def _add_generation_flags(parser: argparse.ArgumentParser) -> None:
    parser.add_argument("--bin", "-b", dest="spec", default=None, help="BIN ou prefixo (x como coringa)")
    parser.add_argument("--count", "-n", type=int, default=None, help="quantidade")
    parser.add_argument("--length", "-l", type=int, default=None, help="comprimento")
    parser.add_argument("--brand", default=None, help="bandeira (visa, mastercard, elo, ...)")
    parser.add_argument("--format", "-F", default=None, help="txt, csv, json, jsonl, js, sql, xml, html")
    parser.add_argument("--out", "-o", default=None, help="arquivo de saida (padrao: stdout)")
    parser.add_argument("--seed", type=int, default=None, help="semente para reprodutibilidade")
    parser.add_argument("--no-expiry", action="store_true", help="nao gerar validade")
    parser.add_argument("--no-cvv", action="store_true", help="nao gerar cvv")
    parser.add_argument("--holder", action="store_true", help="gerar titular ficticio")


def _tile_line(ctx: Any, tiles: Sequence[Tile], width: int) -> List[str]:
    return ctx.ui.tiles(tiles, width, per_row=4 if width >= 92 else 2)


def _stdout_write(text: str) -> None:
    try:
        sys.stdout.write(text)
    except BrokenPipeError:
        raise SystemExit(0)


class _StreamEmitter:
    """Escreve registros em stdout mantendo o ultimo item do modo json sem virgula."""

    def __init__(self, fmt: Any, template: str) -> None:
        self.fmt = fmt
        self.template = template
        self.pending: Optional[str] = None
        self.stream = fmt.key == "json"

    def emit(self, records: Iterable[Dict[str, Any]]) -> int:
        count = 0
        buffer: List[str] = []
        for record in records:
            text = exporters_mod.render(self.fmt, record, self.template)
            if self.stream:
                if self.pending is not None:
                    buffer.append(self.pending)
                self.pending = text
            else:
                buffer.append(text)
            count += 1
        if buffer:
            _stdout_write("".join(buffer))
        return count

    def close(self) -> None:
        if self.pending is not None:
            _stdout_write(self.pending.rstrip("\n").rstrip(",") + "\n")
            self.pending = None


def _progress(ctx: Any, job: Any, quiet: bool, prefix: str = "gerando") -> None:
    if quiet or not sys.stderr.isatty():
        return
    last = 0.0
    while not job.finished:
        now = time.monotonic()
        if now - last > 0.12:
            last = now
            stats = job.snapshot()
            done = stats["generated"]
            sys.stderr.write(
                "\r%s %s cartoes · %.0f/s · %.1fs   "
                % (prefix, human_int(done), stats["rate"], stats["elapsed"])
            )
            sys.stderr.flush()
        time.sleep(0.03)
    sys.stderr.write("\r" + " " * 60 + "\r")
    sys.stderr.flush()


def _emit_cards(
    records: Sequence[Dict[str, Any]],
    fmt: Any,
    template: str,
    out: Optional[str],
    writer: Any = None,
    emitter: Any = None,
) -> int:
    count = 0
    if writer is not None:
        for record in records:
            writer.write(record)
            count += 1
        return count
    if emitter is not None:
        return emitter.emit(records)
    buffer: List[str] = []
    for record in records:
        buffer.append(exporters_mod.render(fmt, record, template))
        count += 1
    _stdout_write("".join(buffer))
    return count


def cmd_gen(ctx: Any, args: argparse.Namespace, force_offline: bool = False) -> int:
    config = ctx.config
    spec = args.spec if args.spec is not None else str(config.get("generator", "default_spec", "411111"))
    count = int(args.count if args.count is not None else config.get("generator", "count", 50))
    length = args.length if args.length is not None else None
    brand = args.brand
    if brand and brands_mod.by_name(brand) is None:
        sys.stderr.write("bandeira desconhecida: %s\n" % brand)
        return 2
    if brand:
        brand = brands_mod.by_name(brand).key
    fmt = exporters_mod.resolve_format(args.format or config.get("output", "format", "txt"))
    template = str(config.get("output", "template", ""))
    online = bool(getattr(args, "online", False)) and not force_offline
    workers = int(getattr(args, "workers", None) or config.get("network", "workers", 8))
    quiet = bool(getattr(args, "quiet", False))
    with_expiry = not getattr(args, "no_expiry", False)
    with_cvv = not getattr(args, "no_cvv", False)

    writer = None
    emitter = None
    if args.out:
        writer = ctx.writer(Path(args.out).expanduser(), fmt.key, {"count": count, "spec": spec})
        writer.template = template
        writer.__enter__()
    else:
        _stdout_write(exporters_mod.header(fmt, {"version": version_mod.VERSION}, template))
        emitter = _StreamEmitter(fmt, template)

    if online:
        job = EnrichJob(
            spec=spec,
            count=count,
            resolver=ctx.resolver,
            workers=workers,
            allow_network=True,
            length=length,
            brand=brand,
            with_expiry=with_expiry,
            with_cvv=with_cvv,
            with_holder=bool(getattr(args, "holder", False)),
            seed=args.seed,
        )
    else:
        job = BulkJob(
            spec=spec,
            count=count,
            length=length,
            brand=brand,
            with_expiry=with_expiry,
            with_cvv=with_cvv,
            with_holder=bool(getattr(args, "holder", False)),
            seed=args.seed,
        )
    job.start()
    total = 0
    try:
        while not job.finished or not job.results.empty():
            batch = job.drain(2048)
            if batch:
                records = [card.as_dict() if hasattr(card, "as_dict") else card for card in batch]
                total += _emit_cards(records, fmt, template, args.out, writer, emitter)
            else:
                time.sleep(0.01)
            if not quiet:
                _progress(ctx, job, quiet)
    except KeyboardInterrupt:
        job.stop()
        sys.stderr.write("\ninterrompido pelo operador\n")
    finally:
        if writer is not None:
            writer.__exit__(None, None, None)
        else:
            if emitter is not None:
                emitter.close()
            _stdout_write(exporters_mod.footer(fmt, {"version": version_mod.VERSION}))
    stats = job.snapshot()
    if writer is not None:
        ctx.save_session(
            "gen-online" if online else "gen-cli",
            stats.get("generated", 0),
            stats.get("elapsed", 0.0),
            stats.get("brands", {}),
            str(Path(args.out).expanduser()),
        )
    if not quiet and args.out:
        sys.stderr.write(
            "%s cartoes em %s (%.0f/s) -> %s [%s]\n"
            % (
                human_int(total),
                human_duration(stats.get("elapsed", 0.0)),
                stats.get("rate", 0.0),
                args.out,
                fmt.label,
            )
        )
    return 0


def cmd_lookup(ctx: Any, args: argparse.Namespace) -> int:
    results = []
    started = time.monotonic()
    for value in args.bins:
        info = ctx.resolver.resolve(value, allow_network=not args.offline)
        results.append(info)
    if args.json:
        _stdout_write(json.dumps([info.as_dict() for info in results], indent=2, ensure_ascii=False) + "\n")
        return 0
    width = max(72, min(120, ctx.term.size()[0]))
    ui = ctx.ui
    lines: List[str] = [ui.app_header("consulta de bin", "%d alvos" % len(results), width), ""]
    rows = []
    for info in results:
        rows.append(
            [
                ui.paint(info.bin, fg=ui.role("primary")),
                info.brand_label or info.scheme or "—",
                info.bank or "—",
                ("%s %s" % (info.country_code, info.country)).strip() or "—",
                info.kind_label,
                info.category_label,
                info.source,
            ]
        )
    lines.extend(
        ui.table(["bin", "bandeira", "banco", "pais", "tipo", "categoria", "origem"], rows, width=width)
    )
    lines.append("")
    lines.append(ui.paint("  consulta concluida em %.2fs" % (time.monotonic() - started), fg=ui.role("dim")))
    for line in lines:
        _stdout_write(line + "\n")
    return 0


def cmd_validate(ctx: Any, args: argparse.Namespace) -> int:
    numbers: List[str] = list(args.numbers or [])
    if args.file:
        path = Path(args.file).expanduser()
        if not path.exists():
            sys.stderr.write("arquivo nao encontrado: %s\n" % path)
            return 2
        with path.open("r", encoding="utf-8", errors="replace") as handle:
            for line in handle:
                numbers.extend(validator_mod.extract_numbers(line))
    if not numbers and not sys.stdin.isatty():
        for line in sys.stdin:
            numbers.extend(validator_mod.extract_numbers(line))
    reports = [validator_mod.inspect(number) for number in numbers]
    if args.json:
        _stdout_write(
            json.dumps([report.as_dict() for report in reports], indent=2, ensure_ascii=False) + "\n"
        )
    else:
        width = max(72, min(120, ctx.term.size()[0]))
        ui = ctx.ui
        if len(reports) == 1:
            report = reports[0]
            lines = [ui.app_header("validador", report.brand_name, width), ""]
            lines.append(
                "  "
                + ui.badge("VALIDO" if report.ok else "INVALIDO", "success" if report.ok else "danger", solid=True)
                + "  "
                + ui.paint(report.digits, fg=ui.role("text"), bold=True)
            )
            lines.append("")
            lines.extend(
                ui.kv_block(
                    [
                        ("bandeira", report.brand_name),
                        ("bin", report.digits[:6]),
                        ("comprimento", str(report.length)),
                        ("luhn", "ok" if report.luhn_ok else "falhou"),
                        ("observacoes", "; ".join(f.message for f in report.findings) or "nenhuma"),
                    ],
                    width,
                )
            )
            for line in lines:
                _stdout_write(line + "\n")
        else:
            summary = validator_mod.summarize(reports)
            lines = [ui.app_header("validador", "%s numeros" % human_int(len(reports)), width), ""]
            lines.extend(
                _tile_line(
                    ctx,
                    [
                        Tile("TOTAL", human_int(summary["total"]), "numeros", "primary"),
                        Tile("VALIDOS", human_int(summary["valid"]), "%.1f%%" % summary["rate"], "success"),
                        Tile("INVALIDOS", human_int(summary["invalid"]), "luhn/tamanho", "danger"),
                    ],
                    width,
                )
            )
            lines.append("")
            lines.extend(bar_compact(ui, sorted(summary["brands"].items(), key=lambda item: -item[1]), width))
            lines.append("")
            rows = []
            for report in reports:
                if args.only_valid and not report.ok:
                    continue
                rows.append(
                    [
                        ui.paint(ui.glyphs.check if report.ok else ui.glyphs.cross_mark, fg=ui.role("success" if report.ok else "danger")),
                        report.digits,
                        report.brand_name,
                        str(report.length),
                        "ok" if report.luhn_ok else "falhou",
                    ]
                )
            lines.extend(ui.table(["", "numero", "bandeira", "len", "luhn"], rows[:500], width=width, zebra=True))
            for line in lines:
                _stdout_write(line + "\n")
    return 0 if all(report.ok for report in reports) else 1


def cmd_combos(ctx: Any, args: argparse.Namespace) -> int:
    cards: List[str] = []
    for value in args.cards or []:
        digits = "".join(ch for ch in value if ch.isdigit())
        if len(digits) >= 6:
            cards.append(generator_mod.generate_number(digits, 15 if digits.startswith(("34", "37")) else 16) if len(digits) < 12 else digits)
    if args.file:
        path = Path(args.file).expanduser()
        if not path.exists():
            sys.stderr.write("arquivo nao encontrado: %s\n" % path)
            return 2
        with path.open("r", encoding="utf-8", errors="replace") as handle:
            for line in handle:
                for chunk in line.replace(",", " ").split():
                    digits = "".join(ch for ch in chunk if ch.isdigit())
                    if len(digits) >= 6:
                        cards.append(
                            generator_mod.generate_number(digits, 15 if digits.startswith(("34", "37")) else 16)
                            if len(digits) < 12
                            else digits
                        )
    if not cards:
        sys.stderr.write("informe ao menos um cartao ou BIN\n")
        return 2
    now = time.localtime()
    years_raw = args.years or "%d-%d" % (now.tm_year % 100, (now.tm_year + 5) % 100)
    spec = combos_mod.ComboSpec(
        numbers=cards,
        months=combos_mod.parse_months(args.months),
        years=combos_mod.parse_years(years_raw),
        cvc_length=args.cvv_len,
        cvc_from=args.cvv_from,
        cvc_to=args.cvv_to if args.cvv_to is not None else 10 ** args.cvv_len - 1,
        cvc_mode="random" if args.cvv_mode == "sample" else "range",
        sample=args.sample,
        seed=int(time.time()),
        template=args.template,
    )
    total = combos_mod.total(spec)
    fmt = exporters_mod.resolve_format(args.format)
    writer = None
    emitter = None
    if args.out:
        writer = ctx.writer(Path(args.out).expanduser(), fmt.key, {"count": total})
        writer.template = args.template
        writer.__enter__()
    else:
        _stdout_write(exporters_mod.header(fmt, {"version": version_mod.VERSION}, args.template))
        emitter = _StreamEmitter(fmt, args.template)
    produced = 0
    started = time.monotonic()
    pending: List[Dict[str, Any]] = []
    try:
        for record in combos_mod.iter_records(spec):
            if writer is not None:
                writer.write(record)
            else:
                pending.append(record)
                if len(pending) >= 512:
                    emitter.emit(pending)
                    pending.clear()
            produced += 1
            if not args.quiet and args.out and produced % 5000 == 0:
                sys.stderr.write("\r%s / %s combinacoes" % (human_int(produced), human_int(total)))
                sys.stderr.flush()
    except KeyboardInterrupt:
        sys.stderr.write("\ninterrompido pelo operador\n")
    finally:
        if writer is not None:
            writer.__exit__(None, None, None)
        else:
            if pending:
                emitter.emit(pending)
                pending.clear()
            emitter.close()
            _stdout_write(exporters_mod.footer(fmt, {"version": version_mod.VERSION}))
    if args.out:
        if not args.quiet:
            sys.stderr.write("\r%s" % (" " * 50) + "\r")
        sys.stderr.write(
            "%s combinacoes em %s -> %s\n"
            % (human_int(produced), human_duration(time.monotonic() - started), args.out)
        )
    ctx.save_session("combos-cli", produced, time.monotonic() - started, {}, str(args.out or ""))
    return 0


def cmd_library(ctx: Any, args: argparse.Namespace) -> int:
    directory = Path(args.dir).expanduser() if args.dir else ctx.output_dir()
    entries = list_outputs(directory)
    if args.json:
        payload = [
            {
                "name": entry.name,
                "path": str(entry.path),
                "size": entry.size,
                "lines": entry.lines,
                "modified": entry.mtime,
            }
            for entry in entries
        ]
        _stdout_write(json.dumps(payload, indent=2, ensure_ascii=False) + "\n")
        return 0
    ui = ctx.ui
    width = max(72, min(120, ctx.term.size()[0]))
    totals = ctx.history.totals()
    lines = [ui.app_header("biblioteca", str(directory), width), ""]
    lines.extend(
        _tile_line(
            ctx,
            [
                Tile("CARTÕES", human_int(totals["cards"]), "no historico", "primary"),
                Tile("SESSOES", human_int(totals["sessions"]), "registradas", "secondary"),
                Tile("ARQUIVOS", human_int(len(entries)), "na pasta", "info"),
                Tile("MEDIA", "%.0f/s" % totals["rate"], "velocidade", "accent"),
            ],
            width,
        )
    )
    lines.append("")
    lines.extend(
        ui.table(
            ["arquivo", "tamanho", "linhas", "modificado"],
            [
                [
                    entry.name,
                    human_bytes(entry.size),
                    human_int(entry.lines),
                    time.strftime("%d/%m/%Y %H:%M", time.localtime(entry.mtime)),
                ]
                for entry in entries
            ],
            width=width,
            zebra=True,
        )
    )
    lines.append("")
    lines.extend(bar_compact(ui, sorted(totals["brands"].items(), key=lambda item: -item[1]), width))
    for line in lines:
        _stdout_write(line + "\n")
    return 0


def cmd_export(ctx: Any, args: argparse.Namespace) -> int:
    source = Path(args.source).expanduser()
    if not source.exists():
        sys.stderr.write("arquivo nao encontrado: %s\n" % source)
        return 2
    fmt = exporters_mod.resolve_format(args.format)
    target = Path(args.out).expanduser() if args.out else source.with_suffix("." + fmt.extension)
    count = 0
    with ctx.writer(target, fmt.key) as writer:
        for record in exporters_mod.read_records(str(source)):
            writer.write(record)
            count += 1
    sys.stderr.write("%s registros -> %s (%s, %s)\n" % (human_int(count), target, fmt.label, human_bytes(writer.bytes)))
    return 0


def cmd_doctor(ctx: Any, args: argparse.Namespace) -> int:
    from .doctor import checks, self_test, summary_line

    rows = checks(ctx) + self_test(ctx)
    if args.json:
        _stdout_write(json.dumps({"summary": summary_line(ctx), "checks": rows}, indent=2, ensure_ascii=False) + "\n")
        return 0
    ui = ctx.ui
    width = max(72, min(120, ctx.term.size()[0]))
    lines = [ui.app_header("diagnostico", "ambiente", width), ""]
    lines.extend(
        ui.table(
            ["item", "valor", "situacao"],
            [[name, value, status] for name, value, status in rows],
            width=width,
            zebra=True,
        )
    )
    lines.append("")
    lines.append(ui.paint("  " + summary_line(ctx), fg=ui.role("dim")))
    for line in lines:
        _stdout_write(line + "\n")
    return 0


def cmd_about(ctx: Any, args: argparse.Namespace) -> int:
    from .screens.about import run as about_run

    about_run(ctx)
    return 0


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    command = args.command or "menu"

    if command == "demo":
        from .demo import run_demo, screens_available

        if getattr(args, "list", False):
            for name in screens_available():
                print(name)
            return 0
        args.demo = args.screen
        ctx = build_context(args)
        return run_demo(ctx, args.screen, args.width, args.height)

    ctx = build_context(args)
    try:
        if command == "menu":
            from .menu import run as menu_run

            return menu_run(ctx)
        if command == "gen":
            return cmd_gen(ctx, args)
        if command == "bulk":
            return cmd_gen(ctx, args, force_offline=True)
        if command == "lookup":
            return cmd_lookup(ctx, args)
        if command == "validate":
            return cmd_validate(ctx, args)
        if command == "combos":
            return cmd_combos(ctx, args)
        if command == "library":
            return cmd_library(ctx, args)
        if command == "export":
            return cmd_export(ctx, args)
        if command == "doctor":
            return cmd_doctor(ctx, args)
        if command == "about":
            return cmd_about(ctx, args)
    except KeyboardInterrupt:
        sys.stderr.write("\ninterrompido\n")
        return 130
    finally:
        ctx.term.restore()
    parser.print_help()
    return 0
