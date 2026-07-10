/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let map = new Map();
  let left = 0;
  let maxSum = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    if (map.has(nums[right])) {
      map.set(nums[right], map.get(nums[right]) + 1);
    } else {
      map.set(nums[right], 1);
    }
    sum += nums[right];

    if (right - left + 1 === k) {
      if (map.size === k) {
        maxSum = Math.max(sum, maxSum);
      }
      sum -= nums[left];
      let count = map.get(nums[left]) - 1;
      if (count === 0) {
        map.delete(nums[left]);
      } else {
        map.set(nums[left], count);
      }
      left++;
    }
  }
  return maxSum;
};
