// Working with array simple method

let letter = ["a", "b", "c", "d", "e"];

let reverse = letter.reverse();

// console.log({ letters });
// console.log({ reverse });

let nums = [1, 2, 3, 4, 5];
let concat = nums.concat(letter);
// console.log({ concat });

let joined = letter.join("-");
// console.log({ joined });

let newNum = nums.slice(1, 3);
// console.log({ newNum });

// Splice method

let numbers = [1, 2, 3, 4, 5];

let numSplice = numbers.splice(1, 2, "rasel");
// console.log({ numbers });
// console.log({ numSplice });

// at method

let number1 = [11, 35, 67, 90, 13];

// console.log(number1[number1.length - 1]);
// console.log(number1.at(-1));
// console.log(number1.splice(-1));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(-1);
// console.log(fruit);

const salaries = [3000, 5000, 2700, 8900, 9900];

let newSalaries = salaries.map((salary) => {
  const increment = salary / 2;
  return salary + increment;
});

// console.log({ newSalaries });

const gifts = [
  "Teddy bear",
  "Flower bouquet",
  "Chocolate box",
  "Perfume",
  "Jewelry",
  "Gift card",
  "Gourmet hamper",
];

let filteredArray = gifts.filter((gift) => {
  if (gift === "Teddy" || gift === "Perfume") {
    return gift;
  }
});

// console.log({ filteredArray });

// Working with array

const letters = ["a", "b", "c", "d", "e", "x", "p", "z", "l"];
const number = [7, 2, 9, 4, 6, -4, 1, 3];

console.log(letters.sort());

// console.log(number.sort());

const numNum = number.sort((a, b) => {
  return a - b;
  // return b - a;
});

// console.log(numNum);

const num = [1, 2, 3, 4, 5, 6, 7];

let result = num.slice(0, 3);
