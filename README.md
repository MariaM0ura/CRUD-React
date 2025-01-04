# Projeto CRUD com React e JSON Server

Este projeto é uma aplicação React que utiliza o `json-server` para simular uma API RESTful, permitindo que você desenvolva e teste a aplicação com dados mockados localmente.

## Tecnologias Utilizadas

- React
- json-server
- concurrently

## Instruções de Instalação

### 1. Clonando o repositório

Clone este repositório para o seu diretório local:

```bash
git clone https://github.com/username/seu-projeto.git
cd seu-projeto
```

### 2. Instalando as dependências

Instale as dependências do projeto com o comando:

```bash
npm install
```

Isso instalará todas as dependências necessárias para o React e o `json-server`.

### 3. Configurando os scripts

Para rodar os servidores React e `json-server` simultaneamente, usamos o pacote `concurrently`. Se você ainda não o tiver, instale-o com o comando:

```bash
npm install concurrently --save-dev
```

### 4. Executando o projeto

Agora, para iniciar ambos os servidores (React e `json-server`), basta rodar o seguinte comando:

```bash
npm run dev
```

Isso executará dois comandos simultaneamente:
- O servidor de desenvolvimento do React (por padrão na porta 3000).
- O `json-server` servindo a API simulada, usando o arquivo `src/db.json` e rodando na porta 8000.

### 5. Acessando a aplicação

- A aplicação React estará disponível em: [http://localhost:3000](http://localhost:3000)
- O servidor `json-server` estará disponível em: [http://localhost:8000](http://localhost:8000)

## Scripts

- `npm start`: Inicia o servidor de desenvolvimento do React.
- `json-server --watch src/db.json --port 8000`: Inicia o servidor do json-server na porta 8000.
- `npm run dev`: Inicia ambos, o servidor React e o `json-server`, ao mesmo tempo.


## Contribuição

Se você deseja contribuir com este projeto, fique à vontade para abrir uma *pull request* ou relatar problemas.

---

Obrigado por utilizar este repositório! 😊
