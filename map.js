const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`👎👎👎 Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
  }
  console.log(`👍👍👍 Assertion Passed: ${array1} === ${array2}`);
  return;
};

const num = [1,2,4]
const sum = map(num, num => num * 2)
assertArraysEqual(sum, [2,4,8])

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

const colours = ['red', 'green']
assertArraysEqual(map(colours, colour => `I like ${colour}`),['I like red', 'I like green'] )