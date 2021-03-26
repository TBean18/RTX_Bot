const puppeteer = require("puppeteer");
const chalk = require("chalk");
const updateAmazon = require("./stores/amazon/updateAmazon");

//Introduction
console.log(chalk.green("RTX BOT Written By Bean"));

//Initial Run

//Start up the Pupppeteer Client
async function startPuppeteerClient() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://amazon.com");
  return browser;
  //   await browser.close();
}
const browser = startPuppeteerClient().then(async (browser) => {
  const page = await browser.newPage().catch((err) => console.log(err));
  updateAmazon(browser, page);
});

//Have setTimeouts on all of the update store functions
