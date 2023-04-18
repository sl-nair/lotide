const eqObjects = require('./eqObject');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject); // => false



const multiColorShirtObject = { colors: ["red", "blue"] };
const anotherMultiColorShirtObject = { colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);

module.exports = assertObjectsEqual;