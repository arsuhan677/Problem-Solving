function longestUniqueSubstring(str) {
  let left = 0;
  let maxLength = 0;
  const seen = new Map();

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }

    seen.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
console.log(longestUniqueSubstring("abcabcbb"));
console.log(longestUniqueSubstring("bbbbb"));
console.log(longestUniqueSubstring("pwwkew"));
