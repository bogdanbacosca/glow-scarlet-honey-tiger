import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const resp = await page.goto("http://127.0.0.1:8080/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1000);
const diag = await page.evaluate(() => ({
  deScroll: document.documentElement.scrollWidth,
  deClient: document.documentElement.clientWidth,
  bodyScroll: document.body.scrollWidth,
  bodyClient: document.body.clientWidth,
  htmlComputed: getComputedStyle(document.documentElement).overflow,
  bodyComputed: getComputedStyle(document.body).overflow,
  maxRight: (() => {
    let max = 0, el = null;
    const walk = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);
    let n;
    while ((n = walk.nextNode())) {
      const r = n.getBoundingClientRect();
      if (r.right > max) { max = r.right; el = n; }
    }
    return { max, tag: el?.tagName, cls: el?.className, id: el?.id };
  })(),
}));
console.log(JSON.stringify(diag, null, 2));
await browser.close();
