/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b)=> b-a);
    return ((nums[0]-1) * (nums[1]-1));
};
/*
Without sorting 

var maxProduct = function(nums) {
    let first = 0, second = 0;
    for(let num of nums){
        if(num >= first){
            second = first;
            first = num;
        } else if(num > second){
            second = num;
        }
    }
    return (first-1) * (second-1);
};
 */