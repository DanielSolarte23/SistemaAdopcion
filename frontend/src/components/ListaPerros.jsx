import { useEffect, useState } from 'react';
import axios from 'axios';

const ListadoPerros = () => {
  const [perros, setPerros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerros = async () => {
      try {
        const response = await axios.get('http://localhost:5000/perros/disponibles');
        setPerros(response.data);
      } catch (err) {
        setError('Error al cargar los perros disponibles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPerros();
  }, []);

  if (loading) {
    return <p>Cargando perros...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className=" mx-auto p-4 border px-16 h-full">
      <h2 className="text-2xl font-bold text-center mb-4">Perros Disponibles</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border-b text-left">Nombre</th>
            <th className="px-4 py-2 border-b text-left">Raza</th>
            <th className="px-4 py-2 border-b text-left">Edad</th>
            <th className="px-4 py-2 border-b text-left">Tamaño</th>
            <th className="px-4 py-2 border-b text-left">Estado de Adopción</th>
          </tr>
        </thead>
        <tbody>
          {perros.map(perro => (
            <tr key={perro._id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{perro.nombre}</td>
              <td className="px-4 py-2 border-b">{perro.raza}</td>
              <td className="px-4 py-2 border-b">{perro.edad}</td>
              <td className="px-4 py-2 border-b">{perro.tamaño}</td>
              <td className="px-4 py-2 border-b">{perro.estadoAdopcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPerros;
