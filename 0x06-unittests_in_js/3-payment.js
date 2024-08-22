function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const Utils = require('./utils');
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}
module.exports = sendPaymentRequestToApi