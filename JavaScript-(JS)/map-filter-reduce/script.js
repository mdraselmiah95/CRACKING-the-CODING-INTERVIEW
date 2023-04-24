// map filter and reduce

// What is Map() ?

const nums = [1, 2, 4, 5, 7, 8, 9];

const multiply = nums.map((num, i, arr) => {
  return num * 3 + 1;
});

// console.log(multiply);

// what is filter() ?

const moreThanThree = nums.filter((num, i, arr) => {
  return num > 3;
});

// console.log(moreThanThree);

// What is Reduce

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);
