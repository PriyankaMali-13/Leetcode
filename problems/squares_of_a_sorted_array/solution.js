/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = new Array(nums.length);
    let i = result.length - 1;

    let left = 0;
    let right = nums.length -1;
    
    while(left <= right){
        let absLeft = (Math.abs(nums[left])) ** 2 ;
        let absRight = (Math.abs(nums[right])) ** 2;
        if(absLeft > absRight){
            result[i] = absLeft;
            left++;
        }
        else{
            result[i] = absRight;
            right--;
        }  
        i--;
    }

    return result;
};