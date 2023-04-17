const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, remove) {
  let newArray = [];
  let hasTrash = false;
  for (const item of source) {
    for (const trash of remove) {
      if (item === trash) {
        hasTrash = true;
        break;
      }
    }
    if (!hasTrash) {
      newArray.push(item);
    }
    hasTrash = false;
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;