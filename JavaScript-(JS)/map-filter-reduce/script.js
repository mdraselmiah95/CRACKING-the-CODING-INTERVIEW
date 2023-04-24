// map filter and reduce

// Difference between map vs forEach ?

const arr = [2, 5, 6, 4, 7, 3];

const mapResult = arr.map((arr) => {
  return arr + 2;
});

const forEachResult = arr.forEach((arr) => {
  return arr + 2;
});

console.log(mapResult, forEachResult);
