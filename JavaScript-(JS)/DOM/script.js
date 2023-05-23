// Javascript DOM

let para = document.querySelector("p");
let headerQ = document.querySelector(".heading");
let header = document.getElementsByClassName("heading");
let headerID = document.getElementById("headerID");

localStorage.setItem("passion", "coding");
localStorage.setItem("age", 23);

// Remove Item
localStorage.removeItem("age");

let vehicles = [
  { company: "Honda", model: 2009 },
  { company: "Toyota", model: 2012 },
];

let stringifyVehicle = JSON.stringify(vehicles);
localStorage.setItem("vehicles", stringifyVehicle);

console.log(localStorage);
