// An HTMLCollection is a collection of document elements  <h1> is a element
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
// QuerySelectpr is static
// HTML collection is dynamic
// Updation in console.log
// Use .children to update itself

// const collectionItems = document.getElementsByClassName("item");
// const todoNr = document.getElementsByClassName("todo-nr")[0];
// const todoList = document.getElementById("todo-list");
// // console.log(collectionItems, nodeItems);
// // console.log(nodeItems.childNodes);
// // const nodeItems = document.querySelector("#todo-list");

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "My third day was awesome";

// todoList.appendChild(newItem);

// // Update the amount of list items we have
// todoNr.innerText = collectionItems.length;

const nodeItems = document.querySelectorAll(".item");
const todoNr = document.querySelector(".todo-nr");
const todoList = document.querySelector("#todo-list");
// console.log(collectionItems, nodeItems);
// console.log(nodeItems.childNodes);
// const nodeItems = document.querySelector("#todo-list");

console.log(nodeItems);
const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "My third day was awesome";

todoList.appendChild(newItem);

// Update the amount of list items we have
todoNr.innerText = nodeItems.length;
