// Models
const { Usuarios } = require('../models/usuario.model');

// Utils
const { AppError } = require('../utils/appError.util');
const { catchAsync } = require('../utils/catchAsync.util');

const userExists = catchAsync(async(req, res, next) => {
    const { codigo } = req.params;

    const usuarios = await Usuarios.findOne({ where: { codigo } });

    if (!usuarios) {
        return next(new AppError('user not found', 404));
    }
    req.usuarios = usuarios;
    next();
});
module.exports = { userExists };