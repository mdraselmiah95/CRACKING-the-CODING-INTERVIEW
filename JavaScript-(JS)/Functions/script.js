// Function vs Method

// Method=> it is nothing but object property holding
// Function as "Value"

const myObject = {
  name: "John Doe",
  age: 30,
  sayHello: function () {
    alert("Hello, my name is " + this.name);
  },
};

let person = {
  ageCalculate: function (birthYear = 2000) {
    let age = 2023 - birthYear;
    return age;
  },
};

console.log(`Current age is ${person.ageCalculate(1995)}`);
