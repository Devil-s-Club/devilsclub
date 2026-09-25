"""
One-off migration: repaint the mark in the brand masters from #a20f15 to #c9222b.

The masters live outside this repo and are not versioned, so this records what was
done to them. A backup of the originals sits beside the folder.

Only reddish pixels are touched; letters, outlines, plates and transparency are
left alone. Each pixel is remapped proportionally (p -> p * new/old) rather than
flattened to the new colour, which keeps both the antialiased edges and the slight
grain the source art carries.

Run this BEFORE the folder's own build_logo_assets.py, which regenerates the
official 958px set (SVG, PNG, ICO, PDF, layers, on-light) from source.png.
"""
from __future__ import annotations

import collections
from pathlib import Path

import numpy as np
from PIL import Image

BRAND = Path(r"C:\Stuff\Devil's Club\devils-club-logo")
NEW = (201, 34, 43)  # #c9222b

# Everything else in the folder is regenerated from source.png by their script.
TARGETS = [
    "source.png",
    "Devil's Club Logo Terceira Versão.png",
    "Devil's Club Logo com Contorno.png",
    "Devil's Club Logo com Letras Brancas.png",
    "Logo_Transparente com letras pretas.png",
    "Logo_Transparente.png",
    "GERAL.png",
]


def dominant_red(rgb: np.ndarray, mask: np.ndarray) -> tuple[int, int, int]:
    """The flat colour of the mark, as the most common reddish pixel."""
    counts = collections.Counter(map(tuple, rgb[mask]))
    return counts.most_common(1)[0][0]


def recolour(path: Path) -> str:
    im = Image.open(path)
    had_alpha = im.mode in ("RGBA", "LA") or "transparency" in im.info
    rgba = np.array(im.convert("RGBA")).astype(np.int16)
    rgb = rgba[:, :, :3]
    r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]

    # Reddish: red channel clearly ahead of both others, and not pure background.
    mask = (r > g + 15) & (r > b + 15) & (rgba[:, :, 3] > 8)
    if not mask.any():
        return f"{path.name}: sem vermelho, intacto"

    old = dominant_red(rgb, mask)
    if old[0] == 0:
        return f"{path.name}: vermelho degenerado, pulado"

    # k is how much of the flat colour this pixel carries; the red channel is the
    # least noisy estimator because it dominates the mark.
    k = rgb[:, :, 0][mask] / old[0]
    out = rgba.copy()
    for i, channel in enumerate(NEW):
        out[:, :, i][mask] = np.clip(k * channel, 0, 255)

    result = Image.fromarray(out.astype(np.uint8), mode="RGBA")
    if not had_alpha:
        result = result.convert("RGB")
    result.save(path, optimize=True)
    return (f"{path.name}: #{old[0]:02X}{old[1]:02X}{old[2]:02X}"
            f" -> #{NEW[0]:02X}{NEW[1]:02X}{NEW[2]:02X}"
            f" em {int(mask.sum()):,} pixels")


def main() -> None:
    for name in TARGETS:
        path = BRAND / name
        if not path.exists():
            print(f"  AUSENTE {name}")
            continue
        print("  " + recolour(path))


if __name__ == "__main__":
    main()
