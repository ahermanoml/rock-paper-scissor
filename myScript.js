// THIS FUNCTION DECIDES IF THE COMPUTER CHOOSES ROCK, PAPER OR SCISSOS
function getComputerChoice () {
    let rand = Math.floor(Math.random() * 10);
    if (rand <= 3) {
        return "Rock"
    } else if (rand <= 6) {
        return "Paper"
    } else {
        return "Scissors"
}}

// TESTING PLAYROUND FUNCTION
function playRound() { 
    const computerSelection = getComputerChoice();
    const loseMessage = "You lose! Paper beats Rock";
    const winMessage = "You win! Rock beats Scissors";
    const drawMessage = "Draw. You and the computer choosed Rock"
    const playerSelection = prompt("Rock, Paper or Scissors?", "Rock")
        if (computerSelection === "Paper" && playerSelection === "Rock") {
        alert (loseMessage);
       return loseMessage 
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        alert(drawMessage);
        return drawMessage 
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        alert(winMessage);
        return winMessage 
    } else {
        alert("Something went wrong")
    }
  }
    

function updatePlayerScore () {
    let playRoundResults = playRound();
    let playerScore = 0 + updatePlayerScore();
    //let computerScore = 0 + //previous computerScore;
    if (playRoundResults === "You win! Rock beats Scissors") {
        return updatePlayerScore() + 1;
    } else {
        return updatePlayerScore();
    }
 }

function updateComputerScore () {
    let playRoundResults = playRound ();
    let computerScore = 0 + updateComputerScore ();
    if (playRoundResults === "You lose! Paper beats Rock") {
        return updateComputerScore() + 1;
    } else {
        return updateComputerScore();
    }

}


function game() {
    for (let i = 0; i < 2 ; i++) {
        // your code here!]
        playRound();
        updateComputerScore();
        updatePlayerScore(); 
        }
        
     }
}

game();
//let playerFinalScore = updatePlayerScore();
//let computerFinalScore = updateComputerScore();
//alert (`Your score was ${playerFinalScore}. The computer socre was ${computerFinalScore}`);

