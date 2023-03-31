const letterPositions = function (phrase) {
  let results = {};
  let counter = 0;
  //loop through each letter of the phrase
  for (let letter of phrase) {

    if (results[letter]) {
      results[letter].push(counter);
    } else {
      results[letter] = [counter];
    }
    counter += 1;
  }
  return results;
};



const assertArraysEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`👎👎👎 Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
  }
  console.log(`👍👍👍 Assertion Passed: ${array1} === ${array2}`);
  return;
};


console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);