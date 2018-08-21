const assert = require('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js');
const Task = require('../models/task.js');


describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Captain Planet", "justice");
    task1 = new Task(4, 8, 50);
    task2 = new Task(2, 5, 30);
    task3 = new Task(9, 6, 40);
  })
  it("should have a name", function(){
    const actual = hero.name;
    assert.strictEqual(actual, "Captain Planet");
  })
  it("should have 100 health initially", function(){
    const actual = hero.health;
    assert.strictEqual(actual, 100);
  })
  it("should have a favourite food", function(){
    const actual = hero.favouriteFood;
    assert.strictEqual(actual, "justice");
  })
  it("should have no tasks initially", function(){
    const actual = hero.tasks;
    assert.deepStrictEqual(actual, []);
  })
  it("should be able to say name", function(){
    const actual = hero.talk();
    assert.strictEqual(actual, "By your powers combined..I am Captain Planet");
  })
  it("should be able to eat food and replenish health", function(){
    const food = new Food("cheese", 10);
    const actual = hero.eatFood(food);
    assert.strictEqual(actual, 110);
  })
  it("should increase replenish value by 1.5 if favourite food eaten", function(){
    const food = new Food("justice", 10)
    const actual = hero.eatFood(food);
    assert.strictEqual(actual, 115);
  })
  it("should get number of tasks", function(){
    const actual = hero.numberOfTasks();
    assert.strictEqual(actual, 0);
  })
  it("should add task to task array", function(){
    hero.addTask(task1);
    const actual = hero.numberOfTasks();
    assert.strictEqual(actual, 1);
  })
  it("should sort tasks by difficulty", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    const actual = hero.sortByDifficulty();
    assert.deepStrictEqual(actual, [task2, task1, task3]);
  })
})
