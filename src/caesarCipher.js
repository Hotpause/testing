const caesarCipher = (string, shift) => {
  const one = string.split("");
  const two = one.map((char) => shiftchar(char, shift));
  return two.join("");
};

const shiftchar = (char, shift) => {
  const code = char.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    // uppercase letters
    return String.fromCharCode(code + (shift % 26));
  } else if (code >= 97 && code <= 122) {
    // lowercase letters
    return String.fromCharCode(code + (shift % 26));
  } else {
    return char; // not a letter
  }
};

export default caesarCipher;
