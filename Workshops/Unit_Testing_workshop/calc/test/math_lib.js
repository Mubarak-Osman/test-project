var math = require('../math_lib');
var assert = require('chai').assert;

describe('#add()', function() {
    it('5 + 3 = 8', function() {
      assert.equal(math.add("5", "3"), 8);
    })
    it('2 + 0 = 2', function() {
      assert.equal(math.add("2", "0"), 2);
    })
    it('2 + -2 = 0', function() {
      assert.equal(math.add("2", "0"), 2);
    })
    it('3.5 + 2 = 5.5', function() {
      assert.equal(math.add("3.5", "2.0"), 5.5);
    })
})

describe('#mul()', function() {
    it('4 * 7 = 28', function() {
      assert.equal(math.mul("4", "7"), 28);
    })
    it('9 * 0 = 0', function() {
      assert.equal(math.mul("9", "0"), 0);
    })
    it('0 * 8 = 0', function() {
      assert.equal(math.mul("0", "8"), 0);
    })
})
