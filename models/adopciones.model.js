const mongoose = require('mongoose');

const AdopcionSchema = new mongoose.Schema({
    perro: { type: mongoose.Schema.Types.ObjectId, ref: 'Perro', required: true },
    adoptante: { type: mongoose.Schema.Types.ObjectId, ref: 'Adoptante', required: true },
    fechaAdopcion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adopcion', AdopcionSchema);
