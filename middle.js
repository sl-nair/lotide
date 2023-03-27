//assertion
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

//function
const middle = function(input) {
  let newArray = [];
  if (input.length <= 2) {
    return newArray;
  } else if (input.length % 2 !== 0) {
    newArray.push(input[Math.floor(input.length / 2)]);
  } else if (input.length % 2 === 0) {
    newArray.push(input[input.length / 2 - 1]);
    newArray.push(input[input.length / 2]);
  }
  return newArray;
};


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4])

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
