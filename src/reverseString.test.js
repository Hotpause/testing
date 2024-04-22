import reverseString from "./reverseString";

test("Reverses 'ashu' to 'uhsa'", () => {
  expect(reverseString("ashu")).toBe("uhsa");
});

test("Reverses 'Liya' to 'ayiL'", () => {
  expect(reverseString("Liya")).toBe("ayiL");
});

test("Reverses 'LiYa' to 'aYiL'", () => {
  expect(reverseString("LiYa")).toBe("aYiL");
});
