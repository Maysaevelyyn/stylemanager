import { useNavigate } from 'react-router-dom';
function Sessao2() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/registro'); // Substitua pela rota desejada
  };

  return (
    <>
      <section ClassName="section">
        <div className="container">
          <div class="row d-flex align-items-center gap-3">
            <div class="col-12 col-sm-6 d-flex flex-column align-items-center">
              <img
                src="/assets/analytics-brand.png"
                className="w-100 img-sec1"
                data-aos="zoom-in-right"
                data-aos-duration="1500"
              ></img>
            </div>
            <div class="col-12 col-sm-5 d-flex flex-column align-items-center">
              <h1>Dê adeus à comanda de papel na sua barbearia</h1>
              <p>
                Dividir o foco entre atender os clientes e gerenciar o negócio
                não é fácil. Com a Trinks, você tem um sistema de gestão que
                otimiza os seus processos, desde o agendamento até o pagamento
                de comissões, deixando você livre para se concentrar no que faz
                de melhor: criar cortes incríveis e bombar nas redes sociais.
              </p>
              <div className="d-flex align-items-start justify-content-start w-100">
                <button
                  onClick={handleNavigation}
                  className="btn btn-danger fs-4"
                >
                  Teste grátis por 5 dias
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Sessao2;
