const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Rota para criar usuário
router.post('/users', userController.createUser);

// Rota para atualizar o perfil do usuário
router.put('/users/:id', userController.updateUser);

// Rota para buscar todos os usuários
router.get('/users', userController.getUsers);

// Rota para filtrar usuários
router.get('/users/search', userController.filterUsers);

module.exports = router;
