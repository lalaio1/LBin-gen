from __future__ import annotations

import sys
from typing import Optional, Sequence

from .app.cli import main

__all__ = ["main", "run"]


def run(argv: Optional[Sequence[str]] = None) -> int:
    return main(argv)


if __name__ == "__main__":
    sys.exit(main())
