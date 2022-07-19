const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/index', mainController.index)
//router.get('products/productCart', mainController.productCart)
//router.get('products/description', mainController.productDetail)

// router.get('*', mainController.sendPageNotFound)

module.exports = router;