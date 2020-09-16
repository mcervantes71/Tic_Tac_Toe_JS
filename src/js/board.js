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

export default Board;
