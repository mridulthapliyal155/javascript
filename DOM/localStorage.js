// Local Storage
// Only things we can store in local storage are strings
// How ever localstorage persists
// We cannot pass multiple items like this in localstorage
// localStorage.setItem("todo", "Feed the cat");
// localStorage.setItem("todo", "Feed the cat");
// localStorage.setItem("todo", "Feed the cat");
// Clear the storage
// localStorage.clear();

// Getting the stuff back
// const todo = localStorage.getItem("todo");
// console.log(todo);

// Session Item
// After we close the browser session storage get lost
// sessionStorage.setItem("todoList", "session feeding cat");

localStorage.clear();

const todoList = ["feed the cat", "wash"];

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));
console.log(retrieved);
