/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sorted.length - 1; i++) {
    // skip duplicate i
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      let fixed = sorted[i];
      let res = fixed + sorted[left] + sorted[right];

      if (res < 0) {
        left++;
      } else if (res > 0) {
        right--;
      } else {
        result.push([fixed, sorted[left], sorted[right]]);
        left++;
        right--;
        // skip duplicate left
        while (left < right && sorted[left] === sorted[left - 1]) left++;
        // skip duplicate right
        while (left < right && sorted[right] === sorted[right + 1]) right--;
      }
    }
  }

  return result;
};