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

Hero.prototype.sortTasks = function(property) {
  this.tasks.sort(function(a, b){
    return a[property] - b[property];
  });
}

Hero.prototype.getCompletedTasks = function(){
  return this.tasks.filter(task => task.isCompleted)
};

Hero.prototype.getIncompletedTasks = function(){
  return this.tasks.filter(task => !task.isCompleted)
};


module.exports = Hero;
