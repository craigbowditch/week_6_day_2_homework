const assert = require('assert');
const Task = require('../models/task.js');

let task;
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
  it("should start as not completed", function(){
    const actual = task.isCompleted;
    assert.strictEqual(actual, false);
  })
  it("should be bale to be marked as complete", function(){
    task.markAsCompleted();
    const actual = task.isCompleted;
    assert.strictEqual(actual, true);
  })
})
