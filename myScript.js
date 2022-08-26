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
    

function updateScore () {
    let playRoundResults = playRound();
    let playerScore = 0;
    let computerScore = 0;
    if (playRoundResults === "You win! Rock beats Scissors") {
        playerScore += 1;
    } else  if (playRoundResults === "Draw. You and the computer choosed Rock") {
       playerScore += 0;
    } else if (playRoundResults === "You lose! Paper beats Rock") {
        computerScore += 1;
    } else {
        alert ("Yout update function is not working!")
    }    
    alert (`Your score was ${playerScore}. The computer score was ${computerScore}`)
    }



function game() {
    for (let i = 0; i < 1 ; i++) {
        // your code here!
        playRound();
     }
}

game();
updateScore();
