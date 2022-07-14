const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

// INDEX
//router.get('/', productsController.productCart)

//ESTO ES LO QUE VA DESPUES DE /PRODUCTOS!!!!!

//Ruta de Carrito de Compras
router.get('/productCart', productsController.productCart);

// DETALLE DEL PRODUCTO
router.get('/productDetail', productsController.productDetail);

module.exports = router;