// var vs let vs const
// Scope

var a = 5; // var is function scope and let and const block scope

console.log(5);

{
  var b = 10; // {} This is block but b is still accessible outside its block
}

console.log(b);

{
  let c = 11; // but c will not accessible as let and also const is a block scope
}

// console.log(c); ReferenceError: c is not defined

function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}

test();

var x = 1; // outer x

function myFunction() {
  var x = 2; // inner x
  console.log(x); // Output: 2
}

myFunction();
console.log(x); // Output: 1

/*
function testTwo() {
  var a = "Hello";
  let b = "Bye";

  if (true) {
    let a = "Hi";
    var b = "GoodBye"; // illegal shadowing
    console.log(a);
    console.log(b);
  }
}

testTwo();

*/
