"""Build favicon from official logo part icone-01.png."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(r"C:\Stuff\Devil's Club\devils-club-logo\parts\icone-01.png")
ASSETS = Path(__file__).resolve().parent.parent / "assets"
PAD_RATIO = 0.1
BG = (8, 8, 10, 255)


def load_icon(path: Path) -> Image.Image:
    rgba = Image.open(path).convert("RGBA")
    data = np.array(rgba)
    dark = (data[:, :, 0] < 24) & (data[:, :, 1] < 24) & (data[:, :, 2] < 24)
    data[dark, 3] = 0
    return Image.fromarray(data)


def trim_rgba(im: Image.Image) -> Image.Image:
    alpha = np.array(im)[:, :, 3]
    mask = alpha > 8
    ys, xs = np.where(mask)
    if len(xs) == 0:
        return im
    return im.crop((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1))


def fit_square(im: Image.Image) -> Image.Image:
    trimmed = trim_rgba(im)
    cw, ch = trimmed.size
    side = int(max(cw, ch) * (1 + PAD_RATIO * 2))
    canvas = Image.new("RGBA", (side, side), BG)
    scale = (side * (1 - PAD_RATIO * 2)) / max(cw, ch)
    nw, nh = max(1, int(cw * scale)), max(1, int(ch * scale))
    resized = trimmed.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas.paste(resized, ((side - nw) // 2, (side - nh) // 2), resized)
    return canvas


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Missing source: {SRC}")

    ASSETS.mkdir(parents=True, exist_ok=True)
    icon = fit_square(load_icon(SRC))
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    icons = [icon.resize(size, Image.Resampling.LANCZOS) for size in sizes]
    icons[0].save(
        ASSETS / "favicon.ico",
        format="ICO",
        sizes=sizes,
        append_images=icons[1:],
    )
    icons[0].save(ASSETS / "favicon-16.png")
    icons[1].save(ASSETS / "favicon-32.png")
    icon.resize((512, 512), Image.Resampling.LANCZOS).save(ASSETS / "favicon-flower.png")
    print(f"Wrote favicon.ico from {SRC.name} ({icon.size})")


if __name__ == "__main__":
    main()
