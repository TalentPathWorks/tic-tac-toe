const {
  isUniform,
  parseIntBase10,
  doesNotInclude,
  satisfies,
  columns,
  diagonals,
  pad
} = require('./utils.js');

describe('isUniform', () => {
  it('should return same array if uniformed', () => {
    const input = [' ', ' ', ' '];
    expect(isUniform(input)).toBe(true);
  });
  it('should fail if array is not uniformed', () => {
    const input = [' ', ' ', 'X'];
    expect(isUniform(input)).toBe(false);
  });
  it('should fail if non-array input', () => {
    const input = 1234;
    expect.assertions(1);
    try {
      isUniform(input);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});
describe('parseIntBase10', () => {
  it('should pass if valid number in string', () => {
    const input = '3';
    expect(parseIntBase10(input)).toBe(3);
  });
  it('should error if ');
});
describe('doesNotInclude', () => {
  it('test', () => {});
});
describe('satisfies', () => {
  it('test', () => {});
});
describe('columns', () => {
  it('test', () => {});
});
describe('diagonals', () => {
  it('test', () => {});
});
describe('pad', () => {
  it('test', () => {});
});
