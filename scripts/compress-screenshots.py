"""Convert PNG screenshots to lossless WebP without resizing.
Usage: python scripts/compress-screenshots.py SOURCE_DIRECTORY [OUTPUT_DIRECTORY]
Requires Pillow with WebP support. Original files are preserved by this script.
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import sys
from PIL import Image

source = Path(sys.argv[1])
output = Path(sys.argv[2]) if len(sys.argv) > 2 else Path('public/screenshots')
output.mkdir(parents=True, exist_ok=True)

def convert(path):
    destination = output / (path.stem + '.webp')
    with Image.open(path) as image:
        image.save(destination, 'WEBP', lossless=True, method=6, exact=True)
    with Image.open(path) as original, Image.open(destination) as compressed:
        assert original.size == compressed.size
        assert original.convert('RGBA').tobytes() == compressed.convert('RGBA').tobytes()
    return path.stat().st_size, destination.stat().st_size

with ThreadPoolExecutor(max_workers=4) as executor:
    sizes = list(executor.map(convert, sorted(source.glob('*.png'))))
before, after = map(sum, zip(*sizes))
print(f'{len(sizes)} screenshots: {before:,} -> {after:,} bytes ({(1-after/before)*100:.1f}% reduction); all pixels verified identical')
