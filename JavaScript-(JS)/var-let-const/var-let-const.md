### What are the differences between `var`, `let`, `const` ?

#### Answer

##### Scope

In JavaScript, scope refers to the accessibility or visibility of variables, functions, and objects within a program. It determines where in the code a particular identifier (such as a variable or function name) can be accessed or referenced.

##### var

`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping,

shadowing occurs when a variable declared in a certain scope (e.g. a local variable) has the same name as a variable in an outer scope (e.g. a global variable)

```js
function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}

test();
```

```js
function testTwo() {
  var a = "Hello";
  let b = "Bye";

  if (true) {
    let a = "Hi";
    var b = "GoodBye"; // illegal shadowing
    console.log(a);
    console.log(b);
  }
}

testTwo();
```

##### let

`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.

```js
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs 0, 1, 2, 3, ...
    console.log(i);
  });
}
```
