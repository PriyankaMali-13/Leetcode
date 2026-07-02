/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let slow = 0;
   let fast = 1;
   while(fast < nums.length) {
        if(nums[slow] == nums[fast]){
            fast++;
        }
        else{
            slow++;
            nums[slow] = nums[fast];
            fast++
        }
   }

   return slow+1; 
};