import { useNavigate } from 'react-router-dom';

function Sessao1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/registro'); // Substitua pela rota desejada
  };

  return (
    <>
      <section ClassName="section">
        <div class="container ">
          <div class="row ">
            <div class="col-12 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
              <div>
                <h1>Escolha um sistema completo para a</h1>
                <h2>gestão da sua barbearia</h2>
              </div>

              <div>
                <p>
                  Agilidade no fechamento de caixa e otimização na sua gestão
                  Para lucrar mais na sua barbearia com controle fácil de
                  agendamentos.
                </p>
              </div>
              <div className="d-flex align-items-start justify-content-start w-100">
                <button
                  onClick={handleNavigation}
                  className="btn btn-danger fs-4"
                >
                  Teste grátis por 5 dias
                </button>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-8 d-flex flex-column align-items-center">
              <img
                className="w-100 img-sec1"
                data-aos="zoom-in-left"
                src="/assets/black-men-color.png"
                data-aos-duration="1500"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Sessao1;
