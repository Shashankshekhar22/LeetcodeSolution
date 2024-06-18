// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let maxCount = 0; // to track the maximum frequency of any character in the current window
  let start = 0; // start of the sliding window
  let maxLength = 0; // maximum length of substring with all same characters

  const frequency = new Array(26).fill(0); // array to store frequency of characters ('A' to 'Z')

  for (let end = 0; end < s.length; end++) {
    const charCode = s.charCodeAt(end) - "A".charCodeAt(0);
    frequency[charCode]++;
    maxCount = Math.max(maxCount, frequency[charCode]);

    // If the number of replacements needed exceeds k, shrink the window from the left
    while (end - start + 1 - maxCount > k) {
      const startCharCode = s.charCodeAt(start) - "A".charCodeAt(0);
      frequency[startCharCode]--;
      start++;
    }

    // Update maxLength of valid substring
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
