var addr = require('../math_lib');
var assert = require('chai').assert;

// Very laborious to write. Difficult to read.
if (addr.add(2,3) == 5) {
    console.log("2 + 3 = 5 PASS");
} else {
    console.log("2 + 3 = 5 FAIL");
}

if (addr.add(0,0) == 0) {
    console.log("0 + 0 = 0 PASS");
} else {
    console.log("0 + 0 = 0 FAIL");
}

if (addr.add(0,2) == 2) {
    console.log("0 + 2 = 2 PASS");
} else {
    console.log("0 + 2 = 2 FAIL");
}
