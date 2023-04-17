const countLetters = require('../countLetters');

let countFunction = countLetters("LHL");
let expectedResult = {
  L:2,
  H:1
};

console.log(countFunction);
assertEqual(countFunction.L, expectedResult.L);