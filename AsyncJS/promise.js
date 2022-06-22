// Promis is the eventual either a value good or bad
// Promise has 3 states pending, success and fail

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("your fake data here");
      }
      reject("request Error ");
    }, 1000);
  });
};
// new Promise((resolve, reject) => {
//   resolve();
// });

const req = fakeRequest("/dogs/1")
  .then((data) => {
    console.log("DOne with request", data);
  })
  .catch((error) => {
    console.log("OHH NOO", error);
  });
console.log(req);
