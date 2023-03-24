const { Sequelize, DataTypes } = require('sequelize');
//conectarme a mi base de datos
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    port: 5432,
    database: 'recuerdodb',
    logging: false,
});

module.exports = { db, DataTypes };