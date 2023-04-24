# JavaScript Topics:

1. Scope, Closure, Lexical Environment, Currying, IIFE
2. Object - Deep & Shallow Copy, "this", Symbols
3. Function - Call, Apply, Bind, Decorators - Debounce, Throttle, Memoization
4. Iterators, Iterables, Generators, Maps, Sets, Infinite Iterators
5. Prototypes - Inheritance, Constructor, Polyfills
6. Class - Derived Class, Private/Protected Members, Getter/Setters
7. Async JS - Callback, Promise, Async-Await, Promise API

# Scope and Closure

We have 3 types of variables in JavaScript: `var`, `let`, and `const`.

⚠️⚠️ `var` is the old one and should not be used in any case now as it has many issues with creating scopes.

Why is it still there?

Also, there are 4 kinds of scope in JavaScript: Block Scope, Global Scope, Function Scope, Module Scope.

## Block scope & Global Scope

The scope is the current context of execution in which values and expressions are "visible" (MDN).

**Global Scope:** Any variable/expression written outside - i.e. not inside any functions, blocks, etc. This is shared across files.

`let`

This creates a block scope. Re-declaration is NOT allowed (in the same scope), but re-assignment is allowed.

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

Temporal Dead Zone (TDZ): the area in which a variable is not accessible. Temporal because it depends on the time of execution, not position.

```javascript
{
  // TDZ starts
  const say = () => console.log(msg); // hi

  let msg = "hi";
  say();
}
```

`const`

This creates a block scope. Re-declaration is NOT allowed, and re-assignment is NOT allowed. The variable must be assigned at declaration time.

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

It doesn't have any block scope and can be re-declared. It only has function scope. `var` variables are hoisted, so they can be used before the declaration.

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

# Module scope
