/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      // choice 1
      let l1 = left + 1, r1 = right;
      let choice1 = true;
      while (l1 < r1) {
        if (s[l1] != s[r1]) { choice1 = false; break; }
        l1++; r1--;
      }

      // choice 2
      let l2 = left, r2 = right - 1;
      let choice2 = true;
      while (l2 < r2) {
        if (s[l2] != s[r2]) { choice2 = false; break; }
        l2++; r2--;
      }

      return choice1 || choice2;
    }
  }
  return true;
};