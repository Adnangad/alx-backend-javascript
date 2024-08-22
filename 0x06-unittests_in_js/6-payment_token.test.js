const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('tests an async function', function() {
    it('tests a promise', function(done) {
        getPaymentTokenFromAPI(true).then((result) => {
            expect(result).to.deep.equal({data: 'Successful response from the API' });
            done();
        })
    })
})