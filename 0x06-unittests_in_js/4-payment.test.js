const chai = require('chai');
const expect  = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment')
const sinon = require('sinon');

describe('Tests sendPaymentRequestApi module', function () {
    let logspy;
    let stubsin;

    before(function() {
        stubsin = sinon.stub(Utils, 'calculateNumber');
        stubsin.withArgs('SUM', 100, 20).returns(10);
    });
    it('checks if Utils.calculateNumber returns expected values', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(stubsin);
        sinon.assert.calledWith(stubsin, 'SUM', 100, 20);
    });
    it('checks if the results were logged as expected', function() {
        logspy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(logspy.calledOnce).to.be.true;
        expect(logspy.calledWith('The total is: 10')).to.be.true
    })
});
