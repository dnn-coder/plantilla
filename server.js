const { app } = require('./app');
const { Estudiantes } = require('./models/estudiantes.model');
const { Usuarios } = require('./models/usuario.model');

//Utils
const { db } = require('./utils/databse.util');

db.authenticate()
    .then(() => console.log('Base de datos autenticada'))
    .catch(err => console.log(err));

// Estableciendo relacion entre modelos
// 1 usuario <----> M estudiantes
Usuarios.hasMany(Estudiantes, { foreignKey: 'usuarios_codigo' });
Estudiantes.belongsTo(Usuarios);

db.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log(err));

app.listen(4000, () => {
    console.log('Express app running!!!');
});