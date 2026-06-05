"""Favicon with only the red flower head (no stem)."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(r"C:\Stuff\Devil's Club\devils-club-logo\devils-club-logo-icon-transparent.png")
ASSETS = Path(__file__).resolve().parent.parent / "assets"
ALPHA_MIN = 8
WIDTH_RATIO = 0.55
MIN_FLOWER_ROWS = 30


def flower_crop(im: Image.Image) -> Image.Image:
    rgba = im.convert("RGBA")
    alpha = np.array(rgba)[:, :, 3]
    mask = alpha > ALPHA_MIN
    ys, xs = np.where(mask)
    if len(xs) == 0:
        raise ValueError("empty icon")

    x0, x1 = int(xs.min()), int(xs.max()) + 1
    y0, y1 = int(ys.min()), int(ys.max()) + 1

    row_widths: list[tuple[int, int]] = []
    for y in range(y0, y1):
        row = mask[y, x0:x1]
        if not row.any():
            continue
        idx = np.where(row)[0]
        row_widths.append((y, int(idx.max() - idx.min() + 1)))

    max_w = max(w for _, w in row_widths)
    threshold = max_w * WIDTH_RATIO
    flower_bottom = y1 - 1
    passed_peak = False
    for y, w in row_widths:
        if w >= max_w * 0.9:
            passed_peak = True
        if passed_peak and w < threshold and y > y0 + MIN_FLOWER_ROWS:
            flower_bottom = y - 1
            break

    crop = rgba.crop((x0, y0, x1, flower_bottom + 1))
    cw, ch = crop.size
    side = max(cw, ch)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(crop, ((side - cw) // 2, (side - ch) // 2))
    return square


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Missing source: {SRC}")

    ASSETS.mkdir(parents=True, exist_ok=True)
    flower = flower_crop(Image.open(SRC))
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    icons = [flower.resize(size, Image.Resampling.LANCZOS) for size in sizes]
    icons[0].save(
        ASSETS / "favicon.ico",
        format="ICO",
        sizes=sizes,
        append_images=icons[1:],
    )
    flower.resize((512, 512), Image.Resampling.LANCZOS).save(ASSETS / "favicon-flower.png")
    print(f"Wrote {ASSETS / 'favicon.ico'} (flower crop {flower.size})")


if __name__ == "__main__":
    main()
