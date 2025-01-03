import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Produtos')
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='container'>
      <h1>Cadastro e Listagem de Produtos</h1>
      <div className='table-container'>
        <a href='/creatProduct' className='btn btn-add btn-danger'>Adicionar Produto</a>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
              <th>Disponível para venda</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.descricao}</td>
                <td>{produto.disponivel ? 'Sim' : 'Não'}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Editar</button>
                  <button className="btn btn-sm btn-danger ms-2">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
