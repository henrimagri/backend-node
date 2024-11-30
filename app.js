const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware para fazer o parsing do corpo da requisição em JSON
app.use(bodyParser.json());

// Usar as rotas de usuários
app.use('/api', userRoutes);

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = { app, server };  // Exportando tanto o app quanto o server
