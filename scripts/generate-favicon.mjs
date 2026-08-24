import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

const inputPath = resolve("public/favicon-logo.png");
const outputPath = resolve("app/favicon.ico");
const wordmarkInputPath = resolve("public/signature-logo-v3.png");
const wordmarkOutputPath = resolve("public/signature-logo-final.png");
const sizes = [16, 32, 48];
const input = await readFile(inputPath);

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

const trimmedLogo = await sharp(input).trim().png().toBuffer();
const pngImages = await Promise.all(
  sizes.map(async (size) => {
    const padding = Math.max(2, Math.round(size * 0.1));
    const logo = await sharp(trimmedLogo)
      .resize({
        width: size - padding * 2,
        height: size - padding * 2,
        fit: "contain",
      })
      .png()
      .toBuffer();

    return sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: "#11110f",
      },
    })
      .composite([{ input: logo, gravity: "center" }])
      .png()
      .toBuffer();
  }),
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

await writeFile(outputPath, Buffer.concat([directory, ...pngImages]));
console.log(`Created ${outputPath} with ${sizes.join(", ")}px variants.`);
