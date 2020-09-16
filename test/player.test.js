import Player from '../src/js/player';

test('Player name', () => {
  const player1 = Player('Player 1', 'O');
  expect(player1.name).toBe('Player 1');
});

test('Player mark', () => {
  const player1 = Player('Player 1', 'O');
  expect(player1.mark).toBe('O');
});

test('undefined Player', () => {
  const player1 = Player();
  expect(player1.name).toBe(undefined);
});
