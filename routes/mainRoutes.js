const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');




router.get('/', mainController.index);
router.get('/index', mainController.index)
router.get('/index', mainController.ofertaProducts)
router.get('/index', mainController.novedadesProducts)

router.get

// router.get('*', mainController.sendPageNotFound)

module.exports = router;