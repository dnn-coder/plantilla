const express = require('express');
//Routers
const { usuariosRouter } = require('./routes/usuarios.routes');
const { estudiantesRouter } = require('./routes/estudiantes.routes');

// Global err controller
const { globalErrorHandler } = require('./controllers/error.controller');

const { AppError } = require('./utils/appError.util');

// iniciar la funcion app
const app = express();

app.use(express.json());

app.use('/api/v1/usuarios', usuariosRouter);
app.use('/api/v1/estudiantes', estudiantesRouter);

// manejador global de errores

app.all('*', (req, res, next) => {
    next(
        new AppError(
            `${req.method} ${req.originalUrl} not found in this server`,
            404
        )
    );
});

app.use(globalErrorHandler);

module.exports = { app };