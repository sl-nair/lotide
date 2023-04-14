//function
const middle = function(input) {
  let newArray = [];
  if (input.length <= 2) {
    return newArray;
  } else if (input.length % 2 !== 0) {
    newArray.push(input[Math.floor(input.length / 2)]);
  } else if (input.length % 2 === 0) {
    newArray.push(input[input.length / 2 - 1]);
    newArray.push(input[input.length / 2]);
  }
  return newArray;
};


module.exports = middle;