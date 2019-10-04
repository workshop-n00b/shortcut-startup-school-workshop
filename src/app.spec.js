import buildApp from './app';
const request = require('supertest');

describe('Express app', () => {
  const app = buildApp();
  describe('/api endpoint', () => {
    it('should return an array', () => {
      request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
        });
    });
  });
});
