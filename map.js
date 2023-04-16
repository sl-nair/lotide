const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const num = [1,2,4]
const sum = map(num, num => num * 2)
assertArraysEqual(sum, [2,4,8])

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

const colours = ['red', 'green']
assertArraysEqual(map(colours, colour => `I like ${colour}`),['I like red', 'I like green'] )

module.exports = map;