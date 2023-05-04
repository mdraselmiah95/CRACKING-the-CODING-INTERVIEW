# Two Sum

Given an array of integers **nums** and an integer **target**, return _indices of the two numbers such that they add up to **target**_.

You may assume that each input would have **exactly one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

### Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Solution 1:

```js
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
```

### Solution 2:

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum1 = (nums, target) => {
  const map = [];
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const pair = target - value;
    if (map[pair] !== undefined) {
      return [map[pair], i];
    } else {
      map[value] = i;
    }
  }
};
```

### Solution 3:

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum2 = (nums, target) => {
  let result = {};
  for (let [index, num] of nums.entries()) {
    if (result[num] !== undefined) return [result[num], index];
    result[target - num] = index;
  }
};
```
