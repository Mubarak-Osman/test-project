const dobule = require('./exercise-5');

test('Exercise 5: Double all numbers', () => {
    const numbers = [-1, 0, 1, 2, 3];
    expect(dobule(numbers)).toEqual([-2, 0, 2, 4, 6]);
});
