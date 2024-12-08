import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
function Agendamento() {
  // Dados fictícios para a tabela
  const agendamentos = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    firstName: `joaodebarro${index + 1}`,
    lastName: `joaodebarro@ete-jbl.com.br${index + 1}`,
    Item1: `(81) 98382383${index + 1}`,
    Item2: `Degradê Navalhado${index + 1}`,
    Item3: `R$40.0${index + 1}`,
    handle: `@Pendente...${index + 1}`,
  }));

  const handleEdit = () => {
    alert('Confirmar corte?');
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <div className="d-flex align-items-center gap-3 my-4">
              {' '}
              <h1 className="">Agendamentos</h1>{' '}
              <FaCalendarAlt size={48} color="#B92323" />
            </div>
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contato</th>
                  <th scope="col">Tipo do Corte</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Status do Pagamento</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {agendamentos.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>

                    <td>{item.Item1}</td>
                    <td>{item.Item2}</td>
                    <td>{item.Item3}</td>
                    <td>{item.handle}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={handleEdit}
                      >
                        Confirmar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
