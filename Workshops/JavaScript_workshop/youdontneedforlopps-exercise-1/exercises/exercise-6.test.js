const weekDays = require('./exercise-6');

test('Exercise 6: Days of week', () => {
    const dates = [
        new Date('2019-10-11'),
        new Date('2019-10-12'),
        new Date('2019-10-13'),
    ];
    expect(weekDays(dates)).toEqual(['Friday', 'Saturday', 'Sunday']);
});
