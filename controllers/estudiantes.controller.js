//Models
const { Estudiantes } = require('../models/estudiantes.model');
const { Usuarios } = require('../models/usuario.model');
const { catchAsync } = require('../utils/catchAsync.util');

const getAllStudents = catchAsync(async(req, res, next) => {
    const estudiantes = await Estudiantes.findAll({
        include: Usuarios,
    });
    res.status(200).json({
        status: 'success',
        message: 'lista de estudiantes ok...',
        estudiantes,
    });
});

const createStudent = catchAsync(async(req, res, next) => {
    const {
        idest,
        codest,
        cedest,
        expedido,
        pnomest,
        snomest,
        papeest,
        sapeest,
        sexoest,
        direcest,
        barrio,
        municipio,
        fnacest,
        observacionest,
        claveest,
        usuarios_codigo,
        acudientes_coddocumento,
    } = req.body;

    const newStudent = await Estudiantes.create({
        idest,
        codest,
        cedest,
        expedido,
        pnomest,
        snomest,
        papeest,
        sapeest,
        sexoest,
        direcest,
        barrio,
        municipio,
        fnacest,
        observacionest,
        claveest,
        usuarios_codigo,
        acudientes_coddocumento,
    });

    res.status(201).json({
        status: 'success',
        newStudent,
    });
});

const getStudentById = catchAsync(async(req, res, next) => {
    const { idest } = req.params;
    const estudiante = await Estudiantes.findOne({
        where: { idest },
    });

    if (!estudiante) {
        return res.status(404).json({
            status: 'error',
            message: 'estudiante no encontrado',
        });
    }
    res.status(200).json({
        status: 'success',
        estudiante,
    });
});

const updateStudent = catchAsync(async(req, res, next) => {
    const { idest } = req.params;
    const {
        codest,
        cedest,
        expedido,
        pnomest,
        snomest,
        papeest,
        sapeest,
        sexoest,
        direcest,
        barrio,
        municipio,
        fnacest,
        observacionest,
        claveest,
        usuarios_codigo,
        acudientes_coddocumento,
    } = req.body;

    const estudiante = await Estudiantes.findOne({ where: { idest } });

    if (!estudiante) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }

    await estudiante.update({
        codest,
        cedest,
        expedido,
        pnomest,
        snomest,
        papeest,
        sapeest,
        sexoest,
        direcest,
        barrio,
        municipio,
        fnacest,
        observacionest,
        claveest,
        usuarios_codigo,
        acudientes_coddocumento,
    });

    res.status(204).json({
        status: 'success',
    });
});

const deleteStudent = catchAsync(async(req, res, next) => {
    const { idest } = req.params;
    const estudiante = await Estudiantes.findOne({ where: { idest } });

    if (!estudiante) {
        return res.status(404).json({
            status: 'error',
            message: 'usuario no encontrado',
        });
    }

    await estudiante.update({ status: 'ELIMINADO' });

    res.status(200).json({
        status: 'success',
    });
});

module.exports = {
    getAllStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
};