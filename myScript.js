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
function playRound(playerSelection, computerSelection) { 
    const loseMessage = "You lose! ";
    const winMessage = "You win! ";
    const drawMessage = "Draw."
      if (computerSelection === "Paper" && playerSelection === "Rock") {
        alert (loseMessage);
        return loseMessage 
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        alert(drawMessage);
        return drawMessage 
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        alert(winMessage);
        return winMessage 
    } else if (computerSelection === "Paper" && playerSelection === "Paper") {
        alert (drawMessage);
        return drawMessage 
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        alert(winMessage);
        return winMessage 
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        alert(loseMessage);
        return loseMessage 
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        alert (winMessage);
        return winMessage 
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        alert(loseMessage);
        return loseMessage 
    } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
        alert(drawMessage);
        return drawMessage 
    } else {
        alert("Something went wrong")
    }
  }

let playerScore = 0;
 
function updatePlayerScore1(message) { 
    let playRoundResults = message;
    if (playRoundResults === "You win! Rock beats Scissors") {
      playerScore += 1;
    }
    else {
      playerScore += 0  
    }
   return playerScore;
}

function winner (playerScore) {
    if (playerScore > 2) {
        return "You won the game!"
    }
    else {
        return "You lost the game!"
    }
}

function game() {
 for (let i = 0; i < 5 ; i++) {
     // your code here!
    let message = playRound(prompt("Rock, Paper or Scissors?", "Rock"), getComputerChoice());
    updatePlayerScore1(message);
}  
  alert(winner(playerScore));        
}

game();

/*
let message = playRound(prompt("Rock, Paper or Scissors?", "Rock"), getComputerChoice());
alert(`Your score was ${updatePlayerScore1(message)}`);
alert(winner(playerScore));
*/

