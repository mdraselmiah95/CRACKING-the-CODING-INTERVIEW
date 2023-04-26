// Array Deceleration

let person = {
  name: "rasel",
  age: 26,
};

let arr = ["apple", "banana", "mango", person];

arr.push("orange");
arr.pop();

// console.log(arr);

const names = ["rasel", "shakib", "shohan", "noman", "kazol", "rohan"];

for (let i = 0; i < names.length; i++) {
  const element = names[i];
  //   console.log(element);
}

const newName = names.map((name, i, arr) => {
  return name + i;
});

// console.log(newName);

const numbers = [1, 2, 3, 4, 5, 6];

//map in JavaScript
const newNum = numbers.map((num, i, arr) => {
  return num + 2;
});

const refileNum = numbers.filter((num) => {
  return num > 2;
});

const sum = numbers.reduce((prev, curr) => {
  return prev + curr;
}, 0);

const someNum = numbers.some((item) => {
  return item > 2;
});

const everyNum = numbers.every((item) => {
  return item > 3;
});

const findNum = numbers.find((num) => {
  return num > 4;
});

console.log(findNum);
