const updateAmazon = require("./stores/amazon/updateAmazon");

function updateStore(store, pages) {
  switch (store) {
    //Amazon Case
    case 0:
      return updateAmazon(pages[0]);
  }
}

module.exports = updateStore;
