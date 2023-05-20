// Working with array simple method

let letters = ["a", "b", "c", "d", "e"];

let reverse = letters.reverse();

// console.log({ letters });
// console.log({ reverse });

let nums = [1, 2, 3, 4, 5];
let concat = nums.concat(letters);
// console.log({ concat });

let joined = letters.join("-");
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
console.log(fruit);
