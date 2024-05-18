/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
var rotate = function (nums, k) {
  let modifiedArray = [];
  let restArray = [];
  for (let i = 0; i <= k; i++) {
    restArray.push(nums[i]);
  }
  for (let i = k + 1; i < nums.length; i++) {
    modifiedArray.push(nums[i]);
  }
  modifiedArray = [...modifiedArray, ...restArray];
  return modifiedArray;
};

// Alternate Solution

var rotate = function (nums, k) {
  if (nums.length < 2) return;
  k = k % nums.length;
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  function reverse(start, end) {
    while (start < end) [nums[start++], nums[end--]] = [nums[end], nums[start]];
  }
};
