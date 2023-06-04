// Modern JavaScript 📳
// import * as singleVariable from "somewhere"
// Name export and Default export

let response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log({ data });

console.log("finally");

// Top level await block the execution of the next code part

console.log("This is the top part of the code");

let getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log({ data });
};
getTodos();

console.log("finally done");

let resultIIFE = (function () {
  let orders = [];
  let addToCart = function (product, quantity) {
    console.log(`${product} ordered ${quantity}`);
    orders.push({ product, quantity });
  };
  return {
    orders,
    addToCart,
  };
})();

resultIIFE.addToCart("Eggs", 13);
resultIIFE.addToCart("Tomatoes", 10);
resultIIFE.addToCart("bananas", 24);

console.log(resultIIFE.orders);
