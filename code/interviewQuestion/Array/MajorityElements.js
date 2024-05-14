// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let numberObjectMap = {};
  let countOfEachNumberInAnArray = 0;
  let mostRepeatingNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    numberObjectMap[nums[i]] = (numberObjectMap[nums[i]] || 0) + 1;
    if (numberObjectMap[nums[i]] > countOfEachNumberInAnArray) {
      countOfEachNumberInAnArray = numberObjectMap[nums[i]];
      mostRepeatingNumber = nums[i];
    }
  }

  return mostRepeatingNumber;
};

// with simple naming convention
var majorityElement = function (nums) {
  const hash = {};
  let res = 0;
  let majority = 0;

  for (let n of nums) {
    hash[n] = (hash[n] || 0) + 1;
    if (hash[n] > majority) {
      res = n;
      majority = hash[n];
    }
  }

  return res;
};
