const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('testing whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('testing fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('testng rounding down fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b', () => {
    assert.strictEqual(calculateNumber(3.6, 2.5), 7);
  });

  it('rounding up a', () => {
    assert.strictEqual(calculateNumber(3.6, 2.0), 6);
  });

  it('rounding down a and b', () => {
    assert.strictEqual(calculateNumber(2.49, 3.499), 6);
  });
});