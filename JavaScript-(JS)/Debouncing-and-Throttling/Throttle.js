/**
 * Debouncing and Throttling in JavaScript
 * Ques - Create a button UI and add Throttle as follow =>
 *      --- > SHow "Button Pressed <X> Times" every time button pressed
 *      --- > Increase "Trigged <Y> Times" count after 800ms of throttle
 */

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

const start = new Date().getTime();

const throttledCount = _.throttle(() => {
  const now = new Date().getTime();
  console.log(now - start);
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
