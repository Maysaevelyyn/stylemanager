import Logout from '../Logout';

function Cabecalho() {
  const isLoggedIn = sessionStorage.getItem('token'); // Verifica se há um token no sessionStorage

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  position-fixed w-100 bg-white z-header">
        <div className="container-fluid d-flex justify-content-between mx-3">
          <a className="navbar-brand" href="/">
            <img
              style={{ width: '80px' }}
              src="/assets/a2.png"
              alt="logo"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-100 justify-content-end align-items-center">
              {!isLoggedIn ? ( // Se o usuário NÃO estiver logado
                <>
                  <li className="nav-item btn btn-success">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="/login"
                    >
                      Login
                    </a>
                  </li>
                </>
              ) : (
                // Se o usuário estiver logado
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/dashboard"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/agendamento">
                      Agendamento
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/estoque">
                      Estoque
                    </a>
                  </li>
                  <li className="nav-item">
                    <Logout></Logout>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Cabecalho;
