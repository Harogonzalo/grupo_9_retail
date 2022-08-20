const { body } = require("express-validator");

module.exports = [
  body("username")
    .notEmpty()
    .withMessage("debe ingresar un email")
    // .bail()
    // .isEmail()
    // .withMessage("debe ingresar un email valido") para mas tarde-
    // .bail(),
,
  body("password")
    .notEmpty()
    .withMessage("debe ingresar una contraseña")
    // .bail()
    // .isLength({ min: 8 })
    // .withMessage("la contraseña debe tener 8 caracteres minimo")     Ni idea.
    // .bail(),
];
