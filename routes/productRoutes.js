const express = require('express');
const router = express.Router();

//const upload = require('../middlewares/multer');

const productsController = require('../controllers/productsController');


//router.post('/storeProduct', productsController.storeProduct);


//RUTAS A VISTAS

router.get("/productCart", productsController.productCart);
router.get("/productDetail/:id", productsController.productDetail);
router.get("/products/:id/edit", productsController.editProduct);
router.get("/createProduct", productsController.createProduct);
router.get("/products/:id", productsController.getProductById);
/*

//RUTAS CRUD
// RUTA Listado de productos
router.get("/products", productsController.getAllProducts);

// RUTA Formulario de creación de productos
router.get("/createProduct", productsController.createProduct);
//router.post('/', upload.single('image'), productsController.storeProduct);
//router.post("/", validate, upload.array("image", 3),productsController.storeProduct);

// RUTA Detalle de un producto particular
router.get("/products/:id", productsController.getProductById);

//  /products (POST)
// RUTA Acción de creación (a donde se envía el formulario)
//router.post('/storeProduct', productsController.storeProduct);

//RUTA Formulario de edición de productos
router.get("/products/:id/edit", productsController.editProduct);

 //RUTA Acción de edición (a donde se envía el formulario)
router.put("/products/:id", productsController.updateProduct);

 //RUTA Acción de borrado
router.delete("/products/:id", productsController.deleteProduct);
*/
module.exports = router;