const clients = require('../example-data/clients');


function getClientEmails(clients) {
    const emails = [];

    for (let i = 0; i < clients.length; i++) {
        const client = clients[i];
        if (client.email !== null) {
            emails.push(client.email);
        }
    }

    return emails;
}

console.log("Client E-Mails:", getClientEmails(clients));
