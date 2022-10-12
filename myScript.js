// THIS FUNCTION DECIDES IF THE COMPUTER CHOOSES ROCK, PAPER OR SCISSOS - THIS IS DONISH
function getComputerChoice () {
    let rand = Math.floor(Math.random() * 10);
    if (rand <= 3) {
        return "Rock"
    } else if (rand <= 6) {
        return "Paper"
    } else {
        return "Scissors"
}}

// TESTING PLAYROUND FUNCTION - THIS IS DONISH
function playRound(playerSelection, computerSelection) { 
   /* const computerSelection = getComputerChoice(); */
   
    const loseMessage = "You lose! Paper beats Rock";
    const winMessage = "You win! Rock beats Scissors";
    const drawMessage = "Draw. You and the computer chose Rock"
    //const playerSelection = prompt("Rock, Paper or Scissors?", "Rock")
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


 
function updatePlayerScore1() { 
    let playRoundResults = playRound();
    if (typeof playerScore === undefined) {
        let playerScore = 0;
        if (playRoundResults === "You win! Rock beats Scissors") {
            playerScore += 1;
        }   
    }
    else {
        let playerScore = 0;
        if (playRoundResults === "You win! Rock beats Scissors") {
            playerScore += 1;
        }   
    }
   return playerScore;
 }


/*function updateComputerScore1() {
   let playRoundResults = playRound ();
   let computerScore = 0;
  if (playRoundResults === "You lose! Paper beats Rock") {
      return computerScore + 1;
  } else {
      return computerScore;
  }

}*/

function game() {
 for (let i = 0; i < 2 ; i++) {
     // your code here!]
     playRound(prompt("Rock, Paper or Scissors?", "Rock"), getComputerChoice());
 }         
}

game();
alert(updatePlayerScore1());
//let playerFinalScore = updatePlayerScore();
//let computerFinalScore = updateComputerScore();
//alert (`Your score was ${playerFinalScore}. The computer socre was ${computerFinalScore}`);


