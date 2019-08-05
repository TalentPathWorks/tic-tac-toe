const {
  prettifyRow,
  prettifyBoard,
  generateStartingBoard,
  updateBoard
} = require('./board');

describe('prettifyRow', () => {
  it('should add | symbols in between characters in an array', () => {
    const input = ['X', 'O', 'X'];
    const expectedOutput = ' X | O | X ';
    expect(prettifyRow(input)).toBe(expectedOutput);
  });
  it('should throw an error if fed incorrect data type', () => {
    expect.assertions(1);
    try {
      prettifyRow(2);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});
describe('prettifyBoard', () => {
  it('should add a separator inbetween rows of strings', () => {
    const input = [['X', 'O', 'X'], ['X', 'O', 'X'], ['X', 'O', 'X']];
    const expectedOutput =
      ' X | O | X \n---|---|---\n X | O | X \n---|---|---\n X | O | X ';
    expect(prettifyBoard(input)).toBe(expectedOutput);
  });
  it('should throw an error if fed incorrect data type!', () => {
    expect.assertions(1);
    try {
      prettifyBoard(2);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});
describe('generateStartingBoard', () => {
  it('should generate a starting board an array of arrays 3X3', () => {
    const expectedOutput = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(generateStartingBoard()).toStrictEqual(expectedOutput);
  });
  it('should create a board with 5x5 board', () => {
    const expectedOutput = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(generateStartingBoard()).toStrictEqual(expectedOutput);
  });
});
describe('updateBoard', () => {
  it('should update the board with and X on position [3,2]', () => {
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const position = [0, 0];
    const player = 'X';
    const expectedOutput = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(updateBoard(board, position, player)).toStrictEqual(expectedOutput);
  });
  it('should fail if invalid board is a number', () => {
    const board = 24312;
    const position = [0, 0];
    const player = 'O';
    expect.assertions(1);
    try {
      updateBoard(board, position, player);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  it('should fail if invalid board is a object', () => {
    const board = {};
    const position = [0, 0];
    const player = 'O';
    expect.assertions(1);
    try {
      updateBoard(board, position, player);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  it('should fail if out of bounds coordinates', () => {
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const position = [3, 1];
    const player = 'O';
    expect.assertions(1);
    try {
      updateBoard(board, position, player);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  it(' should fail if invalid coordinates ', () => {
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const position = '🍌';
    const player = 'O';
    expect.assertions(1);
    try {
      updateBoard(board, position, player);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});
