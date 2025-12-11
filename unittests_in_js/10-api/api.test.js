const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200', function(done) {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function(done) {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have correct content-type', function(done) {
    request.get(baseUrl, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});

describe('Cart page', function() {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200 when :id is a number', function(done) {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when :id is a number', function(done) {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', function(done) {
    request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 200 for different valid cart ids', function(done) {
    request.get(`${baseUrl}/cart/123`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });
});

describe('Available payments', function() {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200', function(done) {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods object', function(done) {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });

  it('should have correct content-type for JSON', function(done) {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      expect(response.headers['content-type']).to.include('application/json');
      done();
    });
  });

  it('should return an object with payment_methods property', function(done) {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      const data = JSON.parse(body);
      expect(data).to.have.property('payment_methods');
      done();
    });
  });

  it('should have credit_cards set to true', function(done) {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      const data = JSON.parse(body);
      expect(data.payment_methods.credit_cards).to.be.true;
      done();
    });
  });