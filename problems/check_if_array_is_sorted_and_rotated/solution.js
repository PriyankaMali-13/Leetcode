/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

    let drops = 0;
    for(let i=0; i< nums.length-1; i++){
        if(nums[i] > nums[i+1]){
            drops+=1;
        }
    }

    if(drops == 0){
        return true;
    }
    else if(drops == 1){
        return nums[nums.length-1] <= nums[0];
    }
    else{
        return false;
    }
};