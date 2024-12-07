import React from 'react';
import Home from './Paginas/Home';
import Registro from './Paginas/Registro';
import { Routes, Route, Link } from 'react-router-dom';
import Cabecalho from './Componentes/Cabecalho';
// Defina seus componentes
import Login from './Paginas/Login';


function App() {
  return (
    <div>

      <Cabecalho></Cabecalho>
      <Routes>
        <Route path="/" exact element={<Home />} /> {/* Página inicial */}
        <Route path="/registro" element={<Registro />} /> {/* Página sobre */}
        <Route path="/login" element={<Login />} /> {/* Página sobre */}
      </Routes>
    </div>
  );
}

export default App;
