const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://benjamin-endale.github.io/Special.Topics/Question_6/",
    {
      waitUntil: "domcontentloaded",
      timeout: 30000, //
    }
  );

  const myPage = await page.evaluate(() => {
    const titlepage = document.querySelector("title").innerText;
    const a = document.querySelectorAll(".aTag");
    let hrefCollection = [];

    a.forEach((anchor) => {
      hrefCollection.push(anchor.href);
    });

    return {
      title: titlepage,
      hrefs: [...new Set(hrefCollection)],
    };
  });

  console.log("Website Title:", myPage.title);
  console.log("Unique Href Collection:", myPage.hrefs);

  await browser.close();
})();
