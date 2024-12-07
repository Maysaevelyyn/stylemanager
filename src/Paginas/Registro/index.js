import React from 'react';

// import { Container } from './styles';

function Registro() {
  return (
    <>
      <section className="d-flex align-items-center justify-content-center container">
        <div className="bg-white d-flex h-50 rounded-5">
          <div className="p-5 d-flex align-items-center flex-column">
            <h1 className="text-danger fw-bolder">Entrar para o clube</h1>
            <img className="w-50" src="/assets/a2.png"></img>
            <h3 className="fw-bold">texto texto texto text texto</h3>
            <a className="text-danger" href="/login">
              Já tem uma conta entre agora!
            </a>
          </div>
          <div className="bg-danger p-5 rounded-5">
            <h1 className="fw-bolder text-white mb-3">Registre-se</h1>

            <div className="d-flex align-items-center gap-3">
              <input
                type="text"
                placeholder="Nome Completo"
                id="inputName"
                class="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </div>
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
                type="tel"
                placeholder="Contato (xx) 9 xxxx-xxxx"
                id="phone"
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
            <div className="d-flex align-items-center gap-3 my-2">
              <input
                type="password"
                placeholder="Repita Senha"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </div>
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Selecione um plano
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-dark w-100 mt-3">Criar Conta</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registro;
