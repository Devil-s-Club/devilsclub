"""
Export a brand kit for use outside the site (itch.io, stores, press, social).

Everything derives from the masters in SRC_DIR, which already carry the mark in
#c9222b — see recolor_brand_masters.py for that one-off migration. Nothing here
recolours the mark; if the brand red changes again, it changes in the masters and
this script just follows.

The vector master is produced by the folder's own build_logo_assets.py, traced
from the same art as the PNG, so the two agree.
"""
from __future__ import annotations

import re
from pathlib import Path

import numpy as np
from PIL import Image

SRC_DIR = Path(r"C:\Stuff\Devil's Club\devils-club-logo")
OUT = Path(__file__).resolve().parent.parent / "assets" / "brand"

SVG_DARK_SRC = SRC_DIR / "devils-club-logo.svg"            # on black
SVG_LIGHT_SRC = SRC_DIR / "devils-club-logo-on-light.svg"  # on white
ICON_SRC = SRC_DIR / "devils-club-logo-icon-transparent.png"
TEXT_SRC = SRC_DIR / "devils-club-logo-text-transparent.png"

MARK = "#c9222b"
PNG_HEIGHT = 1024
PLATE = re.compile(r'\s*<rect[^>]*width="100%"[^>]*/>\s*')


def fit_viewbox(svg: str, pad: int = 12) -> str:
    """Shrink the canvas to the paths it actually holds.

    The master is a 958x955 plate with the art floating inside it, which leaves
    whoever places the file guessing where the margins end.
    """
    coords = [float(n) for d in re.findall(r'\sd="([^"]+)"', svg)
              for n in re.findall(r"-?\d+(?:\.\d+)?", d)]
    if not coords:
        return svg
    xs, ys = coords[0::2], coords[1::2]
    x0, y0 = min(xs) - pad, min(ys) - pad
    w, h = max(xs) - min(xs) + 2 * pad, max(ys) - min(ys) + 2 * pad
    svg = re.sub(r'viewBox="[^"]*"', f'viewBox="{x0:g} {y0:g} {w:g} {h:g}"', svg, count=1)
    svg = re.sub(r'\swidth="\d+"\s+height="\d+"', f' width="{w:g}" height="{h:g}"',
                 svg, count=1)
    return svg.replace('<rect width="100%" height="100%"',
                       f'<rect x="{x0:g}" y="{y0:g}" width="{w:g}" height="{h:g}"')


def trim(im: Image.Image, pad: int = 8) -> Image.Image:
    a = np.array(im)[:, :, 3]
    ys, xs = np.where(a > 8)
    if len(xs) == 0:
        return im
    return im.crop((max(0, int(xs.min()) - pad), max(0, int(ys.min()) - pad),
                    min(im.width, int(xs.max()) + 1 + pad),
                    min(im.height, int(ys.max()) + 1 + pad)))


def to_height(im: Image.Image, h: int) -> Image.Image:
    return im.resize((max(1, round(im.width * h / im.height)), h), Image.Resampling.LANCZOS)


def main() -> None:
    sources = (SVG_DARK_SRC, SVG_LIGHT_SRC, ICON_SRC, TEXT_SRC)
    missing = [p for p in sources if not p.exists()]
    if missing:
        raise SystemExit("Missing sources: " + ", ".join(str(p) for p in missing))
    OUT.mkdir(parents=True, exist_ok=True)

    dark = SVG_DARK_SRC.read_text(encoding="utf-8")
    if MARK not in dark:
        raise SystemExit(f"{MARK} not in the vector master — rebuild it first")

    # On dark: drop the black plate so the file drops onto any dark surface.
    (OUT / "devils-club-logo-on-dark.svg").write_text(
        fit_viewbox(PLATE.sub("\n  ", dark)), encoding="utf-8")

    (OUT / "devils-club-logo-on-light.svg").write_text(
        fit_viewbox(SVG_LIGHT_SRC.read_text(encoding="utf-8")), encoding="utf-8")

    # Mark alone: the red path, without the plate or the lettering.
    icon_only = "\n".join(
        line for line in PLATE.sub("\n  ", dark).splitlines()
        if "<path" not in line or MARK in line)
    (OUT / "devils-club-icon.svg").write_text(fit_viewbox(icon_only), encoding="utf-8")

    icon = Image.open(ICON_SRC).convert("RGBA")
    text = Image.open(TEXT_SRC).convert("RGBA")

    # The two layers share one canvas, so compositing rebuilds the lockup.
    lockup = Image.alpha_composite(icon, text)
    to_height(trim(lockup), PNG_HEIGHT).save(OUT / "devils-club-logo.png", optimize=True)
    to_height(trim(icon), PNG_HEIGHT).save(OUT / "devils-club-icon.png", optimize=True)

    # Square avatar for stores and social, mark centred on the site black.
    side = PNG_HEIGHT
    plate = Image.new("RGBA", (side, side), (8, 8, 10, 255))
    mark = to_height(trim(icon), int(side * 0.72))
    plate.alpha_composite(mark, ((side - mark.width) // 2, (side - mark.height) // 2))
    plate.convert("RGB").save(OUT / "devils-club-avatar.png", optimize=True)

    for f in sorted(OUT.iterdir()):
        print(f"  {f.name}")


if __name__ == "__main__":
    main()
