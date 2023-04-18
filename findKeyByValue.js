const findKeyByValue  = function(theObject, value) {
  //scan the object to see what index the key of the value is at
  for (const eachKey in theObject) {
    //need to check if the value is equal to any value in the object
    if (value === theObject[eachKey]) {
      return eachKey;
    }
  }
};

module.exports = findKeyByValue;