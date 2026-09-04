/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n = nums.length;
    
    for(let i = 0; i < n; i++){
        let maxVal = Math.max(...nums.slice(0, i+1));  // max from 0 to i
        let minVal = Math.min(...nums.slice(i));        // min from i to end
        
        if(maxVal - minVal <= k){
            return i;  // first stable index!
        }
    }
    
    return -1;
};