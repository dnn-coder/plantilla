const express = require('express');

//controllers
const {
    getAllStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
} = require('../controllers/estudiantes.controller');

const estudiantesRouter = express.Router();
//definir mis endpoints

estudiantesRouter.get('/', getAllStudents);
estudiantesRouter.post('/', createStudent);
estudiantesRouter.get('/:idest', getStudentById);
estudiantesRouter.patch('/:idest', updateStudent);
estudiantesRouter.delete('/:idest', deleteStudent);

module.exports = { estudiantesRouter };