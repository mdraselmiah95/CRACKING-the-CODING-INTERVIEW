// JavaScript Execution Context

// Declaration without initialization

// var vs let vs const
// Hoisting

var count; // creation phase

// console.log(count);
count = 11;

// console.log(num);
let num = 9;

function abc() {
  console.log(a, b, c);
  const c = 20;
  let b = 19;
  var a = 15;
}

abc();
