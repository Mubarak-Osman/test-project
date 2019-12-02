var accounts = require('../accounts');
var assert = require('chai').assert;

describe('#create()', function() {
    it('can create a valid account', function() {
      assert.isTrue(accounts.create("foo1", "foobar123!!"));
    })
    it('cannot create duplicate account', function(){
      assert.isTrue(accounts.create("ali", "foobar123!!"));
      assert.isFalse(accounts.create("ali", "foobar123!!"));

})
it('empty password', function() {
  assert.isFalse(accounts.create("f002", ""));

}) 
it('7 character password', function(){
  assert.isFalse(accounts.create("foo3", "foo12"));
})

it ('only one number password' , function() {
  assert.isFalse(accounts.create("foo4", "fooob1!!"));

})
it('only one special cahracter password', function() {
  assert.isFalse(accounts.create("foo5", "Fooob11!"));

})

})
