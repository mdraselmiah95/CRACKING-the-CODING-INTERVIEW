// Function

// It is simply a piece of code which we can use in our program many time

// It is just like a variable holding some piece of code

function nameOfFunction() {
  console.log("Running the function");
}
nameOfFunction();

let fun = function () {
  // also called anonymous function
  console.log("This is example of function expression");
};

// Calling function expression
// fun();

let invitation = function (name = "defaultName", time = "night") {
  console.log(`Welcome ${name} You are invited on our event ${time}`);
};

// invitation("Rasel", "evening");
// invitation();

// Retuning Values(How to return value from the function)

let ageCalculation = function (birthYear, currentYear = 2023) {
  let age = currentYear - birthYear;
  return age;
};

const result = ageCalculation(1995);
// console.log(result);

// Arrow Function (ES6)

const arrowFunc = (name) => `This is my ${name}`;

// Passing function as an argument (Higher order function)

let upperCase = function (str) {
  return str.toUpperCase();
};

let lowerCase = function (str) {
  return str.toLowerCase();
};

let transform = function (str, fun) {
  return fun(str);
};

const result1 = transform("this is Rasel mia", upperCase);
const result2 = transform("this is Rasel mia", lowerCase);
// console.log({ result1, result2 });

// Function returning another function

let compliment = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
  };
};

// compliment("I am good Programer")("rasel");

let complimented = compliment("You are a good coder");

complimented("Rasel");
