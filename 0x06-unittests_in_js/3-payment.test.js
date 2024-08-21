import * as chai from 'chai';
import sendPaymentRequestToApi from './3-payment.js';
import Utils from './utils.js';
const { expect } = chai;
import * as sinon from 'sinon'

describe('Tests whether Utils module was called', function () {
    let spy;
    beforeEach(function() {
        spy = sinon.spy(Utils, 'calculateNumber');
    })
    it('Checks whether the values are correct', function() {
        expect(sendPaymentRequestToApi(100, 20)).to.equal(120);
    })
    it('checks if utils was called', function () {
        spy = sinon.spy(Utils, 'calculateNumber');
        const rez = sendPaymentRequestToApi(100, 20)
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(100, 20);
    })
})