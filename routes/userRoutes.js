const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const userValidate = require('../middlewares/userValidate'); 
const loginValidations = require("../middlewares/loginValidations");
const unAuthMiddleware = require("../middlewares/access/unAuthorizedmdlwr"); 
const authMiddleware = require('../middlewares/access/AuthorizedMd')

// router.get("/register", userController.userStore);
// router.post(
//   "/register",
//   upload.single("avatar"),
//   registerValidations,
//   userController.userStore
// );

// router.get("/login", unAuthMiddleware, userController.login);
// router.post("/login", userValidate, userController.processLogin);


// INDEX
//router.get('/', usersController.index)

// vista del login
router.get('/login', usersController.login);

router.post("/login", loginValidations, usersController.processLogin);

// vista del registro
router.get('/register', usersController.register);

router.post('/register', express.urlencoded( {extended: false}), userValidate, usersController.userStore);

// router.get("/logout", userController.processLogout); 


module.exports = router;