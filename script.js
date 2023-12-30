
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
let items = [rock, scissors, paper];
let random = Math.floor(Math.random() * 3);
let choice = items[random];
return choice;
}

let playerSelection = prompt("Pick");
let computerSelection = getComputerChoice();

function playRound() {
  if (playerSelection === computerSelection) {
    result = "Its a Tie!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "Paper beats Rock! You are the winner";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "Scissors beats paper! Computer is the winner";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result = "Paper beats Rock! The Computer is the loser";
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "Rock beats Scissors! The Computer is the loser";
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "Scissors beats Paper! Computer Lost";
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "Rock beats Sicssors, The computer is the winner!";
}

return result;

}

function game() {
  for (let i = 0; i < 5; i++) {
  console.log(playRound(playerSelection, computerSelection))
}
}



