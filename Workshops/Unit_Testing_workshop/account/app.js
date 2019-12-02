const http = require('http');
const express = require('express');

const accounts = require('./accounts');

const hostname = 'localhost';
const port = 1337;

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/account', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');


    if (accounts.create(req.body.user, req.body.pwd)) {
        // Account creation is OK.
        res.statusCode = 200;
        res.send();
        return;
    }

    res.statusCode = 400;
    res.send("Invalid choice of username or password");
    return;
});

app.get('/account', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.send(accounts.list());
    return;
});

app.listen(port);
console.log(`Account server running at http://${hostname}:${port}/`);
