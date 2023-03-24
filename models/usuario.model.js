const { db, DataTypes } = require('../utils/databse.util');
//Crear nuestro primer modelo (tabla)
const Usuarios = db.define('usuarios', {
    codigo: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cedula: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'ACTIVO',
    },
});

module.exports = { Usuarios };