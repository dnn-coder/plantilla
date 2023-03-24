const { body, validationResult } = require('express-validator');

const { AppError } = require('../utils/appError.util');

const checkResult = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMsgs = errors.array().map(err => err.msg);

        const message = errorMsgs.join('. ');

        return next(new AppError(message, 400));
    }
    next();
};

const createUserValidators = [
    body('codigo').notEmpty().withMessage('El campo codigo no puede estar vacio'),
    body('cedula').notEmpty().withMessage('El campo cedula no puede estar vacio'),
    body('nombres')
    .notEmpty()
    .withMessage('El campo nombres no puede estar vacio'),
    body('sexo').notEmpty().withMessage('El campo sexo no puede estar vacio'),
    body('cargo').notEmpty().withMessage('El campo cargo no puede estar vacio'),
    body('email').isEmail().withMessage('Tienes que ingresar un correo valido'),
    body('password')
    .isLength({ min: 8 })
    .withMessage('la contrasena debe tener al menos 8 caracteres')
    .isAlphanumeric()
    .withMessage('Tu contrasena debe tener numeros y letras'),
    body('tipo').notEmpty().withMessage('El campo tipo no puede estar vacio'),
    checkResult,
];

module.exports = { createUserValidators };