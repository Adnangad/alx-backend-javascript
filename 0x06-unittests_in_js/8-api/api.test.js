const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('./api');

describe('It tests the app', function() {
    it('tests the response status', async () => {
        const response = await request(app).get('/');
        expect(response.status).to.equal(200);
    })
    it('tests the response value', async () => {
        const response = await request(app).get('/');
        expect(response.text).to.equal('Welcome to the payment system');
    })
})