const { body } = require('express-validator');
const usersJson = require('../database/jsonTable');
const bcryptjs= require('bcryptjs');
const usersModel = usersJson('users');

let validatorMiddelware = {
    validacionCreateUsers: [
        body('fullName').notEmpty().withMessage('Debe completar el campo nombre'),
        body('user').notEmpty().withMessage('Debe completar el campo User'),
        body('password').isLength({min: 6}).withMessage('La contraseña debe ser mayor a 6 caracteres'),
        body('confirmPassword').isLength({min: 6}).withMessage('La confirmacion de contraseña debe ser mayor a 6 caracteres'),
        body('image')
    ],
    validacionLoginUsers: [
        body('user')
        .notEmpty().withMessage('Debe completar este campo').bail()
        .custom((value, {req}) => {
            let user= value;
            let users = usersModel.readFile();
            let userFilter = users.filter(person => person.user == user)
            if(userFilter.length == 0){ 
                throw new Error ('El nombre de usuario que has introducido no pertenece a ninguna cuenta')
                }
                return true;
        }).bail(),

        body('password')
        //.isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres').bail()
            .custom((value, {req}) => {
            let password= value;
            let users = usersModel.readFile();
            let userFilter = users.filter(person => bcryptjs.compareSync (password, person.password) == true)
            if(userFilter.length == 0){  
                throw new Error ('La contraseña es incorrecta')
                }
                return true;
        })

    ]
}

module.exports = validatorMiddelware;



module.exports = [
    body('username')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('El nombre debe tener al menos 3 caracteres'),
    body('password')
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage('La contraseña debe tener almenos 6 caracteres'),
    body('email')
        .notEmpty()
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