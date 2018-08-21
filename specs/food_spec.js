const assert = require('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js');
const Task = require('../models/task.js');

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
