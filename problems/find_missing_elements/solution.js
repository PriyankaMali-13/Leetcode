/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let arr = [];
    for(let i=min; i<=max; i++){
        if(!(nums.includes(i))){
            arr.push(i);
        }
    }
    return arr.sort((a,b)=> a-b);
};