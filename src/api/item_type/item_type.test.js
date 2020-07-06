const supertest = require('supertest');
const app = require('../../app');

describe('get /item_type', () => {
  it('should return all the item_type', async () => {
    const response = supertest(app)
      .get('api/v1/item_type')
      .expect('Content_Type', /json/)
      .expect(200);
    // eslint-disable-next-line no-unused-expressions
    expect(response.body).isNotEmpty;
  });
});
