const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://monkeytype.com/");
  const grabpara = await page.evaluate(() => {
    const atags = [];
    const pgTag = document.querySelectorAll(".word");
    pgTag.forEach((element) => {
      atags.push(element.innerText);
    });
    for (i = 0; i < atags.length; i++) {
      page.type(".pgTag", `${atags[i]}`);
    }
    return atags;
  });
  console.log(grabpara);
  await browser.close();
})();
