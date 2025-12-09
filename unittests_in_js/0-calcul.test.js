const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when adding 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round down 0.4', function() {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('should round up 0.5', function() {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });

  it('should round up 0.6', function() {
    assert.strictEqual(calculateNumber(0.6, 0.6), 2);
  });

  it('should round 1.4 down to 1', function() {
    assert.strictEqual(calculateNumber(1.4, 0), 1);
  });

  it('should round 1.5 up to 2', function() {
    assert.strictEqual(calculateNumber(1.5, 0), 2);
  });

  it('should round 1.6 up to 2', function() {
    assert.strictEqual(calculateNumber(1.6, 0), 2);
  });

  it('should round 2.4 down to 2', function() {
    assert.strictEqual(calculateNumber(2.4, 0), 2);
  });

  it('should round 2.5 up to 3', function() {
    assert.strictEqual(calculateNumber(2.5, 0), 3);
  });

  it('should round 2.6 up to 3', function() {
    assert.strictEqual(calculateNumber(2.6, 0), 3);
  });

  it('should round 3.4 down to 3', function() {
    assert.strictEqual(calculateNumber(3.4, 0), 3);
  });

  it('should round 3.5 up to 4', function() {
    assert.strictEqual(calculateNumber(3.5, 0), 4);
  });

  it('should round 3.6 up to 4', function() {
    assert.strictEqual(calculateNumber(3.6, 0), 4);
  });

  it('should round 4.4 down to 4', function() {
    assert.strictEqual(calculateNumber(4.4, 0), 4);
  });

  it('should round 4.5 up to 5', function() {
    assert.strictEqual(calculateNumber(4.5, 0), 5);
  });

  it('should round 4.6 up to 5', function() {
    assert.strictEqual(calculateNumber(4.6, 0), 5);
  });

  it('should round both arguments', function() {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should round both arguments up', function() {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should round one up and one down', function() {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it('should handle negative numbers rounding down', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.4), -3);
  });

  it('should handle negative numbers rounding up', function() {
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  });

  it('should handle negative numbers with .5 rounding', function() {
    assert.strictEqual(calculateNumber(-1.5, -2.6), -4);
  });

  it('should handle mixed positive and negative', function() {
    assert.strictEqual(calculateNumber(1.5, -2.5), 0);
  });

  it('should handle large numbers', function() {
    assert.strictEqual(calculateNumber(100.4, 200.6), 301);
  });

  it('should handle very small decimals', function() {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });

  it('should handle 0.49 rounding down', function() {
    assert.strictEqual(calculateNumber(0.49, 0.49), 0);
  });

  it('should handle 0.5 rounding up', function() {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });

  it('should handle 0.51 rounding up', function() {
    assert.strictEqual(calculateNumber(0.51, 0.51), 2);
  });

  it('should handle integers without rounding', function() {
    assert.strictEqual(calculateNumber(10, 20), 30);
  });

  it('should handle zero', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle zero with decimals', function() {
    assert.strictEqual(calculateNumber(0.4, 0.6), 1);
  });

  it('should round 1.4999 down', function() {
    assert.strictEqual(calculateNumber(1.4999, 0), 1);
  });

  it('should round 1.5000 up', function() {
    assert.strictEqual(calculateNumber(1.5000, 0), 2);
  });

  it('should round 1.5001 up', function() {
    assert.strictEqual(calculateNumber(1.5001, 0), 2);
  });

  it('should handle 2.3 and 2.3', function() {
    assert.strictEqual(calculateNumber(2.3, 2.3), 4);
  });

  it('should handle 2.5 and 2.5', function() {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should handle 2.7 and 2.7', function() {
    assert.strictEqual(calculateNumber(2.7, 2.7), 6);
  });

  it('should handle 3.3 and 3.3', function() {
    assert.strictEqual(calculateNumber(3.3, 3.3), 6);
  });

  it('should handle 3.5 and 3.5', function() {
    assert.strictEqual(calculateNumber(3.5, 3.5), 8);
  });

  it('should handle 3.7 and 3.7', function() {
    assert.strictEqual(calculateNumber(3.7, 3.7), 8);
  });

  it('should handle 4.3 and 4.3', function() {
    assert.strictEqual(calculateNumber(4.3, 4.3), 8);
  });

  it('should handle 4.5 and 4.5', function() {
    assert.strictEqual(calculateNumber(4.5, 4.5), 10);
  });

  it('should handle 4.7 and 4.7', function() {
    assert.strictEqual(calculateNumber(4.7, 4.7), 10);
  });

  it('should handle 5.3 and 5.3', function() {
    assert.strictEqual(calculateNumber(5.3, 5.3), 10);
  });

  it('should handle 5.5 and 5.5', function() {
    assert.strictEqual(calculateNumber(5.5, 5.5), 12);
  });

  it('should handle 5.7 and 5.7', function() {
    assert.strictEqual(calculateNumber(5.7, 5.7), 12);
  });

  it('should handle 6.3 and 6.3', function() {
    assert.strictEqual(calculateNumber(6.3, 6.3), 12);
  });

  it('should handle 6.5 and 6.5', function() {
    assert.strictEqual(calculateNumber(6.5, 6.5), 14);
  });

  it('should handle 6.7 and 6.7', function() {
    assert.strictEqual(calculateNumber(6.7, 6.7), 14);
  });

  it('should handle 7.3 and 7.3', function() {
    assert.strictEqual(calculateNumber(7.3, 7.3), 14);
  });

  it('should handle 7.5 and 7.5', function() {
    assert.strictEqual(calculateNumber(7.5, 7.5), 16);
  });

  it('should handle 7.7 and 7.7', function() {
    assert.strictEqual(calculateNumber(7.7, 7.7), 16);
  });

  it('should handle 8.3 and 8.3', function() {
    assert.strictEqual(calculateNumber(8.3, 8.3), 16);
  });

  it('should handle 8.5 and 8.5', function() {
    assert.strictEqual(calculateNumber(8.5, 8.5), 18);
  });

  it('should handle 8.7 and 8.7', function() {
    assert.strictEqual(calculateNumber(8.7, 8.7), 18);
  });

  it('should handle 9.3 and 9.3', function() {
    assert.strictEqual(calculateNumber(9.3, 9.3), 18);
  });

  it('should handle 9.5 and 9.5', function() {
    assert.strictEqual(calculateNumber(9.5, 9.5), 20);
  });

  it('should handle 9.7 and 9.7', function() {
    assert.strictEqual(calculateNumber(9.7, 9.7), 20);
  });

  it('should handle 10.3 and 10.3', function() {
    assert.strictEqual(calculateNumber(10.3, 10.3), 20);
  });

  it('should handle 10.5 and 10.5', function() {
    assert.strictEqual(calculateNumber(10.5, 10.5), 22);
  });

  it('should handle 10.7 and 10.7', function() {
    assert.strictEqual(calculateNumber(10.7, 10.7), 22);
  });

  it('should handle 11.3 and 11.3', function() {
    assert.strictEqual(calculateNumber(11.3, 11.3), 22);
  });

  it('should handle 11.5 and 11.5', function() {
    assert.strictEqual(calculateNumber(11.5, 11.5), 24);
  });

  it('should handle 11.7 and 11.7', function() {
    assert.strictEqual(calculateNumber(11.7, 11.7), 24);
  });

  it('should handle 12.3 and 12.3', function() {
    assert.strictEqual(calculateNumber(12.3, 12.3), 24);
  });

  it('should handle 12.5 and 12.5', function() {
    assert.strictEqual(calculateNumber(12.5, 12.5), 26);
  });

  it('should handle 12.7 and 12.7', function() {
    assert.strictEqual(calculateNumber(12.7, 12.7), 26);
  });

  it('should handle 13.3 and 13.3', function() {
    assert.strictEqual(calculateNumber(13.3, 13.3), 26);
  });

  it('should handle 13.5 and 13.5', function() {
    assert.strictEqual(calculateNumber(13.5, 13.5), 28);
  });

  it('should handle 13.7 and 13.7', function() {
    assert.strictEqual(calculateNumber(13.7, 13.7), 28);
  });

  it('should handle 14.3 and 14.3', function() {
    assert.strictEqual(calculateNumber(14.3, 14.3), 28);
  });

  it('should handle 14.5 and 14.5', function() {
    assert.strictEqual(calculateNumber(14.5, 14.5), 30);
  });

  it('should handle 14.7 and 14.7', function() {
    assert.strictEqual(calculateNumber(14.7, 14.7), 30);
  });

  it('should handle 15.3 and 15.3', function() {
    assert.strictEqual(calculateNumber(15.3, 15.3), 30);
  });

  it('should handle 15.5 and 15.5', function() {
    assert.strictEqual(calculateNumber(15.5, 15.5), 32);
  });

  it('should handle 15.7 and 15.7', function() {
    assert.strictEqual(calculateNumber(15.7, 15.7), 32);
  });

  it('should handle 16.3 and 16.3', function() {
    assert.strictEqual(calculateNumber(16.3, 16.3), 32);
  });

  it('should handle 16.5 and 16.5', function() {
    assert.strictEqual(calculateNumber(16.5, 16.5), 34);
  });

  it('should handle 16.7 and 16.7', function() {
    assert.strictEqual(calculateNumber(16.7, 16.7), 34);
  });

  it('should handle 17.3 and 17.3', function() {
    assert.strictEqual(calculateNumber(17.3, 17.3), 34);
  });

  it('should handle 17.5 and 17.5', function() {
    assert.strictEqual(calculateNumber(17.5, 17.5), 36);
  });

  it('should handle 17.7 and 17.7', function() {
    assert.strictEqual(calculateNumber(17.7, 17.7), 36);
  });

  it('should handle 18.3 and 18.3', function() {
    assert.strictEqual(calculateNumber(18.3, 18.3), 36);
  });

  it('should handle 18.5 and 18.5', function() {
    assert.strictEqual(calculateNumber(18.5, 18.5), 38);
  });

  it('should handle 18.7 and 18.7', function() {
    assert.strictEqual(calculateNumber(18.7, 18.7), 38);
  });

  it('should handle 19.3 and 19.3', function() {
    assert.strictEqual(calculateNumber(19.3, 19.3), 38);
  });

  it('should handle 19.5 and 19.5', function() {
    assert.strictEqual(calculateNumber(19.5, 19.5), 40);
  });

  it('should handle 19.7 and 19.7', function() {
    assert.strictEqual(calculateNumber(19.7, 19.7), 40);
  });

  it('should handle 20.3 and 20.3', function() {
    assert.strictEqual(calculateNumber(20.3, 20.3), 40);
  });

  it('should handle 20.5 and 20.5', function() {
    assert.strictEqual(calculateNumber(20.5, 20.5), 42);
  });

  it('should handle 20.7 and 20.7', function() {
    assert.strictEqual(calculateNumber(20.7, 20.7), 42);
  });

  it('should handle 21.3 and 21.3', function() {
    assert.strictEqual(calculateNumber(21.3, 21.3), 42);
  });

  it('should handle 21.5 and 21.5', function() {
    assert.strictEqual(calculateNumber(21.5, 21.5), 44);
  });

  it('should handle 21.7 and 21.7', function() {
    assert.strictEqual(calculateNumber(21.7, 21.7), 44);
  });

  it('should handle 22.3 and 22.3', function() {
    assert.strictEqual(calculateNumber(22.3, 22.3), 44);
  });

  it('should handle 22.5 and 22.5', function() {
    assert.strictEqual(calculateNumber(22.5, 22.5), 46);
  });

  it('should handle 22.7 and 22.7', function() {
    assert.strictEqual(calculateNumber(22.7, 22.7), 46);
  });

  it('should handle 23.3 and 23.3', function() {
    assert.strictEqual(calculateNumber(23.3, 23.3), 46);
  });

  it('should handle 23.5 and 23.5', function() {
    assert.strictEqual(calculateNumber(23.5, 23.5), 48);
  });

  it('should handle 23.7 and 23.7', function() {
    assert.strictEqual(calculateNumber(23.7, 23.7), 48);
  });

  it('should handle 24.3 and 24.3', function() {
    assert.strictEqual(calculateNumber(24.3, 24.3), 48);
  });

  it('should handle 24.5 and 24.5', function() {
    assert.strictEqual(calculateNumber(24.5, 24.5), 50);
  });

  it('should handle 24.7 and 24.7', function() {
    assert.strictEqual(calculateNumber(24.7, 24.7), 50);
  });

  it('should handle 25.3 and 25.3', function() {
    assert.strictEqual(calculateNumber(25.3, 25.3), 50);
  });

  it('should handle 25.5 and 25.5', function() {
    assert.strictEqual(calculateNumber(25.5, 25.5), 52);
  });

  it('should handle 25.7 and 25.7', function() {
    assert.strictEqual(calculateNumber(25.7, 25.7), 52);
  });

  it('should handle 26.3 and 26.3', function() {
    assert.strictEqual(calculateNumber(26.3, 26.3), 52);
  });

  it('should handle 26.5 and 26.5', function() {
    assert.strictEqual(calculateNumber(26.5, 26.5), 54);
  });

  it('should handle 26.7 and 26.7', function() {
    assert.strictEqual(calculateNumber(26.7, 26.7), 54);
  });

  it('should handle 27.3 and 27.3', function() {
    assert.strictEqual(calculateNumber(27.3, 27.3), 54);
  });

  it('should handle 27.5 and 27.5', function() {
    assert.strictEqual(calculateNumber(27.5, 27.5), 56);
  });

  it('should handle 27.7 and 27.7', function() {
    assert.strictEqual(calculateNumber(27.7, 27.7), 56);
  });

  it('should handle 28.3 and 28.3', function() {
    assert.strictEqual(calculateNumber(28.3, 28.3), 56);
  });

  it('should handle 28.5 and 28.5', function() {
    assert.strictEqual(calculateNumber(28.5, 28.5), 58);
  });

  it('should handle 28.7 and 28.7', function() {
    assert.strictEqual(calculateNumber(28.7, 28.7), 58);
  });

  it('should handle 29.3 and 29.3', function() {
    assert.strictEqual(calculateNumber(29.3, 29.3), 58);
  });

  it('should handle 29.5 and 29.5', function() {
    assert.strictEqual(calculateNumber(29.5, 29.5), 60);
  });

  it('should handle 29.7 and 29.7', function() {
    assert.strictEqual(calculateNumber(29.7, 29.7), 60);
  });

  it('should handle 30.3 and 30.3', function() {
    assert.strictEqual(calculateNumber(30.3, 30.3), 60);
  });

  it('should handle 30.5 and 30.5', function() {
    assert.strictEqual(calculateNumber(30.5, 30.5), 62);
  });

  it('should handle 30.7 and 30.7', function() {
    assert.strictEqual(calculateNumber(30.7, 30.7), 62);
  });

  it('should handle 31.3 and 31.3', function() {
    assert.strictEqual(calculateNumber(31.3, 31.3), 62);
  });

  it('should handle 31.5 and 31.5', function() {
    assert.strictEqual(calculateNumber(31.5, 31.5), 64);
  });

  it('should handle 31.7 and 31.7', function() {
    assert.strictEqual(calculateNumber(31.7, 31.7), 64);
  });

  it('should handle 32.3 and 32.3', function() {
    assert.strictEqual(calculateNumber(32.3, 32.3), 64);
  });

  it('should handle 32.5 and 32.5', function() {
    assert.strictEqual(calculateNumber(32.5, 32.5), 66);
  });

  it('should handle 32.7 and 32.7', function() {
    assert.strictEqual(calculateNumber(32.7, 32.7), 66);
  });

  it('should handle 33.3 and 33.3', function() {
    assert.strictEqual(calculateNumber(33.3, 33.3), 66);
  });

  it('should handle 33.5 and 33.5', function() {
    assert.strictEqual(calculateNumber(33.5, 33.5), 68);
  });

  it('should handle 33.7 and 33.7', function() {
    assert.strictEqual(calculateNumber(33.7, 33.7), 68);
  });

  it('should handle 34.3 and 34.3', function() {
    assert.strictEqual(calculateNumber(34.3, 34.3), 68);
  });

  it('should handle 34.5 and 34.5', function() {
    assert.strictEqual(calculateNumber(34.5, 34.5), 70);
  });

  it('should handle 34.7 and 34.7', function() {
    assert.strictEqual(calculateNumber(34.7, 34.7), 70);
  });

  it('should handle 35.3 and 35.3', function() {
    assert.strictEqual(calculateNumber(35.3, 35.3), 70);
  });

  it('should handle 35.5 and 35.5', function() {
    assert.strictEqual(calculateNumber(35.5, 35.5), 72);
  });

  it('should handle 35.7 and 35.7', function() {
    assert.strictEqual(calculateNumber(35.7, 35.7), 72);
  });
});

