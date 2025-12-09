const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('type SUM', function() {
    it('should return the sum of rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });

    it('should handle zero', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should round both numbers before summing', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
    });

    it('should handle decimal numbers close to rounding threshold', function() {
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
      expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
    });
  });

  describe('type SUBTRACT', function() {
    it('should return the difference of rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it('should subtract from zero', function() {
      expect(calculateNumber('SUBTRACT', 0, 5.3)).to.equal(-5);
    });

    it('should subtract zero from a number', function() {
      expect(calculateNumber('SUBTRACT', 5.7, 0)).to.equal(6);
    });

    it('should handle positive and negative combinations', function() {
      expect(calculateNumber('SUBTRACT', 5.5, -2.3)).to.equal(8);
      expect(calculateNumber('SUBTRACT', -5.5, 2.3)).to.equal(-8);
    });
  });

  describe('type DIVIDE', function() {
    it('should return the division of rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('DIVIDE', -8.7, 2.3)).to.equal(-4);
    });

    it('should return Error when dividing by zero', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return Error when rounded divisor is zero', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, -0.4)).to.equal('Error');
    });

    it('should handle exact divisions', function() {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4);
      expect(calculateNumber('DIVIDE', 10.4, 2.0)).to.equal(5);
    });

    it('should handle decimal results', function() {
      expect(calculateNumber('DIVIDE', 5.5, 2.0)).to.equal(3);
      expect(calculateNumber('DIVIDE', 7.6, 2.4)).to.equal(4);
    });

    it('should handle negative divisions', function() {
      expect(calculateNumber('DIVIDE', -9.5, 2.5)).to.equal(-3.3333333333333335);
      expect(calculateNumber('DIVIDE', 9.5, -2.5)).to.equal(-5);
    });
  });
});