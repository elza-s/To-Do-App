var todoItems = [];


function sendAlert(message) {

  alert(message)
}

function addItem() {
  var todo = document.getElementById("todo-item");
  var itemText = todo.value;

  if (!this.todoItems.includes(itemText)) {
    this.addToList(itemText);
  }
  else {
    alert("Please enter a new item!")
  }
  todo.value = null;
}

function addToList(message) {
  var list = document.getElementById("todo-list");
  var item = document.createElement("li");

  this.todoItems.push(message);


  item.appendChild(document.createTextNode(message));
  list.appendChild(item);
}


// /*
// var itemCheck = document.querySelector("li");
// debugger
// function strike(event) {
//   var strikeOut = document.createElement('del');
// }
// itemCheck.addEventListener("click", strike);

// var todoList = document.querySelector(".todoList")
// todoList.addEventListener('click', deleteCheck)
// function deleteCheck(e) {
//   var item = e.target;

//   item.style.textDecoration = 'line-through'
// }
// 