"""
Export a brand kit for use outside the site (itch.io, stores, press, social).

The mark is recoloured from the source #990f15 / #a20f15 to #c9222b, which is the
same hue lifted to 3.6:1 on the site's black. Logos are exempt from the WCAG
contrast criteria, so this is legibility, not conformance.

SVGs are recoloured by substitution on the vector master, so they stay vector.
PNGs come from the 958px transparent layers, tinted before any resize.
"""
from __future__ import annotations

import re
from pathlib import Path

import numpy as np
from PIL import Image

SRC_DIR = Path(r"C:\Stuff\Devil's Club\devils-club-logo")
OUT = Path(__file__).resolve().parent.parent / "assets" / "brand"

SVG_SRC = SRC_DIR / "devils-club-logo-on-light.svg"
ICON_SRC = SRC_DIR / "devils-club-logo-icon-transparent.png"
TEXT_SRC = SRC_DIR / "devils-club-logo-text-transparent.png"

OLD_MARK = "#990f15"      # flower in the vector master
OLD_LETTERS = "#282828"   # wordmark in the vector master
MARK = "#c9222b"          # new mark red
LETTERS_DARK = "#edeae5"  # wordmark on dark backgrounds
PNG_HEIGHT = 1024


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
    # A full-bleed plate must follow the new box, not the old one.
    return svg.replace('<rect width="100%" height="100%"',
                       f'<rect x="{x0:g}" y="{y0:g}" width="{w:g}" height="{h:g}"')


def tint(im: Image.Image, hex_rgb: str) -> Image.Image:
    """Repaint opaque pixels, leaving alpha (and so the antialiased edges) alone."""
    rgb = tuple(int(hex_rgb[i:i + 2], 16) for i in (1, 3, 5))
    data = np.array(im)
    data[:, :, 0], data[:, :, 1], data[:, :, 2] = rgb
    return Image.fromarray(data)


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
    missing = [p for p in (SVG_SRC, ICON_SRC, TEXT_SRC) if not p.exists()]
    if missing:
        raise SystemExit("Missing sources: " + ", ".join(str(p) for p in missing))
    OUT.mkdir(parents=True, exist_ok=True)

    svg = SVG_SRC.read_text(encoding="utf-8")
    if OLD_MARK not in svg:
        raise SystemExit(f"{OLD_MARK} not found in the vector master; check the source")

    # On light: keep the dark letters, drop nothing.
    (OUT / "devils-club-logo-on-light.svg").write_text(
        fit_viewbox(svg.replace(OLD_MARK, MARK)), encoding="utf-8")

    # On dark: light letters, and no white plate behind them.
    dark = svg.replace(OLD_MARK, MARK).replace(OLD_LETTERS, LETTERS_DARK)
    dark = dark.replace('<rect width="100%" height="100%" fill="#ffffff"/>', "")
    (OUT / "devils-club-logo-on-dark.svg").write_text(fit_viewbox(dark), encoding="utf-8")

    # Mark alone: drop every letter path and the plate.
    icon_only = "\n".join(
        line for line in dark.splitlines() if f'fill="{LETTERS_DARK}"' not in line)
    (OUT / "devils-club-icon.svg").write_text(fit_viewbox(icon_only), encoding="utf-8")

    icon = tint(Image.open(ICON_SRC).convert("RGBA"), MARK)
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
