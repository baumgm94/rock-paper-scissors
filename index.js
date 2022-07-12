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
//Funktionsaufruf und das random item wird in result gespeichert
//const result = computerPlay();
//console.log(result);

const choiceP = prompt("rock, paper, scissors?"); //String wird der variable playerSelection assigned
const playerSelection = choiceP.toLowerCase();
const computerSelection = computerPlay(); //computerPlay(); // result von der Funktion computerPlay() wird der variable computerSelection assigned

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}
/*onst winner = playRound(playerSelection, computerSelection); // Ruft die playRound Funktion mit den Resultaten (von playerselection und computerselection) auf und werden innerhalb der playRound Funktion gegenüber gestellt um zu schauen wer gewonnen hat.
console.log(winner); */

function game() {
  for (let i = 0; i < 5; i++) {
    const winner = playRound(playerSelection, computerSelection); // Ruft die playRound Funktion mit den Resultaten (von playerselection und computerselection) auf und werden innerhalb der playRound Funktion gegenüber gestellt um zu schauen wer gewonnen hat.
    return winner;
  }
}

const whoWon = game();
console.log(whoWon);