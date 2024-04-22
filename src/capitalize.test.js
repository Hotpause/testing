import capitalize from "./capitalize";

test("one word basic", () => {
  expect(capitalize("ashu")).toBe("Ashu");
});

test("nws word basic", () => {
  expect(capitalize("saara")).toBe("Saara");
});
