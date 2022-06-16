// Global Scope

// Var has no scope so its dangerous to use var!!!!!
let food = "Apple";
let fruits = 5;

function store() {
  // Function Scope
  let food = "Banana";
  let fruits = 10;
  console.log(food, fruits);
}

console.log(food, fruits);

store();

// Block Scope
