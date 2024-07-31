# API Express com Node.js(em andamento)

## Descrição
Este projeto é uma API REST construída com Node.js, Express e MongoDB. Ele permite criar, atualizar, recuperar e excluir dados relacionados a uma livraria. A API gerencia informações sobre livros, autores e editoras.

## Funcionalidades
### Livros:
Listar todos os livros
Buscar um livro pelo ID
Adicionar um novo livro
Atualizar informações de um livro existente
Excluir um livro

### Autores:
Listar todos os autores
Buscar um autor pelo ID
Adicionar um novo autor
Atualizar informações de um autor existente
Excluir um autor
Editoras:
Listar todas as editoras
Buscar uma editora pelo ID
Adicionar uma nova editora
Atualizar informações de uma editora existente
Excluir uma editora

## Tecnologias Utilizadas
Node.js
Express
MongoDB (usando o Mongoose para modelagem de dados)
Pré-requisitos
Node.js instalado
MongoDB configurado (você pode usar o MongoDB Atlas para hospedar seu banco de dados na nuvem)
Conhecimento básico em JavaScript


## Como Executar o Projeto
Clone este repositório para sua máquina local.
Instale as dependências com o comando npm install.
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
MONGODB_URI=URL_DO_SEU_BANCO_DE_DADOS
PORT=3000

Execute o servidor com o comando npm start.
Acesse a API em http://localhost:3000.
Rotas Disponíveis
/livros
/autores
/editoras
