/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let left = 0;
    let right = 0;
    let set = new Set();
    for(let right=0; right<nums.length; right++){
        if(set.has(nums[right])){
            return true;
        }
        else{
            set.add(nums[right]);
        }
        if(right-left+1 > k){
            set.delete(nums[left]);
            left++;
        }
    }
    return false;

};