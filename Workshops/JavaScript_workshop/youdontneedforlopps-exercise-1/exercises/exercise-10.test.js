const employeesPerDepartment = require('./exercise-10');
const employees = require('../data/employees');

test('Exercise 10: Employees Per Department', () => {
    expect(employeesPerDepartment(employees)).toEqual({Assistance: 1, Consultation: 2, IT: 1, Law: 2, Management: 2, Sales: 4});
});
