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

// console.log(`Current age is ${person.ageCalculate(1995)}`);

// THis keyword

// in Each Method we have an access of special keyword called "this"

let Doctor = {
  firstName: "Rasel",
  lastName: "Mia",
  city: "Dhaka",
  birthYear: 1995,
  Education: "Software Engineer",
  getSummery: function () {
    // return `${this.firstName} ${this.lastName} lives in ${this.city} and born in ${this.birthYear} by education is ${this.Education} `;
    return this;
  },
};

// console.log(Doctor.getSummery());

// forEach method of Array

let dishes = [
  "Pizza ",
  "Pizza ",
  "Paella ",
  "Pierogi",
  "Moussaka",
  "biryani",
  "naan",
  "butter chicken",
];

for (let i = 0; i < dishes.length; i++) {
  // console.log(dishes[i]);
}

// dishes.forEach((element) => console.log(element));

const cars = [
  { make: "Toyota", model: "Camry", year: 2019 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2021 },
];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].make);
}

cars.forEach((car) => console.log(car));
