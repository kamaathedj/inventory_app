const supertest = require('supertest');

const app = require('./app');

describe('App', () => {
  it('should respond with a welcome message at the base of the Api', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toEqual('Home inventory api');
  });

  it('should return an error', async () => {
    const response = await supertest(app)
      .get('/api/todo')
      .expect('Content-Type', /json/)
      .expect(404);

    expect(response.body.message).toEqual('Not Found - /api/todo');
  });
});
