Input: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
Output: [1, 2, 2, 3, 5, 6];

var merge = function (nums1, m, nums2, n) {
  let returnValue = [];
  nums1.splice(n, m + n);
  returnValue = [...nums1, ...nums2];
  console.log(nums1.sort());
  return returnValue.sort();
};

// Alternate Solution
var merge = function (nums1, m, nums2, n) {
  let j = 0;
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[j];
    j++;
  }
  nums1.sort((a, b) => {
    return a - b;
  });
};
