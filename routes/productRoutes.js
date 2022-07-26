const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multer');
const validateProduct = require('../middlewares/productValidate');

// RUTA Listado de productos */
router.get("/", productsController.getAllProducts);

//RUTAS A VISTAS

router.get("/productCart", productsController.productCart);
router.get('/search', productsController.search)
// RUTA Formulario de creación de productos
router.get("/create", productsController.createProduct);
router.post('/create', upload.array ('image', 5), validateProduct, productsController.storeProduct);



// RUTA Detalle de un producto particular
router.get("/:id", productsController.productDetail);
router.get("/products/:id", productsController.getProductById);
//RUTA Formulario de edición de productos
router.get("/:id/edit", productsController.editProduct);
router.post('/:id/edit', upload.array ('image', 5), validateProduct, productsController.updateProduct);
/*
 //RUTA Acción de edición (a donde se envía el formulario)
router.put("/products/:id", productsController.updateProduct);

 //RUTA Acción de borrado
router.delete("/products/:id", productsController.deleteProduct);
*/
module.exports = router;