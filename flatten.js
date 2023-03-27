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
const flatten = function(inputs) {
  let newArray = [];
  for (let input of inputs) {
    if (Array.isArray(input)) {
      for (let inputArrayElements of input) {
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