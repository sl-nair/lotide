// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require("./countOnly");
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObject');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')


module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  head: head,
  tail: tail,
  middle: middle,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey:findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions:letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};