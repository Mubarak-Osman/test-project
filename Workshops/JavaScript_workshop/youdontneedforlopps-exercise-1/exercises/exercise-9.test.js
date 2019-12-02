const getShoppingCartTotal = require('./exercise-9');
const shopingCart = require('../data/shopping-cart');

test('Exercise 9: Get Shopping Cart Total', () => {
    expect(getShoppingCartTotal(shopingCart)).toBe(1901.00);
});
