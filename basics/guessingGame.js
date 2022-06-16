function guessingNumber() {
  let randomNumber = Math.random() * 11;
  let fixedNumber = Math.floor(randomNumber);
  let guess;

  do {
    guess = prompt("Guess a number b/w 1-10");
    console.log(guess, fixedNumber);
    if (guess < fixedNumber) {
      console.log("You guessed to low");
    } else if (guess > fixedNumber) {
      console.log("You guesses to high");
    }
  } while (fixedNumber != guess);
  console.log("YOu guessed the correct number");
}

guessingNumber();
