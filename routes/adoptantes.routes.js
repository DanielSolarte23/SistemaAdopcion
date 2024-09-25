const express = require('express');
const router = express.Router();
const adoptantesController = require('../controller/adoptantes.controller');

router.post('/registrar', adoptantesController.registrarAdoptante);
router.get('/disponibles', adoptantesController.listarAdoptantes);

module.exports = router;
