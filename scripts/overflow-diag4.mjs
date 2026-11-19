import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);
const diag = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const bad = [];
  const walk = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);
  let n;
  while ((n = walk.nextNode()) && bad.length < 25) {
    const r = n.getBoundingClientRect();
    if (r.right > vw + 1 || r.left < -1) {
      bad.push({
        tag: n.tagName, cls: n.className || "",
        l: Math.round(r.l * 100) / 100, r: Math.round(r.r * 100) / 100,
        t: n.style.transform || getComputedStyle(n).transform || "none",
        pos: getComputedStyle(n).position,
        ow: Math.round((n.offsetWidth + Number.EPSILON) * 100) / 100,
      });
    }
  }
  return { vw, scrollWidth: document.documentElement.scrollWidth, bodyMargin: getComputedStyle(document.body).margin, bad };
});
console.log(JSON.stringify(diag, null, 2));
await browser.close();
