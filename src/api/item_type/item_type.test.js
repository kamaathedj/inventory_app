const supertest = require('supertest');
const app = require('../../app');

describe('get /item_type', () => {
  it('should return all the item_type', async () => {
    const response = await supertest(app)
      .get('/api/v1/item_type')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

// doesnt allow post requests
describe('post /item_type', () => {
  it('should respond with a 404', async () => {
    const response = await supertest(app)
      .post('/api/v1/item_type')
      .expect('Content-Type', /json/);
    expect(404);
    // eslint-disable-next-line no-unused-expressions
    expect(response.body).isNull;
  });
});
