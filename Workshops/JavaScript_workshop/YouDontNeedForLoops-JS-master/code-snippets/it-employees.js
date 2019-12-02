const employees = require('../example-data/employees');

/** Initial Code ***************************/

function initial(employees) {
    const itEmployees = [];

    for (let employee of employees) {
        if(employee.department === 'IT') {
            itEmployees.push(employee)
        }
    }

    return itEmployees;
}

console.log('Initial: ', initial(employees));

/** Step 1: Generalize *********************/

function step1(items) {
    const results = [];

    for (let item of items) {
        if(item.department === 'IT') {
            results.push(item)
        }
    }

    return results;
}

console.log('Step 1:', step1(employees));

/** Step 2: Extracting individual part*****/

function step2(items) {
    const callback = (employee) => {
        return employee.department === 'IT'
    };

    const results = [];


    for (let item of items) {
        if(callback(item)) {
            results.push(item);
        }
    }

    return results;
}

console.log('Step 2: ', step2(employees));

/** Step 3: Use Array.filter ***************/

function step3(employees) {
    const callback = (employee) => {
        return employee.department === 'IT';
    };

    const results = employees.filter(callback);

    return results;
}

console.log('Step 3: ', step3(employees));
