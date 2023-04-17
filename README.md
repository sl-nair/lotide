# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sl.nair/lotide`

**Require it:**

`const _ = require('@sl.nair/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*   assertArraysEqual: asserts that two input arrays are equal
*   assertEqual: asserts that the two input value are equal
*   assertObjectsEqual: asserts that the two input objects are equal
*   countLetters: takes in a string as an arguement and returns an object that presents the number of times each letter appears in the string.
*   head: returns the first element of the array or string input  
*   tail: returns the array or string input without the first element
*   middle: takes an array as an arguement and returns the middle value if the array length is odd or the middle two values if the array length is even
*   countOnly: takes in an array and an objecta as arguments and returns an object containing counts of everything that the input object listed
*   eqArrays: takes in two arrays and return true if they are equal and false if not
*   eqObjects: takes in two objects and return true if they are equal and false if not
*   findKey: takes in an object and a callback function and returns the key that fulfills the callback function
*   findKeyByValue: takes in an object and a value and returns the first key that is assigned the input value
*   flatten: takes in an array containing elements including nested arrays of elements, and returns a flattened new array
*   letterPositions: takes in a string and returns an object that has the letters of the string as the key and a list of their indexes as their value
*   map: takes in an array and a callback function and returns an array with the results of the callback function on each element
*   takeUntil: takes in an array and returns a new array that contains items from the input until the callback provided returns a truthy value
*   without: takes in two arrays and returns a new array that that contains elements from the first array without the elements from the second array