// Asynchronous JavaScript
setTimeout(() => {
  console.log("hi");
}, 3000);

/**
 * Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other
 */

let getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve("Some Data");
    reject("Some Error");
  });
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
}

// Array Destructuring

let hotel = {
  name: "Helton",
  location: "Cox Bazar",
  categories: ["Bangla", "Italian", "English"],
};

// let [a, b, c] = hotel.categories;
// console.log({ a, b, c });

let items = [1, 2, 3, 4, 5];
let [a, b, c] = items;
// console.log(a, b, c);

let [main, secondary] = hotel.categories;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary = temp;

[secondary, main] = [main, secondary];

// console.log(main, secondary);

// Destructuring of Object

let topHotel = {
  name: "InterContinental",
  Location: "24 street of Dhaka",
  categories: ["Chinese", "Bangla", "Italian", "Thai", "Western"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "12:00PM" },
  },
};

// let { name: hotelName, Location: hotelLocation, mainMenu: menu } = topHotel;

let { name, Menu = (newMenu = []), categories = [] } = topHotel;

console.log({ newMenu });
