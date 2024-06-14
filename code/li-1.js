/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let resultArray = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        resultArray.push(i, j);
        break;
      }
    }
  }
  return resultArray;
};
//Input: nums = [2,7,11,15], target = 9 Output: [0,1]
// Two Pinter Problems
var twoSum = function (nums, target) {
  let resultArray = [];
  let start = 0; // Start and Increase the first index
  let end = nums.length - 1; //// Start from last and decrease the last index
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      console.log(start, end);
      resultArray = [start, end];
      break;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return resultArray;
};

// Same with for loop

var twoSum = function (nums, target) {
  let resultArray = [];
  let start = 0;
  let end = nums.length - 1;

  for (; start < end; ) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      resultArray = [start, end];
      break;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return resultArray;
};
