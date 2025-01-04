import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    fetch('http://localhost:8000/Produtos')
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedProdutos = [...produtos].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setProdutos(sortedProdutos);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/Produtos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('Produto excluído com sucesso!');
        setProdutos(produtos.filter((produto) => produto.id !== id));
      })
      .catch((error) => console.log(error));
  }

  const handleEdit = (id) => {
    window.location.href = `/EditProduct/${id}`;
  }
  

  return (
    <div className='container title'>
      <h1>Cadastro e Listagem de Produtos</h1>
      <div className='table-container'>
        <a href='/creatProduct' className='btn btn-add btn-danger addbutton'>Adicionar Produto</a>
        <table className="table table-hover">
          <thead>
            <tr>
              <th onClick={() => handleSort('nome')} style={{ cursor: 'pointer' }}>
                Nome {sortConfig.key === 'nome' && (
                  <i className={`ms-2 bi ${sortConfig.direction === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down'}`}></i>
                )}
              </th>
              <th onClick={() => handleSort('preco')} style={{ cursor: 'pointer' }}>
                Preço {sortConfig.key === 'preco' && (
                  <i className={`ms-2 bi ${sortConfig.direction === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down'}`}></i>
                )}
              </th>
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
                  <button className="btn btn-sm btn-outline-primary ms-2" onClick={() => handleEdit(produto.id)}>Editar</button>
                  <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => handleDelete(produto.id)}>Excluir</button>
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
