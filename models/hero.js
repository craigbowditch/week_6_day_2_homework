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
  return this.health += food.replenishmentValue;
}

module.exports = Hero;
