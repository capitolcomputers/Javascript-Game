'use strict';

const player0El = document.querySelector('.player--');
const player1El = document.querySelector('.player--');
const current0El = document.getElementById('current--');
const current1El = document.getElementById('current--');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const btnrollEl =  document.querySelector('.btn--roll');
const btnnewEl =  document.querySelector('.btn--new');
const btnholdEl =  document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

// let activePlayer = 0; 
const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// Reuseable function;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player--${0}`).classList.toggle('player--active');
  document.querySelector(`.player--${1}`).classList.toggle('player--active');
};

btnrollEl.addEventListener('click', function (){

const dice = Math.trunc(Math.random() * 6) + 1;
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`

if (dice !== 1) {
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {
switchPlayer ();
// player0El.classList.toggle('player--active');
// player1El.classList.toggle('player--active');
}
})

 btnholdEl.addEventListener('click', function () {

scores[activePlayer] += currentScore;
 document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
 switchPlayer ();

 if (scores[activePlayer] >= 20) {

 } else  {

 }
 })
