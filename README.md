# **Desafio Backend Node.js**

Este projeto é uma API RESTful desenvolvida em Node.js, utilizando Express.js e Sequelize para o gerenciamento de banco de dados. O objetivo principal é gerenciar usuários com operações de CRUD (Create, Read, Update, Delete).

--

## **Índice**
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#Configuração_de_banco)
- [Rotas da API](#rotas-da-api)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

---

## **Requisitos**

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** (v14 ou superior)
- **MySQL** ou outro banco de dados compatível
- **npm** (gerenciador de pacotes do Node.js)

---

## **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/henrimagri/backend-node.git


## **Configuração de banco**

- **Antes de começar, execulte esse script para criação do databese:
(Poderia ter feito com sequelize-cli db:migrate)

CREATE DATABASE test;

USE test;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    funcao ENUM('admin', 'cliente') NOT NULL
);

## **Rotas da API**

Usuários
POST /users: Cria um novo usuário.

{
  "name": "Henrique Magri",
  "email": "henrimagri@hotmail.com"
}

- **GET /users: Retorna a lista de usuários cadastrados.
- **GET /users/:id: Retorna os detalhes de um usuário específico.
- **PUT /users/:id: Atualiza os dados de um usuário.
- **DELETE /users/:id: Remove um usuário do sistema.


## **Estrutura do Projeto**
backend/
├── config/         # Configurações do banco de dados
├── controllers/    # Controladores das rotas
├── routes/         # Definição das rotas
├── test/           # Testes automatizados
├── app.js          # Arquivo principal da aplicação
└── package.json    # Configurações e dependências do projeto


## **Tecnologias Utilizadas**
Node.js: Ambiente de execução.
Express.js: Framework web.
Sequelize: ORM para banco de dados relacional.
Jest: Framework de testes.
MySQL: Banco de dados.


