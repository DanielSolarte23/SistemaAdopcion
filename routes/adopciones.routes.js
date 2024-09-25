const express = require('express');
const router = express.Router();
const adopcionesController = require('../controller/adopciones.controller');

router.post('/asignar', adopcionesController.asignarPerro);
router.get('/historial', adopcionesController.historialAdopciones);

module.exports = router;
