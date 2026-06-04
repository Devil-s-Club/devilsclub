from pathlib import Path

import numpy as np
from PIL import Image

im = np.array(Image.open(Path(r"C:\Users\fabio\projects\devils-club\assets\hero-logo.png")))
gray = im.max(axis=2)
print("shape", im.shape)
print("row0 bright>200:", (gray[0] > 200).sum())
print("col0 bright>200:", (gray[:, 0] > 200).sum())
print("row-1 bright>200:", (gray[-1] > 200).sum())
print("col-1 bright>200:", (gray[:, -1] > 200).sum())
