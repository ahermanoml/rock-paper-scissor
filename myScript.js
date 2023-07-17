let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


let div = document.createElement('div');
div.setAttribute('id', 'result');
let container = document.querySelector('#container');
container.appendChild(div);


rock.addEventListener('click', function() {
   let results =  playRound('Rock', getComputerChoice());
    div.innerText = results;
});
paper.addEventListener('click', function() {
    let results =  playRound('Paper', getComputerChoice());
    div.innerText = results;
});
scissors.addEventListener('click', function() {
    let results =  playRound('Scissors', getComputerChoice());
    div.innerText = results;
});


// THIS FUNCTION DECIDES IF THE COMPUTER CHOOSES ROCK, PAPER OR SCISSOS 
function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
        return "Rock"
    } else if (rand == 1) {
        return "Paper"
    } else {
        return "Scissors"
}}



//  PLAYROUND FUNCTION 
function playRound(playerSelection, computerSelection) { 
    let loseMessage = "You lost!";
    let winMessage = "You won!";
    let drawMessage = "Draw."
      if (computerSelection === "Paper" && playerSelection === "Rock") {
        //alert (loseMessage);
        loseMessage += ` The computer chose ${computerSelection}`
        return loseMessage 
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        //alert(drawMessage);
        drawMessage += ` The computer chose ${computerSelection}`
        return drawMessage 
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        //alert(winMessage);
        winMessage += ` The computer chose ${computerSelection}`
        return winMessage 
    
    } else if (computerSelection === "Paper" && playerSelection === "Paper") {
        //alert (drawMessage);
        drawMessage += ` The computer chose ${computerSelection}`
        return drawMessage 
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        //alert(winMessage);
        winMessage += ` The computer chose ${computerSelection}`
        return winMessage 
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        //alert(loseMessage);
        loseMessage += ` The computer chose ${computerSelection}`
        return loseMessage 
    
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        //alert (winMessage);
        winMessage += ` The computer chose ${computerSelection}`
        return winMessage 
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        //alert(loseMessage);
        loseMessage += ` The computer chose ${computerSelection}`
        return loseMessage 
    } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
        //alert(drawMessage);
        drawMessage += ` The computer chose ${computerSelection}`
        return drawMessage 
    } else {
        alert("Something went wrong")
    }
  }

let gameResult = playRound;
/*
let playerScore = function () {
    output = 0;
    if (playRound () = winMessage) {
        output += 1;
    } 
    return output
}

let computerScore = 0;
let resultMessage = document.createElement('div');
resultMessage.setAttribute('id', 'results')
resultMessage.innerText = `The current score is ${playerScore} for you, ${computerScore} for the computer.`
container.appendChild(resultMessage);


/*
function updatePlayerScore1(game, score) { 
    let output = score;
    if (game = "You won") {
        output += 1;
    }
    return output; 
};

updatePlayerScore1(gameResult, playerScore);

alert (updatePlayerScore1());


/*    if (playRoundResults === "You won!") {
      playerScore += 1;
    }
    else if (playRoundResults === "You lost!"){
      computerScore += 1;  
    }
   return {playerScore, computerScore};
}

/*function winner (playerScore) {
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

