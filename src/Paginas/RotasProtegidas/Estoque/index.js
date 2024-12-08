import React from 'react';
import { MdWarehouse } from 'react-icons/md';

function Estoque() {
  // Dados fictícios para o estoque
  const estoque = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    nome: `Item ${index + 1}`,
    quantidade: Math.floor(Math.random() * 100) + 1, // Quantidade aleatória
    preco: `R$ ${(Math.random() * 50).toFixed(2)}`, // Preço aleatório
    categoria: index % 2 === 0 ? 'Higiene' : 'Beleza', // Alterna categorias
  }));

  const handleAdicionar = (id) => {
    alert(`Adicionar ao estoque: Item ${id}`);
  };

  const handleRemover = (id) => {
    alert(`Remover do estoque: Item ${id}`);
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <div className="d-flex align-items-center gap-3 my-4">
              <h1 className="">Estoque</h1>
              <MdWarehouse size={48} color="#B92323" />
            </div>
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Adicionar</th>
                  <th scope="col">Remover</th>
                </tr>
              </thead>
              <tbody>
                {estoque.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.nome}</td>
                    <td>{item.quantidade}</td>
                    <td>{item.preco}</td>
                    <td>{item.categoria}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleAdicionar(item.id)}
                      >
                        Adicionar
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemover(item.id)}
                      >
                        Remover
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

export default Estoque;
