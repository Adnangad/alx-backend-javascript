const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');

describe('sendPaymentRequestApi', function () {
  let logspy;

  beforeEach(function () {
    logspy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    sinon.restore();
  });
  it('sendPaymentRequestToAPI', function () {
    sendPaymentRequestToApi(100, 20);
    expect(logspy.calledOnce).to.be.true;
    expect(logspy.calledWith('The total is: 120')).to.be.true;
  });
  it('sendPaymentRequestToAPI', function () {
    sendPaymentRequestToApi(10, 10);
    expect(logspy.calledOnce).to.be.true;
    expect(logspy.calledWith('The total is: 20')).to.be.true;
  });
});
