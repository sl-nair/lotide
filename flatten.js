const assertArraysEqual = require('./assertArraysEqual.js');

const flatten = function(inputs) {
  let newArray = [];
  for (const input of inputs) {
    if (Array.isArray(input)) {
      for (const inputArrayElements of input) {
        newArray.push(inputArrayElements);
      }
    } else {
      newArray.push(input);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;