function sendAlert(message) {

  alert(message)
}

function addItem() {
  var todo = document.getElementById("todo-item");

  this.addToList(todo.value);

  todo.value = null;
}

function addToList(message) {
  var list = document.getElementById("todo-list");
  var item = document.createElement("li");

  item.appendChild(document.createTextNode(message));
  list.appendChild(item);
}

var crossOut = document.querySelector("#todo-list");
crossOut.addEventListener("click", strike);

function strike(event) {
  var strikeOut = document.createElement('del');
}