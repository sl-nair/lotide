const takeUntil = function (array, callback) {
  let result = [];
  for (let num of array) {
    if (callback(num)){
      break;
    }
    result.push(num)
  } 
  return result
}


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




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ] );

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;