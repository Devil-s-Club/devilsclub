"""
Export web logos from official transparent PNG layers (same look as the source art).
Hero uses the same assets as the header, scaled in CSS — no black box composite.
"""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

SRC_DIR = Path(r"C:\Stuff\Devil's Club\devils-club-logo")
ASSETS = Path(__file__).resolve().parent.parent / "assets"

ICON_SRC = SRC_DIR / "devils-club-logo-icon-transparent.png"
TEXT_SRC = SRC_DIR / "devils-club-logo-text-transparent.png"

HEADER_ICON_H = 44
HEADER_WORDMARK_H = 32
# The source art is #a20f15, 2.5:1 on the site's black. Same hue, raised to 3.6:1.
# The wordmark is left alone: it is already off-white at 16.9:1.
ICON_TINT = (201, 34, 43)
# One high-res wordmark/icon for header + hero (CSS scales down/up)
WORDMARK_EXPORT_H = 128
ICON_EXPORT_H = 120


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


def tint(im: Image.Image, rgb: tuple[int, int, int]) -> Image.Image:
    """Repaint the mark in `rgb`, leaving the alpha (and so the edges) alone."""
    data = np.array(im)
    data[:, :, 0], data[:, :, 1], data[:, :, 2] = rgb
    return Image.fromarray(data)


def resize_to_height(im: Image.Image, height: int) -> Image.Image:
    if im.height == height:
        return im
    w = int(im.width * height / im.height)
    return im.resize((w, height), Image.Resampling.LANCZOS)


def main() -> None:
    if not ICON_SRC.exists() or not TEXT_SRC.exists():
        raise SystemExit(f"Missing sources in {SRC_DIR}")

    ASSETS.mkdir(parents=True, exist_ok=True)

    icon = tint(trim_rgba(Image.open(ICON_SRC).convert("RGBA")), ICON_TINT)
    icon_hi = resize_to_height(icon, ICON_EXPORT_H)
    icon_hi.save(ASSETS / "logo-icon.png", optimize=True)

    word = trim_rgba(Image.open(TEXT_SRC).convert("RGBA"))
    word_hi = resize_to_height(word, WORDMARK_EXPORT_H)
    word_hi.save(ASSETS / "logo-wordmark.png", optimize=True)

    # Legacy alias some docs may reference
    word_hi.save(ASSETS / "logo-text.png", optimize=True)

    print("Wrote logo-icon.png", icon_hi.size)
    print("Wrote logo-wordmark.png", word_hi.size)


if __name__ == "__main__":
    main()
