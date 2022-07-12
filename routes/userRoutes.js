const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// INDEX
//router.get('/', usersController.index)

// vista del login
router.get('/login', usersController.login);

// vista del registro
router.get('/register', usersController.register);

//Vista Edit user admin
router.get('/editProduct',usersController.editProduct);


module.exports = router;