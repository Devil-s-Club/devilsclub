from pathlib import Path
from PIL import Image
p = Path(r"C:\Stuff\Devil's Club\devils-club-logo")
for n in ["devils-club-logo-text-transparent.png","devils-club-logo.png","source.png"]:
    im = Image.open(p / n)
    print(n, im.size, im.mode)
