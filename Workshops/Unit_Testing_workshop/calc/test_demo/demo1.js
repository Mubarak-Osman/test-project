var addr = require('../math_lib');

// Manual-labor test code.
// Output needs manual human verification.
console.log('2 + 3 = ', addr.add(2, 3));
console.log('0 + 0 = ', addr.add(0, 0));
console.log('0 + 2 = ', addr.add(0, 2));
console.log('2 + 0 = ', addr.add(2, 0));
console.log('-5 + -3 = ', addr.add(-5, -3));
console.log('5 + -3 = ', addr.add(5, -3));
