// Arrow function
videos = ["one", "two", "three"];

const arrowVideos = videos.map((video) => {
  return video.length < 4 ? video : "Oops";
});

// console.log(arrowVideos);

// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// const sayBye = () => {
//   console.log("Bye");
// };

// sayBye();
// SORT

// Sort works good on strings but not on integers
const items = ["Banana", "Orange", "Apple"];
const price = [1, 31, 1212, 3132, 4341, 221, 2];

// console.log(price.sort());
// console.log(items.sort());
// price.sort((a, b) => {
//   return a - b;
// });

// console.log(price);

// Spread operator
const increasePrice = [...price];

increasePrice.sort((a, b) => {
  return a - b;
});

console.log(increasePrice);
console.log(price);
