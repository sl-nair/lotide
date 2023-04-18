const takeUntil = function(array, callback) {
  let result = [];
  for (const num of array) {
    if (callback(num)) {
      break;
    }
    result.push(num);
  }
  return result;
};

module.exports = takeUntil;