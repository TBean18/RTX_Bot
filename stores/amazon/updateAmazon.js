const puppeteer = require("puppeteer");
const { getPriceFromSelector } = require("../../util/puppet");
const color = require("../../util/color");
const LINKS = require("./links");

function updateAmazon(b, p) {
  //Initilize variables
  const browser = b;
  const page = p;
  let inStock = true;
  let price = "n/a";

  //Loop through the links
  for (let key of Object.keys(LINKS)) {
    getAmazonDataFromLink(key, LINKS[key]);
  }

  async function getAmazonDataFromLink(product, link) {
    //Go to the page and wait for the product title to load
    try {
      await page.goto(link);
    } catch (err) {
      return console.log(color.error(link, "is Unavailable"));
    }

    await page.waitForSelector("#productTitle");

    //Get availability
    if ((await page.$("#unqualifiedBuyBox")) !== null)
      // return if unavailable since there is no price to parse
      return console.log(color.error(product, "is Unavailable"));

    //Get Price For Item
    try {
      price = await getPriceFromSelector(page, "#price_inside_buybox");
      console.log(color.success(product, "is Available for", price));
    } catch (error) {
      console.log(color.error(err));
    }
  }
}
module.exports = updateAmazon;
