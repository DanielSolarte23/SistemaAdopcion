import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PerroRegistro from './components/PerroRegistro';
import AdoptanteRegistro from './components/AdoptanteRegistro';
import AsignarAdopcion from './components/AsignarAdopcion';
import HistorialAdopciones from './components/HistorialAdopciones';
import ListadoPerros from './components/ListaPerros';

function App() {
  return (
    <Router>
      <div className='h-screen w-full'>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1 className='border bg-zinc-300 h-full flex justify-center text-5xl pt-10'>Bienvenido al Sistema de Adopciones</h1>} />
          <Route path='/perros-disponibles' element={<ListadoPerros/>}></Route>
          <Route path="/registro-perro" element={<PerroRegistro />} />
          <Route path="/registro-adoptante" element={<AdoptanteRegistro />} />
          <Route path="/asignar-adopcion" element={<AsignarAdopcion />} />
          <Route path="/historial-adopciones" element={<HistorialAdopciones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
