const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function askGuess() {
    rl.question('Enter a Guess ', (num) => {
        if (checkGuess(num) === false){
            askGuess();
        }
        else {
            rl.close();
        }


})
    }
    const randomInRange= (min, max) => {
        min= Math.ceil(min);
        max=Math.floor(max);
        return Math.floor(Math.random()*(max-min + 1) + min);
    }

let secretNumber = randomInRange(1,100);

function checkGuess(num) {

    if (Number(num) < secretNumber) {
        console.log("Too Low");
        return false;
    }
    if (Number(num) > secretNumber) {
        console.log("Too High");
        return false;
    }
    if (Number(num) === secretNumber) {
        console.log("Correct!");
        return true;
    }
}



askGuess()
