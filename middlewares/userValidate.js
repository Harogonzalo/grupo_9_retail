const { body } = require('express-validator');

const validateUser = [
    body('username')
        .isLength({ min: 3 })
        .withMessage('El nombre debe tener al menos 3 caracteres'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('La contraseña debe tener almenos 6 caracteres'),
    body('email')
        .isEmail()
        .withMessage('Debe ser un email valido').bail().isEmail().withMessage('Debes escribir un formato de email aceptado'),  //bail es para unir otra validacion
];

        

    // body('images')
    //     .custom((value, { req }) => {
    //         let images = req.files;

    //         if (images.length < 1) {
    //             throw new Error('Debe subir al menos una imagen');
    //         }
    //         return true;
    //     })

module.exports = validateUser;