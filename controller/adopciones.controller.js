const Perro = require('../models/perro.model');
const Adoptante = require('../models/adoptantes.model');
const Adopcion = require('../models/adopciones.model');

exports.asignarPerro = async (req, res) => {
    try {
        const { perroId, adoptanteId } = req.body;

        const perro = await Perro.findById(perroId);
        if (!perro || perro.estadoAdopcion === 'Adoptado') {
            return res.status(400).send('Perro no disponible para adopción');
        }

        const adoptante = await Adoptante.findById(adoptanteId);
        if (!adoptante) {
            return res.status(400).send('Adoptante no encontrado');
        }

        const nuevaAdopcion = new Adopcion({
            perro: perroId,
            adoptante: adoptanteId
        });
        await nuevaAdopcion.save();

        perro.estadoAdopcion = 'Adoptado';
        await perro.save();

        res.status(201).send(nuevaAdopcion);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.historialAdopciones = async (req, res) => {
    try {
        const historial = await Adopcion.find().populate('perro').populate('adoptante');
        res.send(historial);
    } catch (error) {
        res.status(500).send(error);
    }
};
