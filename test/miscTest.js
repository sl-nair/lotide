describe("miscellaneous tests for the functions that the tests were not required", () => {
  it("runs all misc tests succesfully", () => {

    const assertEqual = require('../assertEqual');
    // assertObjectsEqual
    const assertObjectsEqual = require('../assertObjectsEqual');

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

    // countOnly
    const countOnly = require('../countOnly');
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assertEqual(result1["Jason"], 1);
    assertEqual(result1["Karima"], undefined);
    assertEqual(result1["Fang"], 2);
    assertEqual(result1["Agouhanna"], undefined);

    // findKey
    const findKey = require('../findKey');
    assertEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2), "noma"); // => "noma"

    // findKeyByValue
    const findKeyByValue = require('../findKeyByValue');
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
    assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

    // flatten
    const assertArraysEqual = require('../assertArraysEqual.js');
    const flatten = require('../flatten');
    console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
    assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

    // letterPositions
    const letterPositions = require('../letterPositions');
    console.log(letterPositions("hello"));
    assertArraysEqual(letterPositions("hello").e, [1]);

    // map
    const map = require('../map');
    const num = [1, 2, 4];
    const sum = map(num, num => num * 2);
    assertArraysEqual(sum, [2, 4, 8]);
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

    const colours = ['red', 'green'];
    assertArraysEqual(map(colours, colour => `I like ${colour}`), ['I like red', 'I like green']);

    // takeUntil
    const takeUntil = require('../takeUntil');

    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results11 = takeUntil(data1, x => x < 0);
    assertArraysEqual(results11, [1, 2, 5, 7, 2]);

    console.log('---');

    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

    // 
    const without = require('../without');
    console.log(without([1, 2, 3], [1])); // => [2, 3]
    console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

    const words1 = ["hello", "world", "lighthouse"];
    without(words1, ["lighthouse"]); // no need to capture return value for this test case
    assertArraysEqual(words1, ["hello", "world", "lighthouse"]);
  });
});
