import analyzeArray from "./analyzeArray";

test("basic 1", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("basic 2", () => {
  const object = analyzeArray([2, 3, 5, 6, 7]);
  expect(object).toEqual({
    average: 4.6,
    min: 2,
    max: 7,
    length: 5,
  });
});
