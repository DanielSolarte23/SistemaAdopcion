const mongoose = require('mongoose')

const PerroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    raza: { type: String, required: true },
    edad: { type: Number, required: true },
    tamaño: { type: String, enum: ['Pequeño', 'Mediano', 'Grande'], required: true },
    estadoAdopcion: { type: String, enum: ['Disponible', 'Adoptado'], default: 'Disponible'}
});

module.exports = mongoose.model('Perro', PerroSchema)