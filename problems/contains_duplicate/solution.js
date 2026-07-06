/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //using hashmap -> Set() - we dont need sorting or looping
    let set = new Set(nums);
    return set.size !== nums.length;
};



/*using loop and sorting

    nums.sort((a,b)=> a-b);
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] == nums[i+1]){
            return true;
        }
    }
    return false;
*/
