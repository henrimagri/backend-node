const { app, server } = require('../app');  

describe('Testa as rotas de usuários', () => {
  let server;

  // Inicializa o servidor de forma assíncrona
  beforeAll(async () => {
    server = app.listen(3000);
  });

  afterAll(async () => {
    // Fecha o servidor após os testes
    await server.close();
  });

  it('Deve retornar todos os usuários', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Deve criar um novo usuário', async () => {
    const newUser = { name: 'Henrique3', email: 'henrimagri@hotmail.com' };
    const response = await request(app).post('/api/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Usuário criado com sucesso');
  });
});
