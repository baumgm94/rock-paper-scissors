const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const result = document.querySelector("#result-container");

let userName = prompt("Enter your name:", name);

function computerPlay() {
  const array = ["rock", "paper", "scissors"];
  //get random index value
  //Math.floor returns a whole number, while Math.random() will return a float between 0 and 1.
  //also Math.random z.B. 0.43 * länge vom Array (3) = 1.29 --> Math.floor returns the rounded float --> 1
  // so wird der randomIndex generiert
  const randomIndex = Math.floor(Math.random() * array.length);

  // get random item out of the array
  const item = array[randomIndex];

  return item;
}

function game(event) {
  //Funktionsaufruf damit ein Spielzug vom Computer generiert wird -> wird in computerSelection gespeichert
  const playerSelection = event.target.id;
  const computerSelection = computerPlay();
  const xy = playRound(playerSelection, computerSelection); // Ruft die playRound Funktion mit den Resultaten (von playerselection und computerselection) auf und werden innerhalb der playRound Funktion gegenüber gestellt um zu schauen wer gewonnen hat.
  const winner = document.createElement("div");
  winner.classList.add("winner-div");
  winner.textContent = xy;
  result.appendChild(winner);
}
rockButton.addEventListener("click", game);
paperButton.addEventListener("click", game);
scissorsButton.addEventListener("click", game);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return (
      userName + "(" + playerSelection + " beats " + computerSelection + ")"
    );
  } else {
    return (
      "Computer " + "(" + computerSelection + " beats " + playerSelection + ")"
    );
  }
}
