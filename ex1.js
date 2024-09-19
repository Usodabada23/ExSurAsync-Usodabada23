//Ex1

let word = "Usodabada23";
let i = 0
function showWordByWord() {
  console.log(word[i]+"\n")
  i++;
  if (i === word.length) {
    console.log("Stopping the interval now.");
    clearInterval(intervalID); 
  }
}

const intervalID = setInterval(showWordByWord,1000)
