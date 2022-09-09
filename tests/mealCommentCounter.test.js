const commentCounter = (myComment) => {
  const count = myComment.length ? myComment.length : 0;
  return count;
};

const test1 = [1, 2, 3, 4];
const test2 = [1];
const test3 = [];

describe('Comments Counter Test', () => {
  test('four length array', () => {
    expect(commentCounter(test1)).toBe(4);
  });
  test('One length array', () => {
    expect(commentCounter(test2)).toBe(1);
  });
  test('zero length array', () => {
    expect(commentCounter(test3)).toBe(0);
  });
});