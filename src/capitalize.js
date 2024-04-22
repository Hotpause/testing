const capitalize = (word) => {
  const arr = word.split("");
  arr[0] = arr[0].toUpperCase();
  const newword = arr.join("");
  return newword;
};

// capitalize("ashu");

export default capitalize;
