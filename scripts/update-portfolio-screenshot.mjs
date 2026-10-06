/**
 * Aktualisiert den Portfolio-Screenshot der eigenen Website
 * (public/images/portfolio/vollstaedt-it/2.webp, 1920x1080).
 *
 * Das Ergebnis ist kein roher Screenshot, sondern das Laptop-Mockup
 * (scripts/assets/laptop-mockup-template.webp): Die aktuelle Startseite
 * wird headless gerendert und in den Bildschirmbereich des Mockups
 * montiert (inkl. Notch-Ausschnitt).
 *
 * Aufruf: pnpm screenshot:portfolio [-- --url=http://localhost:4200]
 * Standard-URL: http://localhost:4200 (vorher `pnpm start` oder einen
 * lokalen Server auf dem Build starten).
 * Benötigt: Chrome (Standardpfad macOS oder CHROME_BIN),
 * ImageMagick (`magick`) und cwebp (brew install imagemagick webp).
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
  "scripts/assets/laptop-mockup-template.webp",
);
const outputPath = path.join(
  projectRoot,
  "public/images/portfolio/vollstaedt-it/2.webp",
);

// Bildschirmbereich des Mockups (gemessen am Template, 1920x1080):
// Content-Box +331+134 mit 1258x831, Notch bei +872+122 mit 176x44.
const SCREEN_GEOMETRY = "+331+134";
const SCREEN_SIZE = "1258x831";
const NOTCH_CROP = "176x44+872+122";
const NOTCH_GEOMETRY = "+872+122";
// Viewport so gewählt, dass die Nav-Skalierung zum Original-Mockup passt.
const VIEWPORT = "1136,1000";
const CONTENT_CROP = "1136x750+0+0"; // schneidet u. a. den Cookie-Banner ab

const urlArg = process.argv.find((arg) => arg.startsWith("--url="));
const url = urlArg ? urlArg.slice("--url=".length) : "http://localhost:4200";

const parsedUrl = new URL(url); // wirft bei ungültiger URL
if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
  throw new Error(`Nur http(s)-URLs erlaubt: ${url}`);
}

// Preflight: Ohne laufenden Server rendert Chrome seine Fehlerseite und
// würde diese stillschweigend ins Mockup montieren
try {
  await fetch(url);
} catch {
  throw new Error(
    `Unter ${url} antwortet kein Server. Vorher \`pnpm start\` ausführen oder --url= setzen.`,
  );
}

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

const chrome = findChrome();
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-shot-"));
const rawPath = path.join(tmpDir, "raw.png");
const contentPath = path.join(tmpDir, "content.png");
const notchPath = path.join(tmpDir, "notch.png");
const compositePath = path.join(tmpDir, "composite.png");

try {
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    `--window-size=${VIEWPORT}`,
    "--virtual-time-budget=8000",
    `--screenshot=${rawPath}`,
    url,
  ]);
  if (!fs.existsSync(rawPath)) {
    throw new Error(`Chrome hat kein Screenshot geschrieben: ${rawPath}`);
  }

  execFileSync("magick", [
    rawPath,
    "-crop",
    CONTENT_CROP,
    "+repage",
    "-resize",
    `${SCREEN_SIZE}!`,
    contentPath,
  ]);
  execFileSync("magick", [
    templatePath,
    "-crop",
    NOTCH_CROP,
    "+repage",
    notchPath,
  ]);
  execFileSync("magick", [
    templatePath,
    contentPath,
    "-geometry",
    SCREEN_GEOMETRY,
    "-composite",
    notchPath,
    "-geometry",
    NOTCH_GEOMETRY,
    "-composite",
    compositePath,
  ]);
  execFileSync("cwebp", ["-q", "85", compositePath, "-o", outputPath]);

  console.log(`✅ ${path.relative(projectRoot, outputPath)} (Quelle: ${url})`);
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
