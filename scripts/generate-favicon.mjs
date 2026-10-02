import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

const inputPath = resolve("public/favicon-portrait-bw.png");
const faviconPath = resolve("app/favicon.ico");
const iconPath = resolve("app/icon.png");
const wordmarkInputPath = resolve("public/signature-logo-v3.png");
const wordmarkOutputPath = resolve("public/signature-logo-final.png");
const sizes = [16, 32, 48];
const portrait = await sharp(inputPath)
  .extract({ left: 87, top: 0, width: 1080, height: 1080 })
  .flatten({ background: "#e6e6e6" })
  .png()
  .toBuffer();

await sharp(wordmarkInputPath)
  .trim()
  .extend({
    top: 24,
    bottom: 24,
    left: 32,
    right: 32,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(wordmarkOutputPath);

await sharp(portrait).resize(512, 512).png().toFile(iconPath);

const pngImages = await Promise.all(
  sizes.map((size) =>
    sharp(portrait).resize(size, size).ensureAlpha().png().toBuffer(),
  ),
);

const directorySize = 6 + pngImages.length * 16;
const directory = Buffer.alloc(directorySize);
directory.writeUInt16LE(0, 0);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(pngImages.length, 4);

let imageOffset = directorySize;
pngImages.forEach((image, index) => {
  const entryOffset = 6 + index * 16;
  const size = sizes[index];

  directory.writeUInt8(size, entryOffset);
  directory.writeUInt8(size, entryOffset + 1);
  directory.writeUInt8(0, entryOffset + 2);
  directory.writeUInt8(0, entryOffset + 3);
  directory.writeUInt16LE(1, entryOffset + 4);
  directory.writeUInt16LE(32, entryOffset + 6);
  directory.writeUInt32LE(image.length, entryOffset + 8);
  directory.writeUInt32LE(imageOffset, entryOffset + 12);
  imageOffset += image.length;
});

await writeFile(faviconPath, Buffer.concat([directory, ...pngImages]));
console.log(`Created ${faviconPath} and ${iconPath}.`);
