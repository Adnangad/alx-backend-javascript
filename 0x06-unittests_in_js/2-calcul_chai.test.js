import * as chai from 'chai';
import calculateNumber from './2-calcul_chai.js';
const { expect } = chai;

describe('Tests the calculateNumber function', function () {
  it('tests the output of the function if the type is SUM', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('tests the output of the function if the type is SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('tests the output of the function if the type is DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('tests the output of the function if the type is DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
