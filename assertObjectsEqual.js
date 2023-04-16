const eqArrays = require('./eqArrays');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log(`👎👎👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return;
  }

  for (let keys1 in actual) {
    if (Object.prototype.hasOwnProperty.call(expected, keys1)) {
      if (Array.isArray(actual[keys1])) {
        if (!eqArrays(actual[keys1], expected[keys1])) {
          console.log(`👎👎👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
          return;
        }
      } else if (actual[keys1] !== expected[keys1]) {
        console.log(`👎👎👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        return;
      }
    } else {
      console.log(`👎👎👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      return;
    }
  }
  console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false



const multiColorShirtObject = { colors: ["red", "blue"]};
const anotherMultiColorShirtObject = {colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);

module.exports = assertObjectsEqual;