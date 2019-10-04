import buildApp from './app';
const request = require('supertest');

describe('Express app', () => {
  const app = buildApp();
  describe('/api/repositories endpoint', () => {
    it.todo('should return an array');
  });
});
