const assert = require('assert');
const Food = require('../models/food.js');

let food;
describe("Food", function(){
  beforeEach(function(){
    food = new Food("veal", 10);
  });

  it("should have a name", function(){
    const actual = food.name;
    assert.strictEqual(actual, "veal");
  })
  it("should have a replenishment value", function(){
    const actual = food.replenishmentValue;
    assert.strictEqual(actual, 10);
  })
})
