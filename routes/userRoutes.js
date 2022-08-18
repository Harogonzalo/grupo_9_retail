const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const userValidate = require('../middlewares/userValidate'); 

// const registerValidations = require("../middlewares/validationsForms/registerValidations.js");
// const loginValidations = require("../middlewares/validationsForms/loginValidations");
// const unAuthMiddleware = require("../middlewares/unAuthorizedmdlwr");
// const authMiddleware = require('../middlewares/AuthorizedMd')


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

// vista del registro
router.get('/register', usersController.register);

router.post('/register', express.urlencoded( {extended: false}), userValidate, usersController.userStore);

module.exports = router;