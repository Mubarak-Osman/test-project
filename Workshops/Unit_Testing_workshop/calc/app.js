const http = require('http');
const express = require('express');

const math = require('./math_lib.js');

const hostname = 'localhost';
const port = 1337;

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/calc', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    if (req.query.op == "add") {
        res.statusCode = 200;
        res.send(math.add(req.query.num1, req.query.num2).toString());
        return;
    }
    if (req.query.op == "mul") {
        res.statusCode = 200;
        res.send(math.mul(req.query.num1, req.query.num2).toString());
        return;
    }

    res.statusCode = 404;
    res.send("Invalid op: " + req.query.op);
});

app.listen(port);
console.log(`Server running at http://${hostname}:${port}/`);
