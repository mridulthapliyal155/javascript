// Library Made for making http requests
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Ohh noo error", err);
//   });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("error", e);
  }
};

getStarWarsPerson(5);

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    //   console.log(res.data.joke);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY";
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("LI");
  newLi.append(jokeText);
  jokes.append(newLi);
};

// getDadJoke();

button.addEventListener("click", addNewJoke);
