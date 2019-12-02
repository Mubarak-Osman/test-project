const clients = require('../example-data/clients');

/** Initial Code ***************************/

function initial(clients) {
    const clientEmails = [];

    for (let client of clients) {
        const clientEmail = client.email;
        clientEmails.push(clientEmail);
    }

    return clientEmails;
}

console.log('Initial: ', initial(clients));

/** Step 1: Generalize *********************/

function step1(items) {
    const results = [];

    for (let item of items) {
        const result = item.email;
        results.push(result);
    }

    return results;
}

console.log('Step 1:', step1(clients));

/** Step 2: Extracting individual part*****/

function step2(items) {
    const callback = (client) => {
        return client.email;
    };

    const results = [];


    for (let item of items) {
        const result = callback(item);
        results.push(result);
    }

    return results;
}

console.log('Step 2: ', step2(clients));

initial
