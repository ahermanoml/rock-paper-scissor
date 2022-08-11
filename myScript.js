var test = "teste";

function getComputerChoice () {
    var rand = Math.floor(Math.random() * 10);
    if (rand <= 3) {
        return "Rock"
    } else if (rand <= 6) {
        return "Paper"
    } else {
        return "Scissors"
}}

function playRound(playerSelection, computerSelection) {
    // your code here!
    prompt("Rock, scissors or paper?", "Rock");
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock"
    } else {
        return "Not rock and paper"
    }
  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        playRound();
     }
}

game();
