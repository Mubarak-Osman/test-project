const employees = require('../example-data/employees')

const minSales = 75000;

const totalRevenue = employees
    .filter(employee => {
        return employee.department === 'Sales';
    })
    .map((salesEmployees) => {
        return salesEmployees.customers;
    })
    .flat(1)
    .map(customer => {
        return customer.orders.reduce((acc, order) => {
            return acc + order.total;
        }, 0);
    })
    .filter(orderTotal => orderTotal >= minSales)
    .reduce((acc, orderTotal) => {
        return acc + orderTotal;
    }, 0);


console.log(`Total Revenue: ${totalRevenue}`);
