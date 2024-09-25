const Adoptante = require('../models/adoptantes.model');

// Registrar un adoptante
exports.registrarAdoptante = async (req, res) => {
    try {
        const nuevoAdoptante = new Adoptante(req.body);
        await nuevoAdoptante.save();
        res.status(201).send(nuevoAdoptante);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.listarAdoptantes = async (req, res) => {
    try {
        const adoptantes = await Adoptante.find();
        res.send(adoptantes);
    } catch (error) {
        res.status(500).send(error);
    }
};