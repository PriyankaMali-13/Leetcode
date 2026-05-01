/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let n = nums.length;
    let sum = 0;
    let fk = 0;

    // calculate sum and F(0) together
    for(let i = 0; i < n; i++) {
        sum += nums[i];
        fk += i * nums[i];
    }

    let maxVal = fk;

    // build F(1), F(2)... from previous F(k-1)
    for(let k = 1; k < n; k++) {
        fk = fk + sum - n * nums[n - k];
        maxVal = Math.max(maxVal, fk);
    }

    return maxVal;
};