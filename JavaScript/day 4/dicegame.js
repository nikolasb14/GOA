let userScore = 0;
let computerScore = 0;

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  const userRoll = rollDie();
  const computerRoll = rollDie();

  displayResult(userRoll, computerRoll);
  updateScore(userRoll, computerRoll);
}

function displayResult(userRoll, computerRoll) {
  const resultElement = document.getElementById('result');
  const resultMessage = (userRoll > computerRoll) ? 'You win!' :
                        (userRoll < computerRoll) ? 'Computer wins!' :
                        'It\'s a tie!';
  
  const userResult = `You rolled: ${userRoll}`;
  const computerResult = `Computer rolled: ${computerRoll}`;
  
  resultElement.innerHTML = `${resultMessage}<br>${userResult}<br>${computerResult}`;
}

function updateScore(userRoll, computerRoll) {
  const scoreElement = document.getElementById('score');

  if (userRoll > computerRoll) {
    userScore++;
  } else if (userRoll < computerRoll) {
    computerScore++;
  }

  scoreElement.textContent = `User: ${userScore} | Computer: ${computerScore}`;
}