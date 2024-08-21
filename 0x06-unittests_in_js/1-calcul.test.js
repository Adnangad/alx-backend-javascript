const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Tests the calculateNumber function', function() {
    it('tests the output of the function if the type is SUM', function() {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    })
    it('tests the output of the function if the type is SUBTRACT', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
    it('tests the output of the function if the type is DIVIDE', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
    it('tests the output of the function if the type is DIVIDE', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })

})