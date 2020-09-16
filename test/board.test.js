import Board from '../src/js/board';

const square = [0, 1, 2, 3, 4, 5, 6, 7, 8];

test('Board check winner first move', () => {
  const board = Board();
  expect(board.checkWinner()).toBe(false);
});

test('Board check winner first move', () => {
  const board = Board();
  expect(board.square).toEqual(square);
});

test('Board set choice', () => {
  const board = Board();
  board.setChoice(0, 'X');
  const square = ['X', 1, 2, 3, 4, 5, 6, 7, 8];
  expect(board.square).toEqual(square);
});

test('Board chech winner', () => {
  const board = Board();
  expect(board.checkWinner()).toBe(false);
});

test('Board set choice', () => {
  const board = Board();
  board.setChoice(0, 'X');
  board.setChoice(1, 'X');
  board.setChoice(2, 'X');
  expect(board.checkWinner()).toBe(true);
});
