// Select elements from the DOM
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const computerChoiceEmoji = document.getElementById("computer-choice-emoji");
const playerChoiceEmoji = document.getElementById("player-choice-emoji");
const winnerAnnouncement = document.getElementById("winner-announcement");
const scoreboard = document.getElementById("scoreboard");

let playerScore = 0;
let computerScore = 0;

// Update the scoreboard
function updateScoreboard(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  scoreboard.textContent = `computer ${computerScore} ${playerScore} player`;
}

// Get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  if (randomChoice === "rock") {
    computerChoiceEmoji.textContent = "✊";
  } else if (randomChoice === "paper") {
    computerChoiceEmoji.textContent = "✋";
  } else {
    computerChoiceEmoji.textContent = "✌️";
  }
  return randomChoice;
}

// Play the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  playerChoiceEmoji.textContent =
    playerChoice === "rock" ? "✊" : playerChoice === "paper" ? "✋" : "✌️";

  if (playerChoice === computerChoice) {
    winnerAnnouncement.textContent = "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winnerAnnouncement.textContent = "player wins";
    updateScoreboard("player");
  } else {
    winnerAnnouncement.textContent = "computer wins";
    updateScoreboard("computer");
  }
}

// Add event listeners to the buttons
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
