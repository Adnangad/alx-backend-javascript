const assert = require('assert');
const { describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('Testing the calculateNumber function', function () {
    it('returns 4 when 1 and 3 are passed', function () {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it('returns a whole number when passed', function() {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('returns a whole number when passed', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('returns a whole number when passed', function() {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });    
})