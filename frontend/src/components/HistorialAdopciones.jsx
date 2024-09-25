import { useEffect, useState } from "react";
import axios from "axios";

const HistorialAdopciones = () => {
  const [adopciones, setAdopciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const historialRes = await axios.get(
        "http://localhost:5000/adopciones/historial"
      );
      setAdopciones(historialRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold text-center mb-4">
        Historial de Adopciones
      </h2>
      <ul className="space-y-2">
        {adopciones.map((adopcion) => (
          <li
            key={adopcion._id}
            className="p-4 border border-gray-300 rounded-md"
          >
            Perro: {adopcion.perro.nombre} - Adoptante:{" "}
            {adopcion.adoptante.nombre} - Fecha: {adopcion.fechaAdopcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialAdopciones;
