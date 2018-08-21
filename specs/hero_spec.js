const assert = require('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js');
const Task = require('../models/task.js');


describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Captain Planet", "justice");
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
})