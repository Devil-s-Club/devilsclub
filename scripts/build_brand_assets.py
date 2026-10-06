"""
Export the site logo from the official white-letter PNG (same look as the source art):
logo.webp for the header and footer, logo-hero.webp for the top of the home page.
"""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

SRC_DIR = Path(r"C:\Stuff\Devil's Club\devils-club-logo")
ASSETS = Path(__file__).resolve().parent.parent / "assets"

LOGO_SRC = SRC_DIR / "Devil's Club Logo com Letras Brancas.png"

# Header/footer logo at 2x its 3rem height; the hero gets the source's full size.
LOGO_EXPORT_H = 96


def trim_rgba(im: Image.Image, alpha_min: int = 8, pad: int = 4) -> Image.Image:
    a = np.array(im)[:, :, 3]
    mask = a > alpha_min
    ys, xs = np.where(mask)
    if len(xs) == 0:
        return im
    x0 = max(0, int(xs.min()) - pad)
    y0 = max(0, int(ys.min()) - pad)
    x1 = min(im.width, int(xs.max()) + 1 + pad)
    y1 = min(im.height, int(ys.max()) + 1 + pad)
    return im.crop((x0, y0, x1, y1))


def resize_to_height(im: Image.Image, height: int) -> Image.Image:
    if im.height == height:
        return im
    w = int(im.width * height / im.height)
    return im.resize((w, height), Image.Resampling.LANCZOS)


def main() -> None:
    if not LOGO_SRC.exists():
        raise SystemExit(f"Missing source: {LOGO_SRC}")

    ASSETS.mkdir(parents=True, exist_ok=True)

    logo = trim_rgba(Image.open(LOGO_SRC).convert("RGBA"))
    for name, out in (
        ("logo.webp", resize_to_height(logo, LOGO_EXPORT_H)),
        ("logo-hero.webp", logo),
    ):
        out.save(ASSETS / name, "WEBP", quality=92, method=6)
        print("Wrote", name, out.size)


if __name__ == "__main__":
    main()
