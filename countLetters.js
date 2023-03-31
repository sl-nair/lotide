const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} === ${expected}`);
  }
};


const countLetters = function(phrase) {
  let results = {};

  for (let letter of phrase) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

let countFunction = countLetters("LHL");
let expectedResult = {
  L:2,
  H:1
};

console.log(countFunction);
assertEqual(countFunction.L, expectedResult.L);