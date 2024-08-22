const chai = require("chai");
const expect = chai.expect;
const request = require("request");
const app = require("./api");

describe("It tests the app", function () {
    const url = 'http://localhost:7865';
  it("tests the response status", function (done) {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });
});
