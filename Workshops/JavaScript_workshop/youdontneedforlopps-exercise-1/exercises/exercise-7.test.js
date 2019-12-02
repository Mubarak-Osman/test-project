const removeOddNumbers = require('./exercise-7');

test('Exercise 7: Even numbers', () => {
    expect(removeOddNumbers([0,1,2,3,4,5,6,7,8,9,10])).toEqual([0,2,4,6,8,10]);
});
