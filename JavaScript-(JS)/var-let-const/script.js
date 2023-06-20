// SetTimeout and Closure Question 🔥

function x() {
  let a = 1;
  setTimeout(() => {
    console.log(a++);
  }, 1000);
  console.log("Hello JavaScript");
}

// x();

function y() {
  for (let i = 1; i <= 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Quick");
}
// y();

function z() {
  for (var i = 0; i <= 6; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}

z();
