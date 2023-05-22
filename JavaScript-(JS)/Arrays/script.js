// Date and Time ⏲

// Using timeStamp  (integer number represent in 'ms' from 1-1-1970)
const currentTime = new Date();
// 1 day= 24 * 60 * 60 =  86,400,000 milliseconds (ms).
// console.log(currentTime);

// Date and time Method
let completeAndDateAndTime = new Date();

// console.log(completeAndDateAndTime.getFullYear());
// console.log(completeAndDateAndTime.getMonth());

let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let secHand = document.querySelector(".second");

let ticking = function () {
  let currentTime = new Date();

  let getHour = currentTime.getHours();
  let getMin = currentTime.getMinutes();
  let getSec = currentTime.getSeconds();

  hourHand.textContent = getHour;
  minHand.textContent = getMin;
  secHand.textContent = getSec;
};

setInterval(ticking, 1000);
