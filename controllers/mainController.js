const fs = require("fs");
const path = require("path");

const productListPath = path.resolve(__dirname, "../data/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath, "utf8"));

const mainController = {
  index: (req, res) => {
    res.render("index", { products: productList });
},
};
module.exports = mainController;
