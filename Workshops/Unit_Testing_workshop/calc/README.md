# PowerCoders
How-To run:
```
  npm install
  npm test
  node app
```
  Open browser to localhost:1337

app.js
  NodeJS server that listens to localhost port 1337. Responds to the
following HTTP requests.

  /
  
    Serves public/index.html

  /calc
  
    query params: num1, nums2, op

      op = add => returns num1 + num2
      op = mul => returns num1 * num2 [unimplemented]

math_lib.js

  Math library that implements addition and multiplication.

test_demo/demo[1-3].js

  Contains progressively better examples of crude automation testing.

test/math_lib.js
  NodeJS unit tests with Mocha+Chai framework.
