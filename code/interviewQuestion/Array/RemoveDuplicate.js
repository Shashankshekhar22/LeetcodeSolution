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
