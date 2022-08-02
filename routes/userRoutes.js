const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const userValidate = require('../middlewares/userValidate'); 

// INDEX
//router.get('/', usersController.index)

// vista del login
router.get('/login', usersController.login);

// vista del registro
router.get('/register', usersController.register);

router.post('/register', express.urlencoded( {extended: false}), userValidate, usersController.userStore);

module.exports = router;