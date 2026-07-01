/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0;
    let fast = 0;
    while(fast != nums.length){
        if(nums[fast] == 0){
            fast++;
        }
        else{
            temp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = temp;
            fast++;
            slow++;
        }
    }

    return nums;
};



