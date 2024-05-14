// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let valuePresent = false;
  for (let i = 0; i < matrix.length; i++) {
    matrix[0].find((value) => {
      if (value === target) {
        valuePresent = true;
      }
    });
    break;
  }
  return valuePresent;
  //   return matrix.flat().includes(target) ? true : false;
};

// Alternate Solution

var searchMatrix = function (matrix, target) {
  return matrix.flat().includes(target) ? true : false;
};
