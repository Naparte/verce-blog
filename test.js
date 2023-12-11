import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.baidu.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();

console.log('ssss')