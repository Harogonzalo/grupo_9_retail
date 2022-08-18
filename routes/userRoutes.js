const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const userValidate = require('../middlewares/userValidate'); 

// const registerValidations = require("../middlewares/validationsForms/registerValidations.js");
// const loginValidations = require("../middlewares/validationsForms/loginValidations");
const unAuthMiddleware = require("../middlewares/access/unAuthorizedmdlwr");
const authMiddleware = require('../middlewares/access/AuthorizedMd')


router.get("/register", userControllers.register);
router.post(
  "/register",
  upload.single("avatar"),
  registerValidations,
  userControllers.userStore
);

router.get("/login", unAuthMiddleware, userControllers.login);
router.post("/login", userValidate, userControllers.processLogin);


// INDEX
//router.get('/', usersController.index)

// vista del login
router.get('/login', usersController.login);

// vista del registro
router.get('/register', usersController.register);

router.post('/register', express.urlencoded( {extended: false}), userValidate, usersController.userStore);

module.exports = router;