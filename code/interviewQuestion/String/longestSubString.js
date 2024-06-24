// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subStringLength = 0;
  let startWindow = 0;
  let currentPosition = 0;
  let uniqueCharSet = new Set();
  while (currentPosition < s.length) {
    if (uniqueCharSet.has(s[currentPosition])) {
      uniqueCharSet.delete(s[startWindow]);
      startWindow++;
    } else {
      uniqueCharSet.add(s[currentPosition]);
      currentPosition++;
      subStringLength = Math.max(subStringLength, uniqueCharSet.size);
    }
  }
  return subStringLength;
};
