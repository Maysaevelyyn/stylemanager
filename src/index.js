import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './Componentes/Cabecalho';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import { BrowserRouter } from 'react-router-dom'; // Importar o BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
