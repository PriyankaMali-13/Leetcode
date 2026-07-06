/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let right = 0;
    let left = 0;
    let maxSum = -Infinity;
    let sum = 0;
    for(let right =0; right< nums.length; right++){
        sum+= nums[right];
        if(right-left+1 ==k){
            maxSum = Math.max(maxSum, sum);  // keep the largest sum!
            sum = sum - nums[left];
            left++;
        }
    }
    return maxSum/k;

};