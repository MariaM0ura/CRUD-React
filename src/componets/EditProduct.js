import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    descricao: '',
    disponivel: true, 
  });

  // Carregar dados do produto ao montar o componente
  useEffect(() => {
    fetch(`http://localhost:8000/Produtos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduto({
          ...data,
          disponivel: data.disponivel === 'true' || data.disponivel === true, 
        });
      })
      .catch((error) => console.error('Erro ao carregar produto:', error));
  }, [id]);

  // Atualizar estado ao modificar os campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: name === 'disponivel' ? value === 'true' : value, 
    }));
  };

  // Submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/Produtos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    })
      .then((response) => {
        if (response.ok) {
          alert('Produto atualizado com sucesso!');
          navigate('/'); 
        } else {
          alert('Erro ao atualizar produto!');
        }
      })
      .catch((error) => console.error('Erro ao atualizar produto:', error));
  };

  return (
    <div className="container">
        <h1>Editar produto</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  value={produto.nome}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className="mb-3">
              <label htmlFor="preco" className="form-label">Preço</label>
              <input
                type="text"
                className="form-control"
                id="preco"
                name="preco"
                value={produto.preco}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                name="descricao"
                value={produto.descricao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Disponível para venda</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="disponivel"
                  id="disponivelSim"
                  value="true"
                  checked={produto.disponivel === true}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="disponivelSim">Sim</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="disponivel"
                  id="disponivelNao"
                  value="false"
                  checked={produto.disponivel === false}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="disponivelNao">Não</label>
              </div>
            </div>
            <div className="d-flex justify-content-start gap-2">
                <button type="submit" className="btn btn-success">Salvar</button>
                <a href="/" className="btn btn-outline-danger">Voltar</a>
            </div>  
        </form>
    </div>
  );
};

export default EditProduct;
