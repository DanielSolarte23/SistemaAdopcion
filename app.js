/* Adopción de Perros
Desarrollar un sistema básico para gestionar la adopción de perros en un refugio. El sistema debe permitir:Registrar perros con información como nombre, raza, edad, tamaño y estado de adopción (disponible/adoptado).Registrar adoptantes con datos como nombre, correo electrónico y dirección.Asignar un perro a un adoptante, registrando el perro, el adoptante y la fecha de adopción.Mostrar un listado de perros disponibles para adopción y un historial de adopciones. */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const perrosRoutes = require('./routes/perro.routes');
const adoptantesRoutes = require('./routes/adoptantes.routes');
const adopcionesRoutes = require('./routes/adopciones.routes');

connectDB();

const app = express();
app.use(bodyParser.json());


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Rutas
app.use('/perros', perrosRoutes);
app.use('/adoptantes', adoptantesRoutes);
app.use('/adopciones', adopcionesRoutes);

// Inicializar servidor
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`ejecutándose en el puerto ${port}`);
});


