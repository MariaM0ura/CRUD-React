import React from 'react'

const CreatProduct = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const nome = event.target.nome.value.trim();
        const preco = event.target.preco.value.trim();
        const descricao = event.target.descricao.value.trim();
        const disponivel = event.target.disponivel.value === 'sim';

        if(!nome || !preco || !descricao || !disponivel) {
            alert('Todos os campos devem ser preenchidos!');
            return;
        }

        if(isNaN(preco)) {
            alert('O campo preço deve ser um número!');
            return;
        }

        const produto = { nome, preco: Number(preco), descricao, disponivel };

        fetch('http://localhost:8000/Produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        })
            .then(() => {
                alert('Produto cadastrado com sucesso!');
                window.location.href = '/';
            })
            .catch((error) => console.log(error));
    }


  return (
    <div className='container'>
        <h1> Cadastro de Novo Produto</h1>

        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='nome' className='form-label'>Nome</label>
                <input type='text' className='form-control' id='nome' />
            </div>

            <div className='mb-3'>
                <label htmlFor='preco' className='form-label'>Preço</label>
                <input type='text' className='form-control' id='preco' />
            </div>

            <div className='mb-3'>
                <label htmlFor='descricao' className='form-label'>Descrição</label>
                <input type='text' className='form-control' id='descricao' />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Disponível para venda</label>
                <div className='form-check'>
                    <input 
                    type='radio' 
                    className='form-check-input' 
                    name='disponivel' 
                    id='disponivelSim' 
                    value='sim' 
                    />
                    <label className='form-check-label' htmlFor='disponivelSim'>Sim</label>
                </div>
                <div className='form-check'>
                    <input 
                    type='radio' 
                    className='form-check-input' 
                    name='disponivel' 
                    id='disponivelNao' 
                    value='nao' 
                    />
                    <label className='form-check-label' htmlFor='disponivelNao'>Não</label>
                </div>
            </div>
            <button type='submit' className='btn btn-primary' >Salvar</button>
        </form>

        <a href="/" className='btn btn-danger'>Voltar</a>

    </div>
  )
}

export default CreatProduct;