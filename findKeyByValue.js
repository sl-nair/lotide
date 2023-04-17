const assertEqual = require('./assertEqual');

const findKeyByValue  = function(theObject, value) {
  //scan the object to see what index the key of the value is at
  for (const eachKey in theObject) {
    //need to check if the value is equal to any value in the object
    if (value === theObject[eachKey]) {
      return eachKey;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;