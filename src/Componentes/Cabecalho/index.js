//aqui estou criando o component cabeçalho
function Cabecalho() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  position-fixed w-100">
        <div class="container-fluid d-flex justify-content-between mx-3">
          <a class="navbar-brand" href="/">
            <img
              style={{ width: '80px' }}
              src="/assets/a2.png"
              alt="logo"
            ></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav w-100  justify-content-end align-items-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Franquias
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/registro">
                  Registro
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Agendamento
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Serviços
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Cortes de Cabelo
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Barba e Sobrancelhas
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Tratamentos
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

//aqui estou exportando o component cabecalho para ele ser importado por outros components do projeto.
export default Cabecalho;
