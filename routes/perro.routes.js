const express = require('express');
const router = express.Router();
const perrosController = require('../controller/perro.controller');

router.post('/registrar', perrosController.registrarPerro);
router.get('/disponibles', perrosController.listarPerrosDisponibles);

module.exports = router;
