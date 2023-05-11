// Logical Operators

// And &&, Or ||, Not !

let password = "gjdgjdfg";

if (password.length > 5 && password.includes("@")) {
  // && Both statement should be true
  console.log("Password is strong.");
} else {
  console.log("Change the password");
}

if (password.length > 5 || password.includes("@")) {
  // any statement should be true
  console.log("Password is strong.");
} else {
  console.log("Change the password");
}

// Not Operator ! => "  True to false " And " False to True"

let low = true;
if (!low) {
  console.log("Your status is ", low);
} else {
  console.log("Your status is ", low);
}

// Priorities
// Not
// And , Or From left to right

let result = (true && true) || (false && !false);
console.log({ result });
