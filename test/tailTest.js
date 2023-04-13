const tail = require('../tail')
const assertEqual = require('../assertEqual')

console.log(tail([5,6,7,8,9]));
console.log(tail([5]));
console.log(tail([]));


assertEqual(tail([6,7]), 7);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");