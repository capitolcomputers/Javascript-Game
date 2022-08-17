'use strict';



  // APPLICATION STATE FOR GAME

let figure = Math.trunc(Math.random() * 20)+ 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener ('click', function () {

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number';

  } else if (guess === figure) {
    document.querySelector('.message').textContent = 'Correct';
    document.querySelector('.number').textContent = figure;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if ( guess !== figure) {
    if (score > 1) {
     document.querySelector('.message').textContent = guess > figure ? 'too high' : 'too low';
     score--;
    document.querySelector('.score').textContent = score;
    } else {
    document.querySelector('.message').textContent = 'You Lost';
     document.querySelector('.score').textContent = '0';
   }
  }
  // } else if (guess > figure) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // } else if (guess < figure)
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost';
  //     document.querySelector('.score').textContent = '0';
  //   }
})



  document.querySelector('.again').addEventListener('click', function () {
    // document.querySelector('.score').textContent = '20';
    score = 20;
    figure = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    const guess = Number((document.querySelector('.guess').value = 'null'));
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
  });
