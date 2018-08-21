const assert = require('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js');
const Task = require('../models/task.js');

describe("Task", function(){
  beforeEach(function(){
    task = new Task(10, 7, 50);
  });

  it("should have a difficulty value", function(){
    const actual = task.difficulty;
    assert.strictEqual(actual, 10);
  })
  it("should have an urgency value", function(){
    const actual = task.urgency;
    assert.strictEqual(actual, 7);
  })
  it("should have a reward value", function(){
    const actual = task.reward;
    assert.strictEqual(actual, 50);
  })
})
