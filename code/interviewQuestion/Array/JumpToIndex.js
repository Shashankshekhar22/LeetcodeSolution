// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let currentIndex = nums[0]; // jumps available at 0 index

  for (let i = 1; i < nums.length; i++) {
    if (currentIndex == 0) return false; // if no jumps available in previous index
    currentIndex--; // jumped to this index. so one less jump.
    currentIndex = Math.max(nums[i], currentIndex); // max jumps available in this index
  }
  return true;
};

/************Jump to Index type Two*************/
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let arrLength = nums.length;
  let noOfJumps = 0;
  if (nums[0] === arrLength) {
    return noOfJumps;
  }
  for (let i = 1; i < arrLength; i++) {
    if (nums[i] + nums[i - 1] === arrLength) {
      noOfJumps = noOfJumps + 1;
    }
  }
  return noOfJumps;
};

// Example 1:

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
// Example 2:

// Input: citations = [1,3,1]
// Output: 1

var hIndex = function (citations) {
  let mostRepeatingNumber = 0;
  let occurrenceOfMostCitedValue = {};
  countOfEachNumberInAnArray = 0;
  for (let i = 0; i < citations.length; i++) {
    console.log(
      "occurrenceOfMostCitedValue[nums[i]]",
      occurrenceOfMostCitedValue[citations[i]]
    );
    occurrenceOfMostCitedValue[citations[i]] =
      (occurrenceOfMostCitedValue[citations[i]] || 0) + 1;
    if (occurrenceOfMostCitedValue[citations[i]] > countOfEachNumberInAnArray) {
      countOfEachNumberInAnArray = occurrenceOfMostCitedValue[citations[i]];
      mostRepeatingNumber = citations[i];
    }
  }
  return mostRepeatingNumber;
};

var hIndex = function (nums) {
  let numberObjectMap = {};
  let countOfEachNumberInAnArray = 0;
  let mostRepeatingNumber = 0;

  for (let i of nums) {
    console.log("numberObjectMap[nums[i]] Before", numberObjectMap[i]);

    numberObjectMap[i] = (numberObjectMap[i] || 0) + 1;
    console.log("numberObjectMap[nums[i]] After", numberObjectMap[i]);
    if (numberObjectMap[nums[i]] > countOfEachNumberInAnArray) {
      console.log(
        "Inside::",
        numberObjectMap[nums[i]] + "::" + countOfEachNumberInAnArray
      );
      countOfEachNumberInAnArray = numberObjectMap[nums[i]];
      mostRepeatingNumber = nums[i];
    }
  }
  console.log("numberObjectMap", numberObjectMap);
  return mostRepeatingNumber;
};
