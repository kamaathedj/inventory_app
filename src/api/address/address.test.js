const superTest = require('supertest');
const app = require('../../app');

describe('get /api/v1/address', () => {
  it('should return a list of addresses', async () => {
    const response = await superTest(app)
      .get('/api/v1/address')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
