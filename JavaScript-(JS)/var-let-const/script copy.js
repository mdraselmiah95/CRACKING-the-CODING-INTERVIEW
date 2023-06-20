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

// abc();

{
  // TDZ starts
  const say = () => console.log(msg); // hi

  let msg = "hi";
  say();
}

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// } // prints 0,1,2,3,4

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// } // prints 5,5,5,5,5

// function x() {
//   let a = 10;
//   return function y() {
//     console.log(a);
//   };
// }

// const z = x();
// console.log(z);
// z();

function z() {
  let b = 100;
  function x() {
    let a = 101;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
