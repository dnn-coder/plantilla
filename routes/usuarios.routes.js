const express = require('express');

//controllers
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/usuarios.controller');

//Middlewares
const {
    createUserValidators,
} = require('../middlewares/validators.middleware');

const { userExists } = require('../middlewares/usuarios.middlewares');
const usuariosRouter = express.Router();
//definir mis endpoints

usuariosRouter.get('/', getAllUsers);

usuariosRouter.post('/', createUserValidators, createUser);

usuariosRouter.get('/:codigo', userExists, getUserById);

usuariosRouter.patch('/:codigo', userExists, updateUser);

usuariosRouter.delete('/:codigo', userExists, deleteUser);

module.exports = { usuariosRouter };