let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        console.log("Computer wins! paper beats rock");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        console.log("You Win! rock beats scissors")
    } else if (humanChoice === "paper" && computerChoice ===  "rock") {
        humanScore += 1;
        console.log("You Win! paper beats rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        console.log("Computer Wins! scissors beats paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log("Computer Wins! rock beats scissors")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log("You Win! scissors beats paper");
    } else {
        console.log("you draw!")
    }
}


function playGame() {
    for (let i = 0; i <= 4;  i++) {
        const humanSelection =  getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

let totalScore = () => {
    if (humanScore > computerScore) {
        return console.log(`you win with ${humanScore} computer Score: ${computerScore}`)
    } else if(humanScore === computerScore) {
        return console.log("Draw!")
    } else {
        return console.log(`Computer wins computer score: ${computerScore}  your score: ${humanScore}`)
    }
}

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

    return choice;

}

function getHumanChoice() {
    let humanChoice = prompt("What's your choice rock paper or scissors?");
    choice = humanChoice.toLowerCase();
    return choice;
}

playGame();
console.log(totalScore());