const express = require('express');
const router = express.Router();

// Importamos el controlador
const empleadosController = require('../controllers/empleados.controller');

// Creando la primera ruta
router.post('/', empleadosController.create);

// Ruta de find
router.get('/', empleadosController.find);

// Ruta de findOne
router.get('/:id', empleadosController.findOne);

// Ruta de update
router.put('/:id', empleadosController.update);

// Ruta de remove
router.delete('/:id', empleadosController.remove);

module.exports = router;
