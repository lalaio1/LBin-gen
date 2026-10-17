from __future__ import annotations

import csv
import html
import io
import json
import re
from dataclasses import dataclass
from datetime import datetime
from typing import Dict, Iterable, Iterator, List, Optional, Sequence, Tuple

from .combos import render_line
from .validator import extract_numbers

__all__ = [
    "Format",
    "FORMATS",
    "format_keys",
    "resolve_format",
    "format_labels",
    "header",
    "render",
    "footer",
    "extension_for",
    "read_records",
    "records_from_line",
]

COLUMNS = ("number", "month", "year", "cvv", "brand", "scheme", "type", "bank", "country", "holder")


@dataclass(frozen=True)
class Format:
    key: str
    label: str
    extension: str
    description: str
    pretty: bool = False


FORMATS: Dict[str, Format] = {
    "txt": Format("txt", "Texto", "txt", "um registro por linha, com template customizavel"),
    "csv": Format("csv", "CSV", "csv", "planilhas, Excel e Google Sheets"),
    "json": Format("json", "JSON", "json", "array de objetos, pronto para APIs"),
    "jsonl": Format("jsonl", "JSON Lines", "jsonl", "streaming, um objeto por linha"),
    "js": Format("js", "JavaScript", "js", "modulo .js (compativel com a v1)"),
    "sql": Format("sql", "SQL", "sql", "CREATE TABLE + INSERTs"),
    "xml": Format("xml", "XML", "xml", "integracao com sistemas legados"),
    "html": Format("html", "Relatorio HTML", "html", "tabela pronta para abrir no navegador", True),
}


def format_keys() -> List[str]:
    return list(FORMATS.keys())


def format_labels() -> List[Tuple[str, str]]:
    return [(item.key, item.label) for item in FORMATS.values()]


def resolve_format(name: Optional[str]) -> Format:
    key = (name or "txt").strip().lower().lstrip(".")
    if key in FORMATS:
        return FORMATS[key]
    for item in FORMATS.values():
        if item.extension == key:
            return item
    raise ValueError("formato desconhecido: %s" % name)


def extension_for(name: Optional[str]) -> str:
    return resolve_format(name).extension


def header(fmt: Format, meta: Optional[Dict[str, object]] = None, template: str = "") -> str:
    meta = meta or {}
    if fmt.key == "txt":
        return ""
    if fmt.key == "csv":
        return ",".join(COLUMNS) + "\n"
    if fmt.key == "json":
        return "[\n"
    if fmt.key == "js":
        return "const cards = [\n"
    if fmt.key == "sql":
        return (
            "-- LBin Gen %s\n"
            "CREATE TABLE IF NOT EXISTS cards (\n"
            "  number TEXT PRIMARY KEY,\n"
            "  month INTEGER,\n"
            "  year INTEGER,\n"
            "  cvv TEXT,\n"
            "  brand TEXT,\n"
            "  scheme TEXT,\n"
            "  type TEXT,\n"
            "  bank TEXT,\n"
            "  country TEXT,\n"
            "  holder TEXT\n"
            ");\n"
        ) % meta.get("version", "")
    if fmt.key == "xml":
        return (
            '<?xml version="1.0" encoding="UTF-8"?>\n'
            '<cards generator="LBin Gen" version="%s" generated="%s">\n'
            % (meta.get("version", ""), meta.get("generated", ""))
        )
    if fmt.key == "html":
        return _html_header(meta)
    return ""


def footer(fmt: Format, meta: Optional[Dict[str, object]] = None) -> str:
    meta = meta or {}
    if fmt.key == "json":
        return "]\n"
    if fmt.key == "js":
        return "];\n"
    if fmt.key == "xml":
        return "</cards>\n"
    if fmt.key == "html":
        return _html_footer(meta)
    return ""


def render(fmt: Format, record: Dict[str, object], template: str = "") -> str:
    if "cvv" not in record and record.get("cvc") is not None:
        record = dict(record)
        record["cvv"] = record["cvc"]
    if fmt.key == "txt":
        return render_line(template or "{number}|{month}|{year}|{cvc}", record) + "\n"
    if fmt.key == "csv":
        buffer = io.StringIO()
        writer = csv.writer(buffer, lineterminator="\n")
        writer.writerow([record.get(column, "") for column in COLUMNS])
        return buffer.getvalue()
    if fmt.key == "json":
        return "  " + json.dumps(_compact(record), ensure_ascii=False) + ",\n"
    if fmt.key == "jsonl":
        return json.dumps(_compact(record), ensure_ascii=False) + "\n"
    if fmt.key == "js":
        return "  " + json.dumps(_compact(record), ensure_ascii=False) + ",\n"
    if fmt.key == "sql":
        return (
            "INSERT OR IGNORE INTO cards (number, month, year, cvv, brand, scheme, type, bank, holder, country) "
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s);\n"
            % (
                _sql(record.get("number")),
                _sql_int(record.get("month")),
                _sql_int(record.get("year")),
                _sql(record.get("cvv")),
                _sql(record.get("brand")),
                _sql(record.get("scheme")),
                _sql(record.get("type", record.get("kind"))),
                _sql(record.get("bank")),
                _sql(record.get("holder")),
                _sql(record.get("country")),
            )
        )
    if fmt.key == "xml":
        return "  <card number=\"%s\" month=\"%s\" year=\"%s\" cvv=\"%s\" brand=\"%s\" bin=\"%s\" holder=\"%s\" />\n" % (
            _xml(record.get("number")),
            _xml(record.get("month")),
            _xml(record.get("year")),
            _xml(record.get("cvv")),
            _xml(record.get("brand")),
            _xml(record.get("bin")),
            _xml(record.get("holder")),
        )
    if fmt.key == "html":
        return _html_row(record)
    return render_line(template or "{number}|{month}|{year}|{cvc}", record) + "\n"


