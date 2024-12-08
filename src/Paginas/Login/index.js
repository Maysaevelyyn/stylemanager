import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Container } from './styles';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    sessionStorage.setItem('token', 'token_mockado');
    navigate('/dashboard'); // Substitua pela rota desejada
  };
  return (
    <>
      <section className="d-flex align-items-center justify-content-center">
        <div className="bg-white d-flex h-50 rounded-5">
          <div className="p-5 d-flex align-items-center flex-column">
            <h1 className="text-danger fw-bolder">Entrar</h1>
            <img className="w-50" src="/assets/a2.png"></img>

            <a className="text-danger" href="/registro">
              Criar uma conta agora!
            </a>
          </div>
          <div className="bg-danger p-5 rounded-5 d-flex flex-column justify-content-between">
            <div className="gap-2 d-flex flex-column justify-content-center  h-100">
              <h1 className="fw-bolder text-white  ">Entrar</h1>
              <div className="d-flex align-items-center gap-3 my-2">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  id="inputEmail"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>

              <div className="d-flex align-items-center gap-3 my-2">
                <input
                  type="password"
                  placeholder="Senha"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <button className="btn btn-dark w-100 mt-3" onClick={handleLogin}>
                Entrar
              </button>
              <a href="#" className="text-white text-center">
                {' '}
                esqueceu sua senha
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
