const fs = require("fs");
const path = require("path");

const productListPath = path.resolve(__dirname, "../data/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath, "utf8"));

const mainController = {
  index: (req, res) => {
    // if (req.session.userLoged) {
    //   res.render("index", {
    //     user: req.session.userLoged,
    //   }, { products: productList });
    // } else {
    //   res.render("index", { products: productList });
    // }
    res.render("index", { products: productList });
  },
  
  //TODAVIA NO SE APLICA
  ofertaProducts: (req, res) => {
    let ofertaProduct = productList.filter((i) => i.category == "ofertas");
    res.render("index", { ofertaProduct });
  },
  novedadesProducts: (req, res) => {
    let novedadesProduct = productList.filter((i) => i.category == "novedades");
    res.render("index", { novedadesProduct });
  },
};
module.exports = mainController;
