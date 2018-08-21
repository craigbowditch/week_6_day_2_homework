const Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return `By your powers combined..I am ${this.name}`;
};

Hero.prototype.eatFood = function(food){
  if (food.name === this.favouriteFood) {
    return  this.health += (food.replenishmentValue * 1.5);
  }
  else {
    return this.health += food.replenishmentValue;
  }
}

Hero.prototype.numberOfTasks = function(){
  return this.tasks.length;
};

Hero.prototype.addTask = function(task){
  return this.tasks.push(task);
};

Hero.prototype.sortByDifficulty = function() {
  function sortDifficulty(a, b) {
    return a.difficulty - b.difficulty;
  }
  return this.tasks.sort(sortDifficulty);
}

Hero.prototype.sortByUrgency = function() {
  function sortUrgency(a, b) {
    return a.urgency - b.urgency;
  }
  return this.tasks.sort(sortUrgency);
}
module.exports = Hero;
