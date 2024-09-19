const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = randomNumber();
let flag = false;
let id;
function question() {
  rl.question("Try to found : ", (choice) => {
    if (parseInt(choice) == numberToGuess) {
      console.log("correct :)");
      flag = true;
      clearInterval(id);
      rl.close();
    } else if (parseInt(choice) > numberToGuess) {
      console.log("is too high");
      question();
    } else if (parseInt(choice) < numberToGuess) {
      console.log("is too low");
      question();
    }
  });
}

function welcom() {
  return "Welcome, \n\nGuess the number game \n*****************\n\n";
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
function game() {
  question();
  if (flag == true) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    console.log("\nyou loose :<");
    rl.close();
  }, 10000);
}

console.log(welcom());
game();
