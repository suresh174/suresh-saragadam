const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const chrome =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "resume", "Suresh-Saragadam-Resume.html");
const outPublic = path.join(root, "public", "Suresh-Saragadam-Resume.pdf");
const outDownloads = path.join(
  process.env.USERPROFILE || "",
  "Downloads",
  "Suresh-Saragadam-Resume.pdf",
);

if (!fs.existsSync(chrome)) {
  console.error("Chrome not found at", chrome);
  process.exit(1);
}

if (!fs.existsSync(htmlPath)) {
  console.error("Resume HTML missing:", htmlPath);
  process.exit(1);
}

const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");
const tmpOut = path.join(root, "resume", "_tmp-resume.pdf");

try {
  if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut);
} catch {
  /* ignore */
}

execFileSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${tmpOut}`,
    "--print-to-pdf-no-header",
    fileUrl,
  ],
  { stdio: "inherit" },
);

if (!fs.existsSync(tmpOut)) {
  console.error("PDF was not created");
  process.exit(1);
}

fs.copyFileSync(tmpOut, outPublic);
if (outDownloads) {
  try {
    fs.copyFileSync(tmpOut, outDownloads);
  } catch (err) {
    console.warn("Could not copy to Downloads:", err.message);
  }
}
fs.unlinkSync(tmpOut);

console.log("Wrote", outPublic);
if (fs.existsSync(outDownloads)) console.log("Wrote", outDownloads);
