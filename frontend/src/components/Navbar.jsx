import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-1/5 flex shadow-xl bg-white">
      <div className="w-1/3 flex items-center">
        <h1 className="text-4xl font-extrabold text-center pl-14">
          Adopción de Perros
        </h1>
      </div>
      <ul className="w-2/3 flex justify-around items-center h-full text-2xl font-semibold">
        <div className="w-1/2 flex flex-col h-full justify-evenly py-5 pl-20">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/perros-disponibles"
              className="hover:text-blue-500 transition"
            >
              Perros Disponibles
            </Link>
          </li>
          <li>
            <Link
              to="/registro-perro"
              className="hover:text-blue-500 transition"
            >
              Registrar Perro
            </Link>
          </li>
        </div>
        <div className="w-1/2 flex flex-col h-full justify-evenly py-5 pl-20 border-l-2 border-gray-300">
          <li>
            <Link
              to="/registro-adoptante"
              className="hover:text-blue-500 transition"
            >
              Registrar Adoptante
            </Link>
          </li>
          <li>
            <Link
              to="/asignar-adopcion"
              className="hover:text-blue-500 transition"
            >
              Asignar Adopción
            </Link>
          </li>
          <li>
            <Link
              to="/historial-adopciones"
              className="hover:text-blue-500 transition"
            >
              Historial de Adopciones
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
