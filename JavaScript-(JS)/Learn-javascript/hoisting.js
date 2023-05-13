// Hoisting
// variable 'declaration' are 'hoisted toward 'top' of their scope

// test = 6;
// console.log(test);
// var test;

// function Declaration

// test();
// function test() {
//   console.log("Hello Programmer");
// }

// hoisting will Not work in function expression or arrow function
const test = () => {
  console.log("Hello Programmer");
};
test();
