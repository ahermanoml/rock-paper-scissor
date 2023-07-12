let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', function() {
    playRound('Rock', getComputerChoice());
    div.innerText = "Algo aconteceu"
});

paper.addEventListener('click', function() {
    playRound('Paper', getComputerChoice());  
});

scissors.addEventListener('click', function() {
    playRound('Scissors', getComputerChoice());
});

let div = document.createElement('div');
div.setAttribute('id', 'result');
let container = document.querySelector('#container');
container.appendChild(div);



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



//  PLAYROUND FUNCTION 
function playRound(playerSelection, computerSelection) { 
    const loseMessage = "You lost!";
    const winMessage = "You won!";
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

/*let playerScore = 0;
let computerScore = 0;
 
function updatePlayerScore1(message) { 
    let playRoundResults = message;
    if (playRoundResults === "You won!") {
      playerScore += 1;
    }
    else if (playRoundResults === "You lost!"){
      computerScore += 1;  
    }
   return {playerScore, computerScore};
}

function winner (playerScore) {
    if (playerScore > computerScore) {
        return "You won the game!"
    }
    else if (computerScore > playerScore){
        return "You lost the game!"
    }
    else {
        return "The game was a draw."
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
*/

/*
let message = playRound(prompt("Rock, Paper or Scissors?", "Rock"), getComputerChoice());
alert(`Your score was ${updatePlayerScore1(message)}`);
alert(winner(playerScore));
*/

