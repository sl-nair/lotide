const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

console.log(tail([5,6,7,8,9]));
console.log(tail([5]));
console.log(tail([]));


assertEqual(tail([6,7]), 7);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");