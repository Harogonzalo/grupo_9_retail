const express = require('express');
const router = express.Router();

//const upload = require('../middlewares/multer');

const productsController = require('../controllers/productsController');

//Ruta de Carrito de Compras
router.get('/productCart', productsController.productCart);

// DETALLE DEL PRODUCTO
router.get('/productDetail/:id', productsController.productDetail);
router.get('/editProduct', productsController.editProduct);

 // Route to get all products
 router.get('/', productsController.getAllProducts);

 // Route create a new product
 router.get('/create', productsController.createProduct);
 //router.post('/', upload.single('image'), productsController.storeProduct);
 //router.post('/', upload.array('image', 3), productsController.storeProduct);

 // Route to get a product by id
 router.get('/:id', productsController.getProductById);

 // Route edit a product
 router.get('/edit/:id', productsController.editProduct);
 router.put('/:id', productsController.updateProduct);

 // Route to delete a product
 router.delete('/:id', productsController.deleteProduct);

module.exports = router;