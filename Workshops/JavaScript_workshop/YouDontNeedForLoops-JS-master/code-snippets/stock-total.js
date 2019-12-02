const inventory = require('../example-data/inventory');

/** Initial Code ***************************/

function initial(inventory) {
    const stockTotals = [];

    for (let item of inventory.items) {
        const stockTotal = {
            item: item.name,
            value: item.quantity * item.price
        };
        stockTotals.push(stockTotal)
    }

    return stockTotals;
}

console.log('Initial: ', initial(inventory));

/** Step 1: Generalize *********************/

function step1(items) {
    const results = [];

    for (let item of items) {
        const result = {
            item: item.name,
            value: item.quantity * item.price
        };
        results.push(result)
    }

    return results;
}

console.log('Step 1: ', step1(inventory.items));

/** Step 2: Extracting individual part*****/

function step2(items) {
    const callback = (item) => {
        return {
            product: item.name,
            value: item.quantity * item.price
        };
    };

    const results = [];

    for (let item of items) {
        const result = callback(item);
        results.push(result)
    }

    return results;
}

console.log('Step 2: ', step2(inventory.items));

/** Step 3: Use Array.map ***************/

function step3(clients) {
    const callback = (item) => {
        return {
            product: item.name,
            value: item.quantity * item.price
        };
    };

    const results = clients.map(callback);

    return results;
}

console.log('Step 3: ', step3(inventory.items));
