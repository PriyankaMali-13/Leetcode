/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((acc, current) => acc + current, 0);
    let leftSum = 0;
    let rightSum = 0;
    let prefix = [];
    prefix[0] = 0;
    
    for(let i=1; i<nums.length; i++){
        prefix[i] = prefix[i-1] + nums[i-1];
    }

    for(let i=0; i<nums.length; i++){
        leftSum = prefix[i];
        rightSum = total - prefix[i] - nums[i];
        if(leftSum === rightSum) return i;
    }

    return -1;

};