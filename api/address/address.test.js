'use strict';

const app = require('../../app');
const request = require('supertest');

describe('Addresses', function() {

  describe('POST /api/addresses', function() {

    var addresses;

    beforeEach(function(done) {
      request(app)
        .post('/api/addresses')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          addresses = res.body;
          return done();
        })
        .catch(done);
    });

    it('should respond with JSON array', function() {
      addresses.should.be.instanceOf(Array);
    });

  });

});
