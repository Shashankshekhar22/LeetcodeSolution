//
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

var removeDuplicates = function (nums) {
  let updatedArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (updatedArray.indexOf(nums[i]) === -1) {
      updatedArray.push(nums[i]);
    }
  }
  console.log(updatedArray);
};

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Here we can keep at most two duplicate number
var removeDuplicates = function (nums) {
  let k = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
