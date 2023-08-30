const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function askGuess() {
    rl.question('Enter a Guess ', (num) => {
        checkGuess(num);
        // console.log()
        rl.close();

})
    }

let secretNumber = 10

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
