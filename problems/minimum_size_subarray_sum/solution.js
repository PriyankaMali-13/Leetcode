/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let right = 0;
    let left = 0;
    let minWindow = Infinity;
    let sum = 0;

    for(right=0; right< nums.length; right++){
        sum += nums[right];
        while(sum >= target){
            minWindow = Math.min(minWindow, right-left+1);
            sum -= nums[left];
            left++;
        }
    }
    //this is called ternary opt -> condition ? valueIfTrue : valueIfFalse
    return minWindow === Infinity ? 0 : minWindow;
};
