const express = require('express');
const router = express.Router();
// Validaciones
const upload = require('../middlewares/multer');
const validateProduct = require('../middlewares/productValidate');



const productsController = require('../controllers/productsController');

// RUTA Listado de productos */
router.get("/", productsController.getAllProducts);

// RUTA Detalle de un producto particular
router.get("/:id", productsController.productDetail);
router.get("/products/:id", productsController.getProductById);

// RUTA Busqueda de un producto particular
router.get('/search', productsController.search)

//RUTAS A VISTAS
router.get("/masVendidos", productsController.masVendidos);
// Route to get a product by category
// router.get("/category", productsController.productFilter);
router.get("/productCart", productsController.productCart);

// RUTA Formulario de creación de productos
router.get("/create", productsController.createProduct);
router.post('/create', upload.array ('image', 5), validateProduct, productsController.storeProduct);

//RUTA Formulario de edición de productos
router.get("/:id/edit", productsController.editProduct);
router.post('/:id/edit', upload.array ('image', 5), validateProduct, productsController.updateProduct);

//RUTA Acción de borrado
router.delete("/delete/:id", productsController.deleteProduct);

 //RUTA Acción de edición (a donde se envía el formulario)
router.put("/products/:id", productsController.updateProduct);


module.exports = router;