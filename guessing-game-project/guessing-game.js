const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numAttempts = 5;
let secretNumber = 15;

let checkGuess = (num) => {
  if (num === secretNumber) {
    console.log("Correct!");
    return true;
  }
  if (num < secretNumber) {
    console.log("Too low");
    return false;
  }
  if (num > secretNumber) {
    console.log("Too high");
    return false;
  }
};

let askGuess = () => {
  numAttempts--;
  if (numAttempts > -1) {
    rl.question("'Enter a guess: ", (answer) => {
      console.log("Attempts Remaining " + numAttempts);
      if (checkGuess(Number(answer))) {
        console.log("You win!");
        rl.close();
      } else {
        askGuess();
      }
    });
  } else {
    console.log("You Lose");
    rl.close();
  }
};

let randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let askRange = () => {
  rl.question("Enter a max number: ", (max) => {
    rl.question("Enter a min number: ", (min) => {
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      secretNumber = randomInRange(Number(min), Number(max));
      console.log("You have " + numAttempts + " attempts");
      askGuess();
    });
  });
};

let askLimit = () => {
  rl.question("Enter num of attempts: ", (num) => {
    numAttempts = Number(num);
    askRange();
  });
};

askLimit();
