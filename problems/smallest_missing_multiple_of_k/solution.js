/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let set = new Set();
    for(let num of nums){
        set.add(num);
    };
    for(let i=k; ; i+=k){
        if(!(set.has(i))){
            return i;
        }
    }
};