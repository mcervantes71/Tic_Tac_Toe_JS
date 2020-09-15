import './css/reset.css';
import './css/style.css';

import init from './js/init';
import Player from './js/player';
import Board from './js/board';

init();

const name1 = document.getElementById('player1');
const name2 = document.getElementById('player2');
const squares = document.getElementsByClassName('square');
const winner = document.getElementById('winner');
const btnReset = document.getElementById('reset');

const player1 = Player('Player 1', 'O');
const player2 = Player('Player 2', 'X');

let currentPlayer = player1;

const board = Board();

const switchPlayer = () => {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    name1.classList.remove('current_player');
    name2.classList.add('current_player');
  } else {
    currentPlayer = player1;
    name1.classList.add('current_player');
    name2.classList.remove('current_player');
  }
};

const displayWinner = () => {
  const empties = document.getElementsByClassName('empty');

  while (empties.length) {
    empties[0].classList.remove('empty');
  }

  winner.style.display = 'block';
  winner.innerHTML = `Winner<br />${currentPlayer.name}`;
};

const play = (e) => {
  if (e.classList.contains('empty')) {
    e.classList.remove('empty');
    e.style.backgroundImage = `url(../src/img/${currentPlayer.mark}.png)`;

    board.setChoice(e.id, currentPlayer.mark);

    if (board.checkWinner()) {
      displayWinner();
    } else {
      switchPlayer();
    }
  }
};

const reset = () => {
  for (let i = 0; i < squares.length; i += 1) {
    squares[i].classList.add('empty');
    squares[i].style.backgroundImage = '';
  }

  winner.style.display = 'none';

  currentPlayer = player1;
  name1.classList.add('current_player');
  name2.classList.remove('current_player');

  board.reset();
};


name1.innerText = player1.name;
name2.innerText = player2.name;

for (let i = 0; i < squares.length; i += 1) {
  squares[i].addEventListener('click', (e) => {
    e.preventDefault();
    play(squares[i]);
  });
}

btnReset.addEventListener('click', reset);
