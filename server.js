// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para fazer o parsing de JSON
app.use(express.json());

// Importar as rotas de usuário
const userRoutes = require('./backend/routes/userRoutes');

// Usar as rotas de usuário
app.use('/api', userRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
