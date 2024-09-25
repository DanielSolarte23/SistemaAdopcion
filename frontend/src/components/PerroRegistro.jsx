import { useState } from "react";
import axios from "axios";

const PerroRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [tamano, setTamano] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const edadNum = Number(edad);

    if (isNaN(edadNum)) {
      alert("Por favor, ingresa una edad válida");
      return;
    }

    const dataToSend = { nombre, raza, edad: edadNum, tamaño: tamano };

    try {
      await axios.post("http://localhost:5000/perros/registrar", dataToSend);
      alert("Perro registrado con éxito");
      setNombre("");
      setRaza("");
      setEdad("");
      setTamano("");
    } catch (error) {
      console.error("Error registrando el perro:", error);
      alert("Error registrando el perro. Por favor, verifica los datos.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-20"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Registrar Perro</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Raza"
        value={raza}
        onChange={(e) => setRaza(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        value={tamano}
        onChange={(e) => setTamano(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Seleccione Tamaño</option>
        <option value="Pequeño">Pequeño</option>
        <option value="Mediano">Mediano</option>
        <option value="Grande">Grande</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Registrar
      </button>
    </form>
  );
};

export default PerroRegistro;
