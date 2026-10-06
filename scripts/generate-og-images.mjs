/**
 * Erzeugt die statischen OG-Images (1200x630) unter public/images/og/.
 *
 * Aufruf: pnpm og:generate
 * Benötigt ein lokal installiertes Chrome (Standardpfad macOS) oder
 * die Umgebungsvariable CHROME_BIN mit dem Pfad zur Chrome-Binary.
 * Keine npm-Dependencies: rendert scripts/og-templates/og-template.html
 * per Headless Chrome. Die fertigen PNGs werden eingecheckt und im
 * Build als statische Assets ausgeliefert.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const templatePath = path.join(
  projectRoot,
  "scripts/og-templates/og-template.html",
);
const outputDir = path.join(projectRoot, "public/images/og");
const avatarPath = path.join(projectRoot, "public/images/avatar.jpg");
const fontPath = path.join(
  projectRoot,
  "public/fonts/outfit/v11/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2",
);

const variants = [
  {
    name: "shopware-migration",
    headline: "Shopware-5-zu-6-Migration zum Festpreis",
    subline: "Shopware 5 erhält keine Sicherheitsupdates mehr",
  },
  {
    name: "home",
    headline:
      "Digitale Produkte von der Architekturentscheidung bis zum Launch",
    subline: "Den Festpreis kennen Sie, bevor die Arbeit beginnt",
  },
];

function findChrome() {
  if (process.env.CHROME_BIN) {
    return process.env.CHROME_BIN;
  }
  const macChrome =
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (fs.existsSync(macChrome)) {
    return macChrome;
  }
  throw new Error(
    "Chrome nicht gefunden. Bitte CHROME_BIN auf die Chrome-Binary setzen.",
  );
}

function toDataUri(filePath, mimeType) {
  return `data:${mimeType};base64,${fs.readFileSync(filePath).toString("base64")}`;
}

const chrome = findChrome();
const template = fs.readFileSync(templatePath, "utf-8");
const avatarDataUri = toDataUri(avatarPath, "image/jpeg");
const fontDataUri = toDataUri(fontPath, "font/woff2");

fs.mkdirSync(outputDir, { recursive: true });
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "og-images-"));

try {
  for (const variant of variants) {
    // Replacer-Funktionen, damit $-Zeichen im Ersetzungstext nicht als
    // Ersetzungsmuster interpretiert werden
    const html = template
      .replaceAll("{{HEADLINE}}", () => variant.headline)
      .replaceAll("{{SUBLINE}}", () => variant.subline)
      .replaceAll("{{AVATAR_DATA_URI}}", () => avatarDataUri)
      .replaceAll("{{FONT_DATA_URI}}", () => fontDataUri);
    const htmlPath = path.join(tmpDir, `${variant.name}.html`);
    fs.writeFileSync(htmlPath, html);

    const outputPath = path.join(outputDir, `${variant.name}.png`);
    execFileSync(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--window-size=1200,630",
      "--virtual-time-budget=3000",
      `--screenshot=${outputPath}`,
      `file://${htmlPath}`,
    ]);
    if (!fs.existsSync(outputPath)) {
      throw new Error(`Chrome hat kein Screenshot geschrieben: ${outputPath}`);
    }
    console.log(`✅ ${path.relative(projectRoot, outputPath)}`);
  }
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
