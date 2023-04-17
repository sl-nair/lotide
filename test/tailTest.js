const tail = require('../tail')
const assertEqual = require('../assertEqual')

const assert = require('chai').assert;

describe("tailTest", () => {
  it("returns [7] for [6,7]", () => {
    assert.deepEqual(tail([6,7]), [7]);
  });
  it("returns [\"Lighthouse\"] for [\"Hello\", \"Lighthouse\"]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]);
  });
})