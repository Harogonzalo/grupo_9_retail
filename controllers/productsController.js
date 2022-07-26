const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const productListPath = path.resolve(__dirname, "../data/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath, "utf8"));

const productsController = {
  search: (req, res) => {
    let productoBuscado = req.query.search;
    let productResults = [];
    
    for (let i=0; i < productList.length; i++){
      if (productList[i].name.includes(productoBuscado)){
        productResults.push(productList[i])
      }
    }
    console.log(productResults)
    res.render('products/searchProducts', {productSearch: productResults})
  },
  editProduct: (req, res) => {
    res.render("products/editProduct", { productsDetail: productList });
  },
  productCart: (req, res) => {
    res.render("products/productCart", { products: productList });
},

  productDetail: (req, res) => {
    let id = req.params.id
    let productoFiltrado = productList.find((producto) => producto.id == id )
    
    // console.log(productoFiltrado)
    res.render("products/productDetail",{productoFiltrado });
  },

  getAllProducts: (req, res) => {
    res.render("index", {
      products: productList,
    });
  },
  getProductById: (req, res) => {
    let id = req.params.id;

    res.send("Get product by id: " + id);
  },
  createProduct: (req, res) => {
    res.render("products/createProducts");
  },
  storeProduct: (req, res) => {
    let product = req.body;

    product.id = uuidv4();

    productList.push(product);

    fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

    res.redirect("/products");
  },
  editProduct: (req, res) => {
    let id = req.params.id;
    let product = productList.find((product) => product.id == id);

    res.render("products/editProduct", {
      products: product,
    });
  },
  updateProduct: (req, res) => {
    let id = req.params.id;
    let newProduct = req.body;

    newProduct.id = id;

    for (let index = 0; index < productList.length; index++) {
      const element = productList[index];
      if (element.id == id) {
        productList[index] = newProduct;
      }
    }

    fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

    res.redirect("/products");
  },
  deleteProduct: (req, res) => {
    let id = req.params.id;
    console.log("deleteProduct", id);
    for (let index = 0; index < productList.length; index++) {
      const element = productList[index];
      if (element.id == id) {
        productList.splice(index, 1);
      }
    }

    fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

    res.redirect("/products");
  },
};

module.exports = productsController;
