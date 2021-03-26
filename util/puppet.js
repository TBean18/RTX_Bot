//Dont know if this is really needed here or not
const puppeteer = require("puppeteer");

exports.getPriceFromSelector = async function (page, selector) {
  await page.waitForSelector(selector);
  let element = await page.$(selector);
  let value = await page.evaluate((ele) => ele.textContent, element);
  return value;
};
