import { useState, useEffect } from 'react';
import axios from 'axios';

const AsignarAdopcion = () => {
  const [perros, setPerros] = useState([]);
  const [adoptantes, setAdoptantes] = useState([]);
  const [perroId, setPerroId] = useState('');
  const [adoptanteId, setAdoptanteId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const perrosDisponibles = await axios.get('http://localhost:5000/perros/disponibles');
      setPerros(perrosDisponibles.data);
      const adoptantesRes = await axios.get('http://localhost:5000/adoptantes/disponibles');
      setAdoptantes(adoptantesRes.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/adopciones/asignar', { perroId, adoptanteId });
      alert('Adopción asignada con éxito');
    } catch (error) {
      console.error('Error asignando adopción:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold text-center mb-4">Asignar Adopción</h2>
      <select 
        value={perroId} 
        onChange={(e) => setPerroId(e.target.value)} 
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Selecciona un perro</option>
        {perros.map(perro => (
          <option key={perro._id} value={perro._id}>{perro.nombre}</option>
        ))}
      </select>
      <select 
        value={adoptanteId} 
        onChange={(e) => setAdoptanteId(e.target.value)} 
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Selecciona un adoptante</option>
        {adoptantes.map(adoptante => (
          <option key={adoptante._id} value={adoptante._id}>{adoptante.nombre}</option>
        ))}
      </select>
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Asignar
      </button>
    </form>
  );
};

export default AsignarAdopcion;
