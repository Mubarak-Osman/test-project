const getBestRevenuesTotal = require('./exercise-4');
const employees = require('../data/employees');

test('Exercise 4: Get best revenues total', () => {
    expect(getBestRevenuesTotal(employees)).toBe(2000000);
});
