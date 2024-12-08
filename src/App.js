import React from 'react';
import Home from './Paginas/Home';
import Registro from './Paginas/Registro';
import { Routes, Route, Link } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Dashboard from './Paginas/RotasProtegidas/Dashboard';
import Agendamento from './Paginas/RotasProtegidas/Agendamento';
// Defina seus componentes
import Estoque from './Paginas/RotasProtegidas/Estoque';
import Login from './Paginas/Login';

function App() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Routes>
        <Route path="/" exact element={<Home />} /> {/* Página inicial */}
        <Route path="/registro" element={<Registro />} /> {/* Página sobre */}
        <Route path="/login" element={<Login />} /> {/* Página sobre */}
        <Route path="/dashboard" exact element={<Dashboard></Dashboard>} />
        <Route path="/estoque" exact element={<Estoque></Estoque>} />
        <Route
          path="/agendamento"
          exact
          element={<Agendamento></Agendamento>}
        />
      </Routes>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
