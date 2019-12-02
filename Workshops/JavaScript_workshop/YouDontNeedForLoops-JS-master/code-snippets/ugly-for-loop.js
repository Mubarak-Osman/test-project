const employees = require('../example-data/employees')

let totalRevenue = 0;
const minSales = 75000;

for (let employee of employees) {
    if(employee.department === 'Sales') {
        const customers = employee.customers;
        for (let customer of customers) {
            let customerTotalSales = 0;
            for  (let order of customer.orders) {
                customerTotalSales += order.total;
            }
            if (customerTotalSales >= minSales) {
                totalRevenue += customerTotalSales
            }
        }
    }
}

console.log(`Total Revenue: ${totalRevenue}`);
