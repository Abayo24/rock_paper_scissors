let humanScore = 0;
let commputerScore = 0;


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice;

    if (random === 0) {
        choice = "rock";
    } else if (random === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    console.log(choice);

}

function getHumanChoice() {
    let humanChoice = prompt("What's your choice rock paper or scissors?")
    console.log(humanChoice);
}

console.log(getComputerChoice());
console.log(getHumanChoice());