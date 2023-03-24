const { db, DataTypes } = require('../utils/databse.util');
//Crear nuestro primer modelo (tabla)
const Estudiantes = db.define('estudiantes', {
    idest: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    codest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cedest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expedido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pnomest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    snomest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    papeest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sapeest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexoest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direcest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    barrio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    municipio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fnacest: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    observacionest: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    claveest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuarios_codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'ACTIVO',
    },
});

module.exports = { Estudiantes };