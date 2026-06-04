from pathlib import Path

import cv2
import numpy as np
from PIL import Image

im = np.array(Image.open(Path(r"C:\Stuff\Devil's Club\devils-club-logo\devils-club-logo.png")).convert("RGB"))
r, g, b = im[:, :, 0], im[:, :, 1], im[:, :, 2]
cream = (r > 175) & (g > 170) & (b > 150)
# Row 0
print("Row 0 cream pixels:", cream[0].sum(), "of", cream.shape[1])
print("Col 0 cream pixels:", cream[:, 0].sum())
# First 3 rows
for i in range(5):
    print(f"row {i}:", cream[i].sum())
for i in range(5):
    print(f"col {i}:", cream[:, i].sum())
