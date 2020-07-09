const superTest = require('supertest');
const app = require('../../app');

describe('get api/v1/user', () => {
  it('should return a list of users', async () => {
    const response = await superTest(app)
      .get('/api/v1/user')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
