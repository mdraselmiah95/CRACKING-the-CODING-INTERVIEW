// map filter and reduce

// Polyfill for Map()

//Array.map((num,i,arr)=>{})

Array.prototype.newMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 4, 5, 7, 8, 9];

const multiply = nums.newMap((num, i, arr) => {
  return num * 3 + i;
});

// console.log(multiply);

// Polyfill for Filter()

Array.prototype.newFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const biggerNum = nums.newFilter((num) => {
  return num > 3;
});

// console.log(biggerNum);

// Polyfill for Reduce()

//arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.newReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const sum = nums.newReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

// console.log(sum);

// Difference between map vs forEach ? 15:51
