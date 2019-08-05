const readlineSync = require('readline-sync');
const { validateMove, getValidMoveFromPlayer } = require('./move');

describe('validateMove', () => {
  it('should error if invalid coord', () => {
    const coordinate = ' ';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect.assertions(2);
    try {
      validateMove(coordinate, board);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Invalid move! Move must have syntax "row col"');
    }
  });
  it('should error if out of bounds coordinate, negative number', () => {
    const coordinate = '-1 0';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect.assertions(2);
    try {
      validateMove(coordinate, board);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Invalid move! Move must be in bounds of board');
    }
  });
  it('should error if out of bounds coordinate, larger than board.length', () => {
    const coordinate = '5 5';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect.assertions(2);
    try {
      validateMove(coordinate, board);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Invalid move! Move must be in bounds of board');
    }
  });
  it('should error if not empty space in board', () => {
    const coordinate = '0 0';
    const board = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect.assertions(2);
    try {
      validateMove(coordinate, board);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Invalid move! This space is already occupied');
    }
  });
  it('should find a valide space in board', () => {
    const coordinate = '0 0';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(validateMove(coordinate, board)).toStrictEqual([0, 0]);
  });
});
jest.mock('readline-sync');

describe('getValidMoveFromPlayer', () => {
  it('should readin something from user', () => {
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    readlineSync.question.mockReturnValueOnce('0 0');
    const result = getValidMoveFromPlayer(board);
    expect(result).toStrictEqual([0, 0]);
  });
});
