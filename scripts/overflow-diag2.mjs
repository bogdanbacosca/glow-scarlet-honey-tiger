import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1000);
const diag = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const bad = [];
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
  let n;
  while ((n = walk.nextNode())) {
    const r = n.getBoundingClientRect();
    // layout overflow: untransformed offset geometry beyond viewport
    const o = n.offsetLeft + n.offsetWidth - n.offsetLeft;
    if (n.offsetWidth > 0 && (n.offsetLeft < -1 || n.offsetLeft + n.offsetWidth > vw + 1)) {
      bad.push({ tag: n.tagName, cls: n.className, id: n.id, ol: n.offsetLeft, ow: n.offsetWidth, vw });
    }
  }
  return { vw, bad: bad.slice(0, 30) };
});
console.log(JSON.stringify(diag, null, 2));
await browser.close();
