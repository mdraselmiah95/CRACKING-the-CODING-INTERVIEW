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

// console.log(findNum);

// Spread and Rest Operators
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const finalNum = [...num1, ...num2];

function sum1(...numbers) {
  return numbers;
}
// console.log(sum1(num1, num2));

// More Array Methods
const newArr = num1.concat(num2);

let arr2 = ["apple", "banana", "mango"];

// const newArr2 = arr2.slice(0, 2);
// const newArr2 = arr2.slice(0, 2);
// const newArr2 = arr2.splice(2, 1, "sweet");

// console.log(arr2);

// console.log(newArr2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let newFruits = fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(newFruits);
