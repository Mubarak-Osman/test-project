var addr = require('../math_lib');

var test_cases = [
    [2, 3, 5],
    [0, 0, 0],
    [0, 2, 2],
    [2, 0, 2],
    [-5, -3, -8],
    [5, -3, 2],
];

for (test of test_cases) {
    if (addr.add(test[0], test[1]) == test[2]) {
        console.log("%s + %s = %s PASSED", test[0], test[1], test[2]);
    } else {
        console.log("%s + %s = %s FAILED", test[0], test[1], test[2]);
    }
}

