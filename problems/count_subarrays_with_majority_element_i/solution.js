/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] == target) {
        count += 1;
      }
      if (count > (j - i + 1) / 2) {
        result += 1;
      }
    }
    count = 0;
  }
  return result;
};