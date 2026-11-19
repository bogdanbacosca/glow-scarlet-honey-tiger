import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);
const diag = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const cand = [];
  const walk = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);
  let n;
  while ((n = walk.nextNode()) && cand.length < 40) {
    const r = n.getBoundingClientRect();
    if (r.right > vw + 0.5 || r.left < -0.5) {
      cand.push({ tag: n.tagName, cls: n.className || "", l: Math.round(r.left * 100) / 100, r: Math.round(r.right * 100) / 100, pos: getComputedStyle(n).position });
    }
  }
  cand.sort((a, b) => b.r - a.r);
  return { vw, scrollWidth: document.documentElement.scrollWidth, top: cand.slice(0, 12) };
});
console.log(JSON.stringify(diag, null, 2));
await browser.close();
