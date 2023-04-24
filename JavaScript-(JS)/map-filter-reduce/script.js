// map filter and reduce

// Difference between map vs forEach ?

const arr = [2, 5, 6, 4, 7, 3];

const mapResult = arr.map((arr) => {
  return arr + 2;
});

const forEachResult = arr.forEach((ar, i) => {
  arr[i] = ar + 3;
});

console.log(mapResult, forEachResult, arr);
