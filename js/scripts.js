function toDoList() {
  this.toDos = {};
  this.currentId = 0;
}

toDoList.prototype.addToDo = function(todo) {
  todo.id = this.changeId();
  this.toDos[todo.id] = todo;
};

toDoList.prototype.changeId = function() {
  this.currentId += 1;
  return this.currentId;
};

toDoList.prototype.deleteToDo = function(id) {
  if (this.toDos[id] === undefined) {
    return false;
  }
  delete this.toDos[id];
  return true;
};



function toDo(description, completed) {
  this.description = description;
  this.completed = completed;
};

let todaysChores = new toDoList();

todaysChores.addToDo(new toDo("wash the dishes", false));
const feedKittens = new toDo("Feed the kittens", true);
const learnOOP = new toDo("learn object oriented programming", false);

todaysChores.addToDo(feedKittens);
todaysChores.addToDo(learnOOP);

console.log(todaysChores)