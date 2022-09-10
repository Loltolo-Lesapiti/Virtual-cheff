const resevationCounter = (myReservation) => {
  const count = myReservation.length ? myReservation.length : 0;
  return count;
};

const test1 = [1];
const test2 = [1, 2, 3];
const test3 = [];

describe('Comments Counter Test', () => {
  test('One length array', () => {
    expect(resevationCounter(test1)).toBe(1);
  });
  test('Three length array', () => {
    expect(resevationCounter(test2)).toBe(3);
  });
  test('zero length array', () => {
    expect(resevationCounter(test3)).toBe(0);
  });
});