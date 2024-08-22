const chai = require("chai");
const expect = chai.expect;
const request = require("request");
const app = require("./api");
const { json } = require("express");

describe("It tests the app", function () {
  const url = "http://localhost:7865";
  it("tests the response status of / route", function (done) {
    request.get(`${url}`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });
  it("tests the response status of an invalid id", function (done) {
    request.get(`${url}/cart/hello`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it("tests the response status of a valid id", function (done) {
    request.get(`${url}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12')
      done();
    });
  });
  it("tests the response status of /available_payments", function (done) {
    request.get(`${url}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      const data = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      const rez = JSON.stringify(data);
      expect(body).to.be.equal(rez);
      done();
    });
  });
  it("tests the response status of a /login", function (done) {
    request.post(`${url}/login`, {json: {userName: 'Gard'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Gard')
      done();
    });
  });
});
