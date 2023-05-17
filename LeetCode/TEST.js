// This is well is

function simpleArraySum(ar) {
  const sum = ar.reduce((a, b) => {
    return a + b;
  });
  return sum;
}

const re = simpleArraySum([1, 2, 3, 4, 10, 11]);
// console.log(re);

const revInt = (num) => {
  let myRevNum = num.toString().split("").reverse().join("");
  if (myRevNum.endsWith("-")) {
    myRevNum = "-" + myRevNum;
    return parseInt(myRevNum);
  } else {
    return parseInt(myRevNum);
  }
};

console.log(revInt(-123));
