const express = require('express');
const router = express.Router();

// Importamos el controlador
const usersController = require('../controllers/users.controller');

// Creando la ruta de login
router.post('/login', usersController.login);

module.exports = router;
