# JavaScript Topics:

1. Scope, Closure, Lexical Environment, Currying, IIFE
2. Object - Deep & Shallow Copy, "this", Symbols
3. Function - Call, Apply, Bind, Decorators - Debounce, Throttle, Memoization
4. Iterators, Iterables, Generators, Maps, Sets, Infinite Iterators
5. Prototypes - Inheritance, Constructor, Polyfills
6. Class - Derived Class, Private/Protected Members, Getter/Setters
7. Async JS - Callback, Promise, Async-Await, Promise API

# Scope and Closure

**The scope is the current context of execution in which values and expressions are "visible" or can be referenced.**

- We have 3 types of variables in JavaScript: `var`, `let`, and `const`.

- ☠️☠️ `var` is the old one and should not be used in any case now as it has many issues with creating scopes.

  - Why is it still there?

- Also, there are 4 kinds of scope in JavaScript - _Block Scope, Global Scope, Function Scope, Module Scope_

## Block scope & Global Scope

The scope is the current context of execution in which values and expressions are "visible" [(MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Scope).

**Global Scope:** Any variable/expression written outside - i.e. not inside any functions, blocks, etc. This is shared across files.

`let`

- This creates a _block scope_.
- _Re-declaration_ is NOT allowed (in the same scope)
- _Re-assignment_ is allowed.

```javascript
{
  // block scope
  let x = 0;
  let y = 0;
  console.log(x); // 0
  let x = 1; // Error
}

{
  let x = 1;
  let y = 1;
  x = 2;
  console.log(x); // 2
}

console.log(x); // Error in Global Scope
```

**Temporal Dead Zone** (TDZ): the area in which a variable is not accessible. Temporal because it depends on the time of execution, not position.

```javascript
{
  // TDZ starts
  const say = () => console.log(msg); // hi

  let msg = "hi";
  say();
}
```

`const`

- This creates a block scope.
- _Re-declaration_ is NOT allowed,
- _Re-assignment_ is NOT allowed.
- The variable must be assigned at declaration time.

```javascript
{
  const x; // Error
  const y = 0;
}

{
  const x = 1;
  x = 2; // Error
}

console.log(x); // Error
```

Variable Shadowing

```javascript
let x = 0; // shadowed variable
{
  let x = 1;
  console.log(x);
}
```

`var`

- It doesn't have any block scope and can be _re-declared_.
- It only has _function scope_.
- `var` variables are _hoisted_, so they can be used before the declaration.

```javascript
var x = 1;
var x = 2; // valid

console.log(y); // valid
var y = 3;

z = 4;
console.log(z); // valid
var z;
```

**NOTE:** You should NOT use `var` now ❌

`let` vs `var`

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} // prints 0,1,2,3,4

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} // prints 5,5,5,5,5
```

## Module Scope

In modern JavaScript, a file can be considered as a module, where we use _export_ and _import_ syntax to use variables across files. We can use the following syntax to import and export variables:

```js
<script src="index.js" type="module"></script>
```

```js
export { someVar, someFunc };
```

```js
import { someVar } from "./app.js";
```

```javascript
// app.js
export const someVar = "hello";
export function someFunc() {
  /* function body */
}

// index.js
import { someVar } from "./app.js";
```

**global Object**

- The global Object is the variable `window` in case of browser. This helps you to use variables across the scopes. Also, it is the this value for global functions

  - window.alert
  - window.Promise

- In non-browser environment, `window` doesn't exist. but other global objects exist.
- `var` affects this global object, also _`function`_ declarations.

In a browser environment, the global object is referred to as `window`. We can use it to access variables across scopes:

```javascript
window.alert("Hello!"); // shows a message box with the text "Hello!"
window.Promise; // Promise is a constructor function available in the browser environment
```

```javascript
function sayHi() {
  console.log(this); // this will refer to the global object
}

sayHi(); // logs the global object (e.g. window in a browser environment)

("use strict");

function sayHi() {
  console.log(window); // this will throw an error in strict mode
}
```

## Function Scope

- it is created upon execution a function
- A function creates a new scope upon execution. Every time a function is called, a new function scope is created:

```javascript
function sayHi(name) {
  return name;
}

sayHi(); // this call will create a function scope

sayHi(); // this call will create another function scope
```

**Lexical Environment**

- Every variable in JavaScript (within global, block, or function) has a reference to an object-like data called the _Lexical Environment_. This object serves as the basis of search for the value of the variable:

```javascript
let name = "john";
console.log(name); // logs "john"
```

We can also create a function with a local variable and log it to the console:

```javascript
// Lexical Environment (Global variable):
// [outer]: null
// name: "john"

let name = "john";

function sayHi() {
  let greet = "hi";
  console.log(greet);
}

sayHi(); // logs "hi"
console.log(name, sayHi);

// Lexical Environment (Function scope):
// [outer]: Global lexical environment
// greet: "hi"
```

**Lexical Environment (functions)**

```js
let name = "john";

function sayHi() {
  let greet = "hi";
  console.log(name);
}

sayHi();
```

## Hoisting

The movement of variable declaration to top of scope - before execution

- _function declarations_ are properly hoisted (value accessible)
- _var_ is hoisted.

```js
let name = "john";

sayHi(); // valid

function sayHi() {
  let greet = "hi";
  console.log(name);
}

sayHello(); // error
let sayHello = function () {
  console.log(name);
};
```

**Temporal Dead Zone**(TDZ) :

```js
let x = 1;

{
  console.log(x); // Reference error
  let x = 2;
}
```

## Closures

- we can create nested functions in JavaScript
