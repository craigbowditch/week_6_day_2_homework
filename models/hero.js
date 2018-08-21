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
module.exports = Hero;
