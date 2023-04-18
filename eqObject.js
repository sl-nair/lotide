const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const keys1 in object1) {
    if (Object.prototype.hasOwnProperty.call(object2, keys1)) {


      if (Array.isArray(object1[keys1])) {
        if (!eqArrays(object1[keys1], object2[keys1])) {
          return false;
        }
      } else if (object1[keys1] !== object2[keys1]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};



module.exports = eqObjects;