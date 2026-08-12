/* eslint-env node */
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const imagesDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/assets/images");
const inputExts = new Set([".png", ".jpg", ".jpeg"]);
const MAX_WIDTH = 2048;

async function main() {
  const files = (await readdir(imagesDir)).filter((f) => inputExts.has(path.extname(f).toLowerCase()));

  for (const file of files) {
    const src = path.join(imagesDir, file);
    const base = path.basename(file, path.extname(file));
    const dest = path.join(imagesDir, `${base}.webp`);

    const meta = await sharp(src).metadata();
    const width = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : null;

    await sharp(src)
      .resize(width ? { width, withoutEnlargement: true } : {})
      .webp({ quality: 75 })
      .toFile(dest);

    console.log(`${file} (${Math.round(meta.width || 0)}px) -> ${base}.webp`);
  }
}

main().catch((err) => {
  throw err;
});