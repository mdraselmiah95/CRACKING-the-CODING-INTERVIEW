/**
 * Debouncing and Throttling in JavaScript
 * Ques - Create a button UI and add debounce as follow =>
 *      --- > SHow "Button Pressed <X> Times" every time button pressed
 *      --- > Increase "Trigged <Y> Times" count after 800ms of debounce
 */

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

const debounceCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debounceCount();
});
