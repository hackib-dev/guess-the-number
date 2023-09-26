'use strict';

// create a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const toggleCheck = function (check) {
  document.querySelector('.check').disabled = check;
};
const backgroundColor = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❌ Not a number...');
  } else if (guess === secretNumber) {
    displayMessage('✅Guess correct');
    displayNumber(secretNumber);
    backgroundColor('#60b347');
    toggleCheck(true);
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈Too high...' : '📉Too low...');
      score--;
      displayScore(score);
    } else {
      displayMessage('Game over❗❗❗');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.guess').value = '';
  displayScore(score);
  toggleCheck(false);
  backgroundColor('#222');
  displayMessage('Start guessing...');
  displayNumber('?');
});
