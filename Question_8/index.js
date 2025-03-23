const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://monkeytype.com/");
  -(await page.evaluate(() => {
    const words = [];
    const word_active = document.querySelectorAll(".word");
    let actualWord = word_active.document.querySelectorAll("letter").innerText;
    // actualWord.forEach((letter) => {
    //   words.push[letter];
    // });
    console.log(actualWord);
  }));
})();
