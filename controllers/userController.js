const connection = require('../database/connection');

// Criar um novo usuário
const createUser = (req, res) => {
  const { nome, email, senha, funcao } = req.body;
  const query = 'INSERT INTO usuarios (nome, email, senha, funcao) VALUES (?, ?, ?, ?)';
  
  connection.query(query, [nome, email, senha, funcao], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao criar usuário', error: err });
    }
    res.status(201).json({ message: 'Usuário criado com sucesso', userId: result.insertId });
  });
};

// Atualizar perfil do usuário
const updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, funcao } = req.body;
  const query = 'UPDATE usuarios SET nome = ?, email = ?, senha = ?, funcao = ? WHERE id = ?';
  
  connection.query(query, [nome, email, senha, funcao, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao atualizar usuário', error: err });
    }
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  });
};

// Buscar todos os usuários
const getUsers = (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar usuários', error: err });
    }
    res.status(200).json(results);
  });
};

// Filtrar usuários por nome ou email
const filterUsers = (req, res) => {
  const { searchTerm } = req.query; // Campo de busca fornecido na query string
  const query = 'SELECT * FROM usuarios WHERE nome LIKE ? OR email LIKE ?';
  
  connection.query(query, [`%${searchTerm}%`, `%${searchTerm}%`], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao filtrar usuários', error: err });
    }
    res.status(200).json(results);
  });
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
  filterUsers
};
