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
    res.render('products/searchProducts', {productSearch: productResults})
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
    res.render("products/create");
  },
  storeProduct: (req, res) => {
    let product = req.body;
    product.imagen =  "/img/uploads/"+ req.files[0].filename

    product.id = uuidv4();

    productList.push(product);

    fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

    res.redirect("/products");
  }, editProduct: (req, res) => {
    let id = req.params.id
    let productoFiltrado = productList.find((producto) => producto.id == id )

    res.render("products/editProduct", {productoFiltrado });
  },
  updateProduct: (req, res) => {
    let id = req.params.id;
    let newProduct = req.body;
    newProduct.id = id;
    if (req.files === undefined) {
      newProduct.imagen = productList[id - 1].imagen
    } else {
      newProduct.imagen = "/img/uploads/"+ req.files[0].filename
    }


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
