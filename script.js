let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function playRound(userChoice) {
  if (currentRound >= 5) return;

  const computerChoice = getComputerChoice();

  let computerEmoji = computerChoice === "rock" ? "✊" :
                      computerChoice === "paper" ? "✋" : "✌️";
  document.getElementById("computerChoice").innerHTML = `Computer 🐱<div class="hand-row"><span class="emoji">${computerEmoji}</span></div>`;

  if (userChoice === computerChoice) {
    setMessage("It's a draw!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    setMessage("You win this round!");
  } else {
    computerScore++;
    setMessage("Computer wins this round!");
  }

  currentRound++;
  updateScore();

  if (currentRound === 5) {
    declareFinalResult();
  }
}

function updateScore() {
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("round").innerText = currentRound;
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function declareFinalResult() {
  let winnerText = "";

  if (playerScore > computerScore) {
    winnerText = "🎉 You won the game!";
  } else if (playerScore < computerScore) {
    winnerText = "💻 Computer won the game!";
  } else {
    winnerText = "🤝 It's a draw!";
  }

  document.getElementById("winnerBox").innerText = winnerText;
  document.getElementById("winnerBox").style.display = "block";

  // Hide choices
  document.getElementById("choicesBox").style.display = "none";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 0;
  updateScore();
  setMessage("Make your move!");
  document.getElementById("computerChoice").innerHTML = "Computer 🐱";
  document.getElementById("winnerBox").style.display = "none";
  document.getElementById("choicesBox").style.display = "flex";
}
