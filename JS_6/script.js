'use strict';

let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

score1.textContent = 0;
score2.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

btnRoll.addEventListener('click', function () {
  const diceNumber = getRandomInt(6);
  diceEl.src = `dice-${diceNumber}.png`;
  diceEl.classList.remove('hidden');
  if (diceNumber === 1) {
    return;
  } else {
    currentScore += diceNumber;
    current0El.textContent = currentScore;
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
