//Models
const { Estudiantes } = require('../models/estudiantes.model');
const { Usuarios } = require('../models/usuario.model');
const { catchAsync } = require('../utils/catchAsync.util');

//controladores
const getAllUsers = catchAsync(async(req, res, next) => {
    const usuarios = await Usuarios.findAll({
        include: Estudiantes,
    });
    res.status(200).json({
        status: 'success',
        message: 'lista de usuarios ok...',
        usuarios,
    });
});
const createUser = catchAsync(async(req, res, next) => {
    const {
        codigo,
        cedula,
        nombres,
        sexo,
        cargo,
        email,
        usuario,
        password,
        tipo,
        status,
    } = req.body;
    const newUser = await Usuarios.create({
        codigo,
        cedula,
        nombres,
        sexo,
        cargo,
        email,
        usuario,
        password,
        tipo,
        status,
    });

    res.status(201).json({
        status: 'success',
        newUser,
    });
});

const getUserById = catchAsync(async(req, res, next) => {
    const { codigo } = req.params;
    const usuarios = await Usuarios.findOne({
        where: { codigo },
        include: Estudiantes,
    });

    if (!usuarios) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }
    res.status(200).json({
        status: 'success',
        usuarios,
    });
});

const updateUser = catchAsync(async(req, res, next) => {
    const { codigo } = req.params;
    const { nombres, sexo, cargo, email, password, tipo, status } = req.body;
    const usuarios = await Usuarios.findOne({ where: { codigo } });

    if (!usuarios) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }

    await usuarios.update({
        nombres,
        sexo,
        cargo,
        email,
        password,
        tipo,
        status,
    });

    res.status(204).json({
        status: 'success',
        usuarios,
    });
});

const deleteUser = catchAsync(async(req, res, next) => {
    const { codigo } = req.params;
    const usuarios = await Usuarios.findOne({ where: { codigo } });

    if (!usuarios) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }

    await usuarios.update({ status: 'ELIMINADO' });

    res.status(202).json({
        status: 'success',
    });
});

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
};