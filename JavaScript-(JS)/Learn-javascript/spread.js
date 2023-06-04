// Spread Operator

let hotel = {
  name: "InterContinental",
  Location: "24 street of Dhaka",
  categories: ["Chinese", "Bangla", "Italian", "Thai", "Western"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "12:00PM" },
    friday: { open: "11:00AM", close: "2:00AM" },
  },
};

let nums = [1, 2, 3, 4, 5];
let newNums = [6, 7, 8, ...nums];
// console.log(newNums);

let updateMainMenu = [...hotel.mainMenu, "FoodD", "FoodE"];
// console.log(updateMainMenu);

// Rest pattern and parameter

let [a, b, ...others] = nums;
// console.log(others);

let { sunday, ...rest } = hotel.openingHours;
// console.log(rest);

// Short Circuiting(&&,||)

// let result = "programmers" && 0 && "5";

// let result = "" || null;
// console.log(result);

let numGuests = 0;
let result = numGuests || 10;
// console.log(result);

const openingHours = {
  sunday: { open: "8:00AM", close: "8:00PM" },
  monday: { open: "9:00AM", close: "10:00PM" },
  friday: { open: "11:00AM", close: "12:00PM" },
};

let grandHotel = {
  name: "Marriot",
  Location: "15 street Dhaka",
  categories: ["Chinese", "Bangla", "Italian", "Thai", "Western"],
  mainMenu: ["FoodA", "FoodB", "FoodC", "FoodD"],
  openingHours,
};

// Keys(Properties)
// let properties = Object.keys(openingHours);
let properties = Object.values(openingHours);

for (let key of properties) {
  // console.log(key);
}

let entries = Object.entries(openingHours);
for (let [day, { open, close }] of entries) {
  console.log(`On ${day} We Open at ${open} and Close at ${close}`);
}
// console.log({ entries });

const openingHours2 = {
  sunday: { open: "8:00AM", close: "8:00PM" },
  monday: { open: "9:00AM", close: "10:00PM" },
  friday: { open: "11:00AM", close: "12:00PM" },
};

let grandHotel2 = {
  name: "Marriot",
  Location: "15 street Dhaka",
  categories: ["Chinese", "Bangla", "Italian", "Thai", "Western"],
  mainMenu: ["FoodA", "FoodB", "FoodC", "FoodD"],
  starterMenu: ["SpecialFoodA", "SpecialFoodB", "SpecialFoodC"],
  openingHours2,
};

// let map=new Map()

// const foo = null ?? "default string" only check null and undefined

const bez = 0 ?? 24;

console.log(bez);
