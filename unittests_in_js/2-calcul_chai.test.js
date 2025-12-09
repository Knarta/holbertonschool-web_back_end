const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('type == SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are 0.1 and 0.3', function() {
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });

    it('should return -5 when inputs are -1.4 and -4.5', function() {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });

    it('should return 0 when both inputs are 0', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should return 5 when inputs are 1.2 and 3.7', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 6 when inputs are 2.5 and 2.5', function() {
      expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
    });

    it('should return 2 when inputs are 0.5 and 0.5', function() {
      expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
    });
  });

  describe('type == SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 3 when inputs are -1.4 and -4.5', function() {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it('should return -5 when inputs are 0 and 5.3', function() {
      expect(calculateNumber('SUBTRACT', 0, 5.3)).to.equal(-5);
    });

    it('should return 6 when inputs are 5.7 and 0', function() {
      expect(calculateNumber('SUBTRACT', 5.7, 0)).to.equal(6);
    });

    it('should return 8 when inputs are 5.5 and -2.3', function() {
      expect(calculateNumber('SUBTRACT', 5.5, -2.3)).to.equal(8);
    });

    it('should return -8 when inputs are -5.5 and 2.3', function() {
      expect(calculateNumber('SUBTRACT', -5.5, 2.3)).to.equal(-8);
    });

    it('should return 0 when subtracting equal rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 2.4, 2.4)).to.equal(0);
    });
  });

  describe('type == DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return -4 when inputs are -8.7 and 2.3', function() {
      expect(calculateNumber('DIVIDE', -8.7, 2.3)).to.equal(-4);
    });

    it('should return Error when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return Error when rounded divisor is 0 (0.2)', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });

    it('should return Error when rounded divisor is 0 (0.4)', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });

    it('should return Error when rounded divisor is 0 (-0.4)', function() {
      expect(calculateNumber('DIVIDE', 1.4, -0.4)).to.equal('Error');
    });

    it('should return 4 when inputs are 8.0 and 2.0', function() {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4);
    });

    it('should return 5 when inputs are 10.4 and 2.0', function() {
      expect(calculateNumber('DIVIDE', 10.4, 2.0)).to.equal(5);
    });

    it('should return 3 when inputs are 5.5 and 2.0', function() {
      expect(calculateNumber('DIVIDE', 5.5, 2.0)).to.equal(3);
    });

    it('should return 4 when inputs are 7.6 and 2.4', function() {
      expect(calculateNumber('DIVIDE', 7.6, 2.4)).to.equal(4);
    });

    it('should return -5 when inputs are 9.5 and -2.5', function() {
      expect(calculateNumber('DIVIDE', 9.5, -2.5)).to.equal(-5);
    });

    it('should handle division resulting in 1', function() {
      expect(calculateNumber('DIVIDE', 4.5, 4.5)).to.equal(1);
    });
  });
});