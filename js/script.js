const Player = (name, mark) => ({ name, mark });

const Board = () => {
  const square = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const reset = () => {
    for (let i = 0; i < square.length; i += 1) {
      square[i] = i;
    }
  };

  const setChoice = (index, mark) => {
    if (square[index] !== 'O' && square[index] !== 'X') square[index] = mark;
  };

  const checkWinner = () => {
    let res = false;

    if (square[0] === square[1] && square[1] === square[2]) {
      res = true;
    } else if (square[3] === square[4] && square[4] === square[5]) {
      res = true;
    } else if (square[6] === square[7] && square[7] === square[8]) {
      res = true;
    } else if (square[0] === square[3] && square[3] === square[6]) {
      res = true;
    } else if (square[1] === square[4] && square[4] === square[7]) {
      res = true;
    } else if (square[2] === square[5] && square[5] === square[8]) {
      res = true;
    } else if (square[0] === square[4] && square[4] === square[8]) {
      res = true;
    } else if (square[2] === square[4] && square[4] === square[6]) {
      res = true;
    }

    return res;
  };

  return {
    square, reset, setChoice, checkWinner,
  };
};

const player1 = Player('Player 1', 'O');
const name1 = document.getElementById('player1');

const player2 = Player('Player 2', 'X');
const name2 = document.getElementById('player2');

const winner = document.getElementById('winner');

const board = Board();

let currentPlayer = player1;

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

module.export = switchPlayer;

const displayWinner = () => {
  const empties = document.getElementsByClassName('empty');

  while (empties.length) {
    empties[0].classList.remove('empty');
  }

  winner.style.display = 'block';
  winner.innerHTML = `Winner<br />${currentPlayer.name}`;
};

const game = (element, index) => {
  if (element.classList.contains('empty')) {
    element.classList.remove('empty');
    element.style.backgroundImage = `url(../img/${currentPlayer.mark}.png)`;

    board.setChoice(index, currentPlayer.mark);

    if (board.checkWinner()) {
      displayWinner();
    } else {
      switchPlayer();
    }
  }
};

const reset = () => {
  const squares = document.getElementsByClassName('square');

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

/* testing */

const test = 0;
if (test === 1) game();
reset();
