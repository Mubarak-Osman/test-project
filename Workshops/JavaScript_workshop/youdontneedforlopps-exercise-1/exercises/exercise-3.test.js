const getSalesEmployees = require('./exercise-3');
const employees = require('../data/employees');

test('Exercise 3: Get sales employees', () => {

    const salesEmployees = [
        {
            name: 'Harvey Specter',
            department: 'Sales',
            email: 'harvey@specter.us',
            customers: [
                {name: 'Homer', orders: [{total: 50000}, {total: 75000}, {total: 17000}]},
                {name: 'Marge', orders: [{total: 9000}, {total: 6000}, {total: 44}]},
                {name: 'Bart', orders: [{total: 18000}, {total: 48000}, {total: 290000}]},
            ],
        },
        {
            name: 'Mike Ross',
            department: 'Sales',
            email: 'mike@ross.us',
            customers: [
                {name: 'Maggie', orders: [{total: 54000}, {total: 85000}, {total: 27000}]},
                {name: 'Seymour', orders: [{total: 400}, {total: 60000}, {total: 440}]},
                {name: 'Agnes', orders: [{total: 290000}, {total: 480000}, {total: 480000}]},
            ],
        },
        {
            name: 'Travis Tanner',
            department: 'Sales',
            email: 'travis@tanner.us',
            customers: [
                {name: 'Apu', orders: [{total: 8000}, {total: 4433}]},
            ],
        },
        {
            name: 'Robert Zane',
            department: 'Sales',
            email: 'robert@zane.us',
            customers: [
                {name: 'Patty', orders: [{total: 80000}, {total: 6000}]},
                {name: 'Selma', orders: [{total: 8000}]},
                {name: 'Carl', orders: [{total: 1960}, {total: 1989}, {total: 1992}]},
            ],
        }
    ];

    expect(getSalesEmployees(employees)).toEqual(salesEmployees);
});
