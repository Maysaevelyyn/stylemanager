import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GiMustache } from 'react-icons/gi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaTableList } from 'react-icons/fa6';
// import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
export default function Sessao3() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/registro'); // Substitua pela rota desejada
  };

  return (
    <>
      <div className="container mx-auto  row  d-flex vh-100 align-items-center justify-content-center">
        <div className="col-sm-2 col-12">
          <ul
            className="nav nav-tab  d-flex flex-column bg-light"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item " role="presentation">
              <button
                className="m-1 active btn btn-danger fs-4"
                id="agendamento-tab"
                data-bs-toggle="tab"
                data-bs-target="#agendamento"
                type="button"
                role="tab"
                aria-controls="agendamento"
                aria-selected="true"
              >
                Agendamento
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="m-1 btn btn-danger fs-4"
                id="colaboradores-tab"
                data-bs-toggle="tab"
                data-bs-target="#colaboradores"
                type="button"
                role="tab"
                aria-controls="colaboradores"
                aria-selected="false"
              >
                Colaboradores
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="m-1 btn btn-danger fs-4"
                id="dashboard-tab"
                data-bs-toggle="tab"
                data-bs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Dashboard
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="m-1 btn btn-danger fs-4"
                id="estoque-tab"
                data-bs-toggle="tab"
                data-bs-target="#estoque"
                type="button"
                role="tab"
                aria-controls="estoque"
                aria-selected="false"
              >
                Estoque
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content col-12 col-sm-4" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="agendamento"
            role="tabpanel"
            aria-labelledby="agendamento-tab"
          >
            <FaRegCalendarAlt size={64} color="#b92323" />
            <h3 className="mt-3">Agenda online</h3>
            <p>
              Facilite o agendamento de serviços na sua barbearia com um sistema
              online e intuitivo. Você define os horários disponíveis, seus
              clientes fazem as reservas e você mantém o controle total da sua
              agenda de forma organizada e eficiente. Atenda seus clientes
              também com fila de espera, sem hora marcada.{' '}
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="colaboradores"
            role="tabpanel"
            aria-labelledby="colaboradores-tab"
          >
            <GiMustache size={64} color="#b92323" />
            <h3 className="mt-3">App para profissionais</h3>
            <p>
              Com o App Trinks Profissionais seus barbeiros controlam suas
              próprias agendas, têm acesso à relação de serviços feitos e
              próximos compromissos, sem precisar da recepção para saber
              detalhes sobre os atendimentos.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <LuLayoutDashboard size={64} color="#b92323" />
            <h3 className="mt-3">Dashboard</h3>
            <p>
              Monitore os principais indicadores, visualize dados em tempo real
              e tome decisões rápidas e assertivas. O dashboard é o seu centro
              de comando, reunindo todas as informações essenciais para
              gerenciar e otimizar sua operação com eficiência.".
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="estoque"
            role="tabpanel"
            aria-labelledby="estoque-tab"
          >
            <FaTableList size={64} color="#b92323" />
            <h3 className="mt-3">Controle de Estoque</h3>
            <p>
              Diga adeus aos problemas de estoque! Gerencie seus produtos de
              forma eficiente com alertas de reposição e relatórios detalhados.
            </p>
          </div>
        </div>
        <div className="col-5">
          <img
            className="rounded-5 img-fluid custom-border"
            src="/assets/cut.png"
          ></img>
        </div>
      </div>
    </>
  );
}
