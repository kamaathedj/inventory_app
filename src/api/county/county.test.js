const supertest = require('supertest');
const app = require('../../app');

describe('get /county', () => {
  it('should return all counties', async () => {
    await supertest(app)
      .get('/api/v1/county')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
