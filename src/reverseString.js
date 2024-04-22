const reverseString = (string) => {
  let arr = string.split("");
  arr = arr.reverse();
  const word = arr.join("");
  return word;
};

export default reverseString;
