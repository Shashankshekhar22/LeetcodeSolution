var longestSubString = function (s) {
  let longestSubStringLength = 0;
  let startWindow = 0;
  let currentPosition = 0;
  let charset = new Set();
  while (currentPosition < s.length) {
    if (charset.has(s[currentPosition])) {
      charset.delete(s[startWindow++]);
    } else {
      charset.add(s[currentPosition++]);
      longestSubStringLength = Math.max(longestSubStringLength, charset.size);
    }
  }
  console.log("CHAR SET", charset);

  console.log("Start Window", startWindow);
  console.log("Current Window", currentPosition);

  return longestSubStringLength;
};
