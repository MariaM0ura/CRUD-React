import React from 'react'

const CreatProduct = () => {
  return (
    <div className='container'>
        <h1> Cadastro de Novo Produto</h1>

        <form>
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

            <div className='mb-3 form-check'>
                <input type='checkbox' className='form-check-input' id='disponivel' />
                <label className='form-check-label' htmlFor='disponivel'>Disponível para venda</label>
            </div>

            <button type='submit' className='btn btn-primary'>Salvar</button>
        </form>
    </div>
  )
}

export default CreatProduct;