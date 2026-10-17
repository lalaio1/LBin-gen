#!/usr/bin/env python3
"""LBin Gen - launcher multiplataforma (Windows, Linux e Termux/Android)."""

from __future__ import annotations

import os
import sys
from pathlib import Path

MIN_PYTHON = (3, 9)
ROOT = Path(__file__).resolve().parent

BANNER = r"""
   _     ____  ___ _   _   ____ _____ _   _
  | |   | __ )|_ _| \ | | / ___| ____| \ | |
  | |   |  _ \ | ||  \| || |  _|  _| |  \| |
  | |___| |_) || || |\  || |_| | |___| |\  |
  |_____|____/|___|_| \_| \____|_____|_| \_|
"""


def prepare_environment() -> None:
    root = str(ROOT)
    if root not in sys.path:
        sys.path.insert(0, root)
    if os.name == "nt":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
            sys.stderr.reconfigure(encoding="utf-8", errors="replace")
            sys.stdin.reconfigure(encoding="utf-8", errors="replace")
        except (AttributeError, ValueError):
            pass
        os.environ.setdefault("PYTHONUTF8", "1")


def check_python() -> bool:
    if sys.version_info >= MIN_PYTHON:
        return True
    sys.stdout.write(BANNER)
    sys.stdout.write(
        "\n  LBin Gen precisa do Python %d.%d ou superior.\n"
        "  versao detectada: %s\n\n"
        "  baixe em https://www.python.org/downloads/ (marque 'Add Python to PATH')\n"
        "  no Termux: pkg install python\n\n"
        % (MIN_PYTHON[0], MIN_PYTHON[1], ".".join(str(part) for part in sys.version_info[:3]))
    )
    return False


def main() -> int:
    prepare_environment()
    if not check_python():
        return 1
    try:
        from lbin.app.cli import main as cli_main
    except ImportError as error:
        sys.stdout.write(BANNER)
        sys.stdout.write("\n  falha ao carregar o pacote lbin: %s\n" % error)
        sys.stdout.write("  execute este arquivo de dentro do repositorio clonado.\n\n")
        return 1
    try:
        return cli_main(sys.argv[1:] or ["menu"])
    except KeyboardInterrupt:
        sys.stdout.write("\n  sessao interrompida\n")
        return 130


if __name__ == "__main__":
    sys.exit(main())
