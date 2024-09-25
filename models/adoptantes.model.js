const mongoose = require('mongoose');

const AdoptanteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    direccion: { type: String, required: true }
});

module.exports = mongoose.model('Adoptante', AdoptanteSchema);
