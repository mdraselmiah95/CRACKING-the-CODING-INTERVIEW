// Asynchronous JavaScript
setTimeout(() => {
  console.log("hi");
}, 3000);

/**
 * Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other
 */

let getSomething = () => {
  return new Promise((resolve, reject) => {
    // resolve("Some Data");
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
