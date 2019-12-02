const employees = require('../example-data/employees');

/** Initial Code ***************************/

function initial(employees) {
    const emails = [];

    for (let employee of employees) {
        if (employee.department === 'IT') {
            emails.push(employee.email)
        }
    }

    return emails;
}

console.log('Initial: ', initial(employees));

/** Step 1: Work only with IT-Dudes *********************/

function step1(employees) {

    const itEmployees = employees.filter((employee) => {
        return employee.department === 'IT'
    });

    const emails = [];

    for (let employee of itEmployees) {
        emails.push(employee.email)
    }

    return emails;
}

console.log('Step 1:', step1(employees));

/** Step 2: Use Map *********************/

function step2(employees) {

    const itEmployees = employees.filter((employee) => {
        return employee.department === 'IT'
    });

    const emails = itEmployees.map((employee) => {
        return employee.email;
    });

    return emails;
}

console.log('Step 2:', step1(employees));

/** Step 3: Remove temp Variable*****/

function step3(employees) {

    return employees.filter((employee) => {
        return employee.department === 'IT'
    }).map((employee) => {
        return employee.email;
    });
}


console.log('Step 3:', step3(employees));

