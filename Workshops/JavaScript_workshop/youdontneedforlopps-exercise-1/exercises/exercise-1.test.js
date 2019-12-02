const getEmails = require('./exercise-1');
const employees = require('../data/employees');

test('Exercise 1: Get emails of all employees', () => {

    const emails = [
        'harvey@specter.us',
        'mike@ross.us',
        'travis@tanner.us',
        'robert@zane.us',
        'louis@litt.us',
        'donna@paulsen.us',
        'jessica@pearson.us',
        'katrina@bennett.us',
        'daniel@hardman.us',
        'sheila@sazs.us',
        'harold@jakowski.us',
        'jenny@griffith.us'
    ];

    expect(getEmails(employees)).toEqual(emails);
});
