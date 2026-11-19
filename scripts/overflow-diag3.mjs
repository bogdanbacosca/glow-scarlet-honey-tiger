import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const resp = await page.goto("http://127.0.0.1:8080/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);
const diag = await page.evaluate(() => {
  const cur = document.querySelector(".photo-cursor");
  return {
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    htmlOverflowX: getComputedStyle(document.documentElement).overflowX,
    cursorTransform: cur ? cur.style.transform : null,
    cursorRect: cur ? (() => { const r = cur.getBoundingClientRect(); return { l: r.left, r: r.right }; })() : null,
    hasClamp: typeof window === "object",
  };
});
console.log(JSON.stringify(diag, null, 2));
await browser.close();
