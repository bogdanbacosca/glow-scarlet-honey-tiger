#!/usr/bin/env node
import { chromium } from "playwright";

const outDir = "C:/workspace/screenshots";
const viewports = [
  { name: "desktop", width: 1280, height: 800, file: "smoke-dev-desktop.png" },
  { name: "mobile", width: 390, height: 844, file: "smoke-dev-mobile.png" },
];

const fs = await import("node:fs");
fs.mkdirSync(outDir, { recursive: true });

const rawArgs = process.argv.slice(2);
const positional = rawArgs.filter((a) => !a.startsWith("--"));
const url = positional[0] || "http://127.0.0.1:8080/";
const outJson = positional[1] || "/tmp/verdict.json";
const overflowInspector = rawArgs.includes("--inspect-overflow");
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const results = {};

for (const vp of viewports) {
  const errors = { consoleErrors: [], pageErrors: [] };
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  page.on("console", (m) => { if (m.type() === "error") errors.consoleErrors.push(m.text()); });
  page.on("pageerror", (e) => errors.pageErrors.push(String(e?.message || e)));
  const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForTimeout(1000);
  const status = resp?.status() ?? 0;
  const title = await page.title();
  const bodyText = await page.locator("body").innerText().catch(() => "");
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  let overflowing = [];
  if (overflowInspector && horizontalOverflow) {
    overflowing = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      const bad = [];
      let node;
      while ((node = walk.nextNode()) && bad.length < 40) {
        const r = node.getBoundingClientRect();
        if (r.right > vw + 2 || r.left < -2) bad.push({ tag: node.tagName, cls: node.className || "", id: node.id || "", left: Math.round(r.left), right: Math.round(r.right) });
      }
      return bad;
    });
  }
  await page.screenshot({ path: `${outDir}/${vp.file}`, fullPage: false });
  results[vp.name] = {
    status, title, bodyTextLen: bodyText.length,
    bodyTextPrefix: bodyText.trim().slice(0, 200),
    horizontalOverflow, consoleErrors: errors.consoleErrors, pageErrors: errors.pageErrors,
    screenshot: `${outDir}/${vp.file}`,
  };
  if (overflowInspector && horizontalOverflow) results[vp.name].overflowing = overflowing;
  await page.close();
}
await browser.close();

const verdict = { url, viewports: results };
import { writeFileSync } from "node:fs";
writeFileSync(outJson, JSON.stringify(verdict, null, 2));
console.log(`smoke-check: ${url} -> ${outJson}`);

let fail = false;
for (const [name, r] of Object.entries(results)) {
  if (r.status !== 200) { console.error(`${name}: HTTP ${r.status}`); fail = true; }
  if (r.bodyTextLen === 0) { console.error(`${name}: no visible body text`); fail = true; }
  if (r.consoleErrors.length) { console.error(`${name}: console errors:`, r.consoleErrors); fail = true; }
  if (r.pageErrors.length) { console.error(`${name}: page errors:`, r.pageErrors); fail = true; }
  if (r.horizontalOverflow) { console.error(`${name}: horizontal overflow`); fail = true; }
}
process.exitCode = fail ? 1 : 0;
