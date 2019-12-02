// Exercise 1: Write a function that returns an array with the email addresses of all employees using a common loop:

function getEmails(employees) {
    let emails = [];
    for(let i = 0; i < employees.length; i++) {
        emails.push(employees[i].email);
    }
    return emails;
    }
    
    module.exports = getEmails;
    