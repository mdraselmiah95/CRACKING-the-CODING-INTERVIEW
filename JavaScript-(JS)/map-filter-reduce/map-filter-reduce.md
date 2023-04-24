### ( `map`, `filter` and `reduce` ) - Polyfills and Output Based Questions?

#### Answer

#### Map

`Map` returns a new array that contains an image of each element of the array. It will always return the same number of items.

`Map`
The `map()` method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

```js
const myAwesomeArray = [5, 4, 3, 2, 1];

myAwesomeArray.map((x) => x * x);

// >>>>>>>>>>>>>>>>> Output: [25, 16, 9, 4, 1]
```

```js
const new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg])
```

**Filter**

The `filter()` method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

```js
var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])
```

**Reduce**

The callback argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.

- accumulator - the returned value of the previous iteration
- currentValue - the current item in the array
- index - the index of the current item [optional]
- array - the original array on which reduce was called [optional]

The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.

```js
arr.reduce(callback[, initialValue])
```

```js
const arr = [1, 2, 3, 4, 5];

const output = arr.reduce(function (accumulator, currentIdx) {
  acc += curr;
  return acc;
});
console.log(output);
```

**Difference between map vs forEach ?**

- `map()` and `forEach()` is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements

```js
const myAwesomeArray = [1, 2, 3, 4, 5];
myAwesomeArray.forEach((x) => x * x);
//>>>>>>>>>>>>>return value: undefined

myAwesomeArray.map((x) => x * x);
//>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]
```

- `forEach()` — executes a provided function once for each array element.

- `map()` — creates a new array with the results of calling a provided function on every element in the calling array.

  - Well, the `forEach() `method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.
  - Meanwhile, the`map() `method will also call a provided function on every element in the array. The difference is that `map()` utilizes return values and actually returns a new Array of the same size.

```js
const array1 = [1, 2, 3];

const func = (arr) => {
  const result = arr.forEach((i) => i * 2);
  return result;
};
func(); // Undefined
```

**Mutation**

- `forEach()` affects and changes our original Array, whereas `map()` returns an entirely new Array — thus leaving the original array unchanged.

- The `map()` method returns an entirely new array with transformed elements and the same amount of data. In the case of `forEach()`, even if it returns undefined, it will mutate the original array with the callback.

- Therefore, we see clearly that `map()` relies on immutability and `forEach()` is a mutator method.

- `map()` may be preferable if you favor functional programming.
