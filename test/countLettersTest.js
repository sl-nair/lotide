const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

const countFunction = countLetters("LHL");
const expectedResult = {
  L:2,
  H:1
};

console.log(countFunction);
assertEqual(countFunction.L, expectedResult.L);