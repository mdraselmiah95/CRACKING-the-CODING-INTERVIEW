// if else and if else

let budget = 5000;
if (budget > 6000) {
  console.log("Will do dinner in a Nice Hotel");
} else if (budget > 5500) {
  console.log("will do dinner some good hotel");
} else if (budget > 3000) {
  console.log("Do dinner in a restaurant.");
} else {
  console.log("Run if all condition are false");
}

// Nested -if statement

let num = 23;
if (num > 22) {
  console.log("Run the 1st if statement");
  if (num > 25) {
    console.log(`Run both if condition`);
    if (num > 20) {
      console.log(`Run if all condition true`);
    }
  }
}

// Break and Continue statement

for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log("Value of i =", i);
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("Our desire value =", i);
    break;
  }
  console.log("Value of i = ", i);
}

console.log("I am Outside of the loop scope");
