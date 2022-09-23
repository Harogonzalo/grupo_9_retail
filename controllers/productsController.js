const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

// const db = require("../database/models");
// const { Op } = require("sequelize");
// const sequelize = db.sequelize;
// const productList = db.Products

const productListPath = path.resolve(__dirname, "../data/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath, "utf8"));

const productsController = {
  // getAllProducts: async (req, res) => {
  //   // listar todos
  //   await db.products.findAll()
  //     .then((products) => {
  //       res.render("index", { products });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  getAllProducts: (req, res) => {
    res.render("index", {
      products: productList,
    });
  },
  getProductById: (req, res) => {
    let id = req.params.id;

    res.send("Get product by id: " + id);
  },
  // Para filtrar por category
  productFilter: async (req, res) => {
    const clasificacion = req.params.category;
    const productList = await db.Products.findAll({
      where: {
        category: clasificacion,
      },
    });
    res.render("products/allProducts", {
      //renderizamos la vista de todos los productos
      products: productList,
    });
  },

  masVendidos: (req, res) => {
    res.render("products/masVendidos", { products: productList });
  },

  search: (req, res) => {
    let productoBuscado = req.query.search;
    let productResults = [];

    for (let i = 0; i < productList.length; i++) {
      if (productList[i].name.includes(productoBuscado)) {
        productResults.push(productList[i]);
      }
    }
    if (req.session.userLoged) {
      res.render("products/searchProducts", {
        productSearch: productResults,
        user: req.session.userLoged,
      });
    } else {
      res.render("products/searchProducts", { productSearch: productResults });
    }
  },

  productCart: (req, res) => {
    if (req.session.userLoged) {
      res.render("products/productCart", {
        products: productList,
        user: req.session.userLoged,
      });
    } else {
      res.render("products/productCart", { products: productList });
    }
  },

  productDetail: (req, res) => {
    let id = req.params.id;
    let productoFiltrado = productList.find((producto) => producto.id == id);

    // console.log(productoFiltrado)
    if (req.session.userLoged) {
      res.render("products/productDetail", {
        productoFiltrado,
        user: req.session.userLoged,
      });
    } else {
      res.render("products/productDetail", { productoFiltrado });
    }
  },

  createProduct: (req, res) => {
    res.render("products/create");
  },
  storeProduct: (req, res) => {
    const resultValidation = validationResult(req);

    console.log(resultValidation);
    if (resultValidation.errors.length > 0) {
      return res.render("products/create", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      let product = req.body;
      product.imagen = "/img/uploads/" + req.files[0].filename;

      product.id = Date.now();

      productList.push(product);

      fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

      res.redirect("/products");
    }
  },

  editProduct: (req, res) => {
    let id = req.params.id;
    let productoFiltrado = productList.find((producto) => producto.id == id);

    res.render("products/editProduct", { productoFiltrado });
  },
  updateProduct: (req, res) => {
    let id = req.params.id;
    let newProduct = req.body;
    newProduct.id = id;
    if (req.files === undefined) {
      newProduct.imagen = productList[id - 1].imagen;
    } else {
      newProduct.imagen = "/img/uploads/" + req.files[0].filename;
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
