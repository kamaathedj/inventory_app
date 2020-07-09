const supertest = require('supertest');

const app = require('../../app');


describe('GET /countries', () => {
  it('should return all the countries', async () => {
    const response = await supertest(app)
      .get('/api/v1/countries')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
