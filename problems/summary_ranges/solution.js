/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length == 0) return [];
    let result = [];
    let start = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i] - nums[i-1] !== 1){
            let end = nums[i-1];
            if(start === end) result.push(`${start}`);
            else result.push(`${start}->${end}`);
            start = nums[i];
        }
    }
    end = nums[nums.length-1];
    if (start === end) result.push(`${start}`);
    else result.push(`${start}->${end}`);

    return result;
};