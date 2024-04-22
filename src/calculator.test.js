import calculator from "./calculator";

test("basic", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.multiply(5, 6)).toBe(30);
  expect(calculator.divide(1, 2)).toBe(0.5);
  expect(calculator.divide(3, 0)).toBe(undefined);
});
