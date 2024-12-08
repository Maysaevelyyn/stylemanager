import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GiMustache } from 'react-icons/gi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaTableList } from 'react-icons/fa6';
// import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
export default function Sessao4() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/registro'); // Substitua pela rota desejada
  };

  return (
    <>
      <div className="container row  d-flex vh-100 align-items-center justify-content-center mx-auto">
        <div></div>
        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
          <h1>Coloque sua barbearia no mapa!</h1>
          <p>
            Faça sua barbearia ser encontrada facilmente pelos clientes.
            Posicione-a no Google Maps e destaque sua localização
          </p>
          .
          <img
            className="rounded-5  custom-border w-100 "
            src="/assets/map-lg.png"
          ></img>
          <div className="d-flex align-items-start justify-content-center w-100 pt-4">
            <button onClick={handleNavigation} className="btn btn-danger fs-4">
              Teste grátis por 5 dias
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
