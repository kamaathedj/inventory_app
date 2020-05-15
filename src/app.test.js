const supertest = require('supertest');

const app = require('./app');

describe('App', () => {
  it('it should respond with a welcome message at the base of the Api', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toEqual('Home inventory api');
  });
});
