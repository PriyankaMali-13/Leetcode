/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let s = nums.join("");
    let res = [];
    for(let char of s){
        res.push(char);
    }
    return res.map(Number);
};