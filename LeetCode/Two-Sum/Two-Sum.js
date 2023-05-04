// Problem: Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * nums = [1,5,8]
 * target = 9
 * [0,2]
 */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// const nums = [1, 5, 8];
// const target = 9;

const nums = [8, 3, 10, 7, 2, 5, 4];
const target = 9;

const resultOne = twoSum(nums, target);

console.log(resultOne);

/**
 * Hashmap
 *
 * num=[1, 5, 8]
 * target = 9
 *
 * map = { 1:0, 5:1}
 * i = 2
 * value = 9
 * complement_pair = 9 - 8 = 1
 * [0, 2]
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

const nums1 = [8, 3, 10, 7, 2, 5, 4];
const target1 = 9;

const resultTwo = twoSum1(nums, target);

console.log(resultTwo);
