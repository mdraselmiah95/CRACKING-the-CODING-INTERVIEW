// Variable and block scope

// Scope => Area where variable is define or accessible

// ternary operator ( ?:)

let age = 16;
let weight = 54;

if (age > 18) {
  console.log("Qualify");
} else {
  console.log("Fail");
}

let result = age >= 18 ? (weight > 55 ? "Mature" : "weightIssue") : "Young";

// Switch statement

switch (age) {
  case 15:
  case 16:
  case 17:
    result = "These age allowed to sit in the exam";
    break;

  default:
    result = "Not Allow";
}

console.log(result);
