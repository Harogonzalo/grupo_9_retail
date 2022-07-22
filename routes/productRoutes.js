const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multer');
const validateProduct = require('../middlewares/productValidate');

//RUTAS A VISTAS

router.get("/productCart", productsController.productCart);
router.get("/productDetail/:id", productsController.productDetail);
//RUTA Formulario de edición de productos
router.get("/products/:id/edit", productsController.editProduct);
// RUTA Formulario de creación de productos
router.get("/createProduct", productsController.createProduct);
router.post('/createProduct', upload.array ('images', 5), validateProduct, productsController.updateProduct);

// RUTA Detalle de un producto particular
router.get("/products/:id", productsController.getProductById);
/*
// RUTA Listado de productos
router.get("/products", productsController.getAllProducts);

 //RUTA Acción de edición (a donde se envía el formulario)
router.put("/products/:id", productsController.updateProduct);

 //RUTA Acción de borrado
router.delete("/products/:id", productsController.deleteProduct);
*/
module.exports = router;