const analyzeArray = (arr) => {
  const sum = arr.reduce((prev, cur) => cur + prev, 0);
  const length = arr.length;
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
