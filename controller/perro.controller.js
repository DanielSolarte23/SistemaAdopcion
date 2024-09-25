const Perro = require('../models/perro.model');

exports.registrarPerro = async (req, res) => {
    try {
        const nuevoPerro = new Perro(req.body);
        await nuevoPerro.save();
        res.status(201).send(nuevoPerro);
    } catch (error) {
        console.error('Error al registrar perro:', error);
        res.status(400).send({ error: 'Error al registrar el perro', details: error.message });
    }
};

// Listar perros disponibles
exports.listarPerrosDisponibles = async (req, res) => {
    try {
        const perros = await Perro.find({ estadoAdopcion: 'Disponible' });
        res.send(perros);
    } catch (error) {
        res.status(500).send(error);
    }
};
