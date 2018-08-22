const Task = function(difficulty, urgency, reward){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isCompleted = false;
}


Task.prototype.markAsCompleted = function(){
  this.isCompleted = true;
}

module.exports = Task;
