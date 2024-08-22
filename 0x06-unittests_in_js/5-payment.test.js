const chai = require('chai');
const expect  = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment')
const sinon = require('sinon');

describe('Tests sendPaymentRequestApi module', function () {
    let logspy;

    before(function() {
        logspy = sinon.spy(console, 'log')
    });
    afterEach(function() {
        sinon.reset()
    });
    it('checks if results 1 were logged as expected', function () {
        sendPaymentRequestToApi(100, 20);
        expect(logspy.calledOnce).to.be.true;
        expect(logspy.calledWith('The total is: 120')).to.be.true
    });
    it('checks if the results were logged as expected', function() {
        sendPaymentRequestToApi(10, 10);
        expect(logspy.calledOnce).to.be.true;
        expect(logspy.calledWith('The total is: 20')).to.be.true
    })
});
