import caesarCipher from "./caesarCipher";

test("basic", () => {
  expect(caesarCipher("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
  expect(caesarCipher("Hello, World!", 27)).toBe("Ifmmp, Xpsme!");
  expect(caesarCipher("HEllo, World!", -1)).toBe("GDkkn, Vnqkc!");
});
