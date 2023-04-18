const flatten = function(inputs) {
  let newArray = [];
  for (const input of inputs) {
    if (Array.isArray(input)) {
      for (const inputArrayElements of input) {
        newArray.push(inputArrayElements);
      }
    } else {
      newArray.push(input);
    }
  }
  return newArray;
};

module.exports = flatten;