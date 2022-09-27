const current0El = document.getElementById('current--');
const current1El = document.getElementById('current--');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const player0EL = document.querySelector('.player--');
const  player1EL = document.querySelector('.player--');
const btnRollEl = document.querySelector('.btn--roll');
const btNewEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

diceEl.classList.add('hidden')
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0
score1El.textContent = 0

btnRollEl.addEventListener('click', function () {

  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
   diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
currentScore = currentScore + dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
  }
})

btnHoldEl.addEventListener('click', function() {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
       diceEl.classList.add('hidden');

         document
           .querySelector(`.player--${activePlayer}`)
           .classList.add('player--winner');

            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

 } else {
 document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
 }
  }
})

 btNewEl.addEventListener('click', function () {
diceEl.classList.add('hidden');
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;


        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');


document.getElementById(`current--${activePlayer}`).textContent = 0;

//  const dice = Math.trunc(Math.random() * 6) + 1;
//  diceEl.classList.remove('hidden');
//  diceEl.src = `dice-${dice}.png`;


// playing === true;
// currentScore = currentScore + dice;
// document.getElementById(`current--${activePlayer}`).textContent = currentScore;
})