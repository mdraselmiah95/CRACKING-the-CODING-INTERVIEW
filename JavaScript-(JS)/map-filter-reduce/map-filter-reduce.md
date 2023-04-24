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
