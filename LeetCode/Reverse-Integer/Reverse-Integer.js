/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let xStr = String(Math.abs(x)).split("").reverse().join("");
  let int = parseInt(xStr);

  if (int > Math.pow(2, 31)) return 0;
  if (x < 0) return -int;
  return int;
};
