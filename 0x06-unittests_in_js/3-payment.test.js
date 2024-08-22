const chai = require('chai');
const expect  = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')
const sinon = require('sinon');

describe('Tests whether Utils module was called', function () {
    let spy;

    beforeEach(function() {
        spy = sinon.spy(Utils, 'calculateNumber');
    });
    it('checks if Utils.calculateNumber was called', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
    });
});
