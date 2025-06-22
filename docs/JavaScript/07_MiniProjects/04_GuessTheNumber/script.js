let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const form = document.querySelector('.form');
const guessHint = document.querySelector('.lowOrHi');
const prevGuesses = document.querySelector('.guesses');
const guessesRemaining = document.querySelector('.lastResult');
const submitBtn = document.querySelector('#subt');
const resetBtn = document.querySelector('#resetBtn');
const totalGuesses = 10;

let guessAttempts = 1;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const guessValue = parseInt(userInput.value);
  const remainingGuesses = totalGuesses - guessAttempts;
  if (remainingGuesses >= 0)
    validateGuessValue({ guessValue, remainingGuesses });
  else {
    guessHint.innerHTML = `Oh no! You're out of tries, the number was ${randomNumber}`;
  }
});

resetBtn.addEventListener('click', function () {
  resetValues();
});

function validateGuessValue({ guessValue, remainingGuesses }) {
  if (isNaN(guessValue)) {
    alert('Please enter a valid number');
  } else if (guessValue < 1) {
    alert('Please enter a number greater than 1');
  } else if (guessValue > 100) {
    alert('Please enter a number lesser than 100');
  } else {
    checkGuessValue({ guessValue, remainingGuesses });
  }
}

function checkGuessValue({ guessValue, remainingGuesses }) {
  let message;
  guessesRemaining.innerHTML =
    remainingGuesses > 0 ? `${totalGuesses - guessAttempts}` : 'Last Guess';
  prevGuesses.innerHTML +=
    remainingGuesses > 0 ? `${guessValue}, ` : `${guessValue}`;
  guessAttempts++;
  if (randomNumber === guessValue) {
    message = 'Awesome! You guessed it right';
    guessHint.innerHTML = message;
  } else if (randomNumber > guessValue) {
    message = 'Please try again by increasing the guess number value';
    guessHint.innerHTML = message;
  } else {
    message = 'Please try again by decreasing the guess number value';
    guessHint.innerHTML = message;
  }
}

function resetValues() {
  guessHint.innerHTML = '';
  guessesRemaining.innerHTML = '10';
  prevGuesses.innerHTML = '';
  userInput.value = '';
  randomNumber = parseInt(Math.random() * 100 + 1);
  guessAttempts = 1;
}
