const Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return `By your powers combined..I am ${this.name}`;
};


module.exports = Hero;
