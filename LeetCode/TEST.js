// This is well is

function simpleArraySum(ar) {
  const sum = ar.reduce((a, b) => {
    return a + b;
  });
  return sum;
}

const re = simpleArraySum([1, 2, 3, 4, 10, 11]);
console.log(re);
