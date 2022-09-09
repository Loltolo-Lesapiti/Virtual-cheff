const mealCount = (mealData) => mealData.length;
const test1 = [1];
const test2 = [1, 2];
const test3 = [];
describe('Meals Counter Test', () => {
  test('One length array', () => {
    expect(mealCount(test1)).toBe(1);
  });
  test('Two length array', () => {
    expect(mealCount(test2)).toBe(2);
  });
  test('zero length array', () => {
    expect(mealCount(test3)).toBe(0);
  });
});