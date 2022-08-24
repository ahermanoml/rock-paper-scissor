// THIS FUNCTION DECIDES IF THE COMPUTER CHOOSES ROCK, PAPER OR SCISSOS
function getComputerChoice () {
    var rand = Math.floor(Math.random() * 10);
    if (rand <= 3) {
        return "Rock"
    } else if (rand <= 6) {
        return "Paper"
    } else {
        return "Scissors"
}}

// I PUT THE COMPUTER CHOICE FUNCTION IN A CONST BOX
const computerSelection = getComputerChoice();

// TESTING PLAYROUND FUNCTION
function playRound(computerSelection) { 
        if (computerSelection === "Paper") {
        alert("You lose! Paper beats Rock")
    } else if (computerSelection === "Rock") {
        alert("Draw")
    } else if (computerSelection === "Scissors") {
        alert("You win!")
    } else {
        alert("Something went wrong")
    }
  }
   



function game() {
    for (let i = 0; i < 2 ; i++) {
        // your code here!
        playRound();
     }
}

game();
