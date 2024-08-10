// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**********************ONLY IF IT IS NON ZERO ARRAY**************** */
var productExceptSelf = function (nums) {
  let product = [];
  let productOfArray = 1;
  for (let i = 0; i < nums.length; i++) {
    productOfArray = productOfArray * nums[i];
  }
  return nums.map((value) => productOfArray / value);
};

var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = [];

  const leftProducts = [];
  const rightProducts = [];
  leftProducts[0] = 1;
  rightProducts[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    output[i] = leftProducts[i] * rightProducts[i];
  }

  return output;
};
