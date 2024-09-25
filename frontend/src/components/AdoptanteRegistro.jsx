import { useState } from 'react';
import axios from 'axios';

const AdoptanteRegistro = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/adoptantes/registrar', { nombre, correo, direccion });
      alert('Adoptante registrado con éxito');
    } catch (error) {
      console.error('Error registrando el adoptante:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold text-center mb-4">Registrar Adoptante</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Registrar
      </button>
    </form>
  );
};

export default AdoptanteRegistro;
