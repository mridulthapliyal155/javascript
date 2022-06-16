const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todo_nr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");
// console.log(todo_nr);
const items = todoList.children;
console.log(items);
// // Click, scroll, ....
// // Attach a event listner

// button.addEventListener("click", function () {
//   const newItem = document.createElement("li");
//   newItem.classList.add("item");
//   newItem.innerText = `Item ${items.length + 1}`;
//   todoList.appendChild(newItem);
//   todo_nr.innerText = items.length;
// });

button.addEventListener("click", function (e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = nameInput.value;
  nameInput.value = "";
  todoList.appendChild(newItem);
  todo_nr.innerText = items.length;

  newItem.addEventListener("click", function (e) {
    e.stopPropagation();
    e.target.remove();
  });
});

// button.addEventListener("click", function () {
//   mainTitle.classList.toggle("color");
// });

// Event bubling when you click on something you click on multiple things
// To stop it use e.stoppropogation()