def _compact(record: Dict[str, object]) -> Dict[str, object]:
    out: Dict[str, object] = {}
    for key, value in record.items():
        if value in (None, "") or key in ("dashed", "masked", "brand_name", "last4", "yy", "yyyy", "length", "expiry"):
            continue
        out[key] = value
    if "cvc" in out and "cvv" in out:
        out.pop("cvc")
    return out


def _sql(value: object) -> str:
    if value in (None, ""):
        return "NULL"
    return "'" + str(value).replace("'", "''") + "'"


def _sql_int(value: object) -> str:
    try:
        return str(int(str(value)))
    except (TypeError, ValueError):
        return "NULL"


def _xml(value: object) -> str:
    if value in (None, ""):
        return ""
    return html.escape(str(value), quote=True)


def _html_header(meta: Dict[str, object]) -> str:
    generated = html.escape(str(meta.get("generated", datetime.now().strftime("%d/%m/%Y %H:%M"))))
    title = html.escape(str(meta.get("title", "LBin Gen - relatorio de cartoes de teste")))
    return """<!doctype html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%s</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 32px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
         background: radial-gradient(1200px 600px at 20%% -10%%, #16213a 0%%, #0a0d16 60%%, #05060b 100%%);
         color: #e6edf3; min-height: 100vh; }
  header { display: flex; flex-wrap: wrap; align-items: baseline; gap: 16px; margin-bottom: 24px; }
  h1 { font-size: 22px; margin: 0; letter-spacing: .5px;
       background: linear-gradient(90deg, #00f0ff, #7a5cff 55%%, #ff2ed1);
       -webkit-background-clip: text; background-clip: text; color: transparent; }
  .meta { color: #7d8590; font-size: 13px; }
  table { width: 100%%; border-collapse: collapse; font-size: 13px;
          background: rgba(13,17,26,.85); border: 1px solid #1f2733; border-radius: 12px; overflow: hidden; }
  th { position: sticky; top: 0; background: #111826; text-align: left; padding: 10px 12px;
       color: #9aa4b2; font-weight: 600; border-bottom: 1px solid #1f2733; }
  td { padding: 9px 12px; border-bottom: 1px solid #151b26; }
  tr:hover td { background: rgba(0,240,255,.06); }
  .num { color: #00f0ff; }
  .brand { color: #ff2ed1; }
  footer { margin-top: 20px; color: #5a6472; font-size: 12px; }
  code { color: #9bff3d; }
</style>
</head>
<body>
<header>
  <h1>%s</h1>
  <span class="meta">gerado em %s</span>
</header>
<table>
<thead><tr><th>Numero</th><th>Mes</th><th>Ano</th><th>CVV</th><th>Bandeira</th><th>Bin</th></tr></thead>
<tbody>
""" % (title, title, generated)


def _html_row(record: Dict[str, object]) -> str:
    return (
        "<tr><td class=\"num\">%s</td><td>%s</td><td>%s</td><td>%s</td>"
        "<td class=\"brand\">%s</td><td>%s</td></tr>\n"
        % (
            html.escape(str(record.get("number", ""))),
            html.escape(str(record.get("month", ""))),
            html.escape(str(record.get("year", ""))),
            html.escape(str(record.get("cvc", record.get("cvv", "")))),
            html.escape(str(record.get("brand", ""))),
            html.escape(str(record.get("bin", ""))),
        )
    )


def _html_footer(meta: Dict[str, object]) -> str:
    return (
        "</tbody></table>\n"
        "<footer>LBin Gen %s &middot; uso restrito a testes autorizados.</footer>\n"
        "</body>\n</html>\n" % html.escape(str(meta.get("version", "")))
    )


_RE_RECORD = re.compile(r"^(\d{12,19})(?:[|;,/\s]+(\d{1,2})[|;,/\s]*(\d{2,4})[|;,/\s]+(\d{3,4}))?")


def records_from_line(line: str) -> Iterator[Dict[str, object]]:
    match = _RE_RECORD.match(line.strip())
    if match:
        number, month, year, cvv = match.group(1), match.group(2), match.group(3), match.group(4)
        yield {
            "number": number,
            "month": int(month) if month else "",
            "year": int(year[-2:]) if year else "",
            "cvv": cvv or "",
            "bin": number[:6],
            "brand": (brands_key(number)),
        }
        return
    for digits in extract_numbers(line):
        yield {"number": digits, "bin": digits[:6], "brand": brands_key(digits)}


def brands_key(number: str) -> str:
    from . import brands as brands_mod

    brand = brands_mod.detect(number)
    return brand.key if brand else ""


def read_records(path: str) -> Iterator[Dict[str, object]]:
    with open(path, "r", encoding="utf-8", errors="replace") as handle:
        for line in handle:
            line = line.strip()
            if not line:
                continue
            for record in records_from_line(line):
                yield record
