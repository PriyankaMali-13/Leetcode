/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    let n = Math.max(...nums);        

    if (nums.length !== n + 1)           
        return false;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {  
        if (nums[i] !== i + 1) {
            return false;
        }
    }

    let count = 0;                    
    for (let a of nums) {
        if (a === n) {
            count += 1;
        }
    }

    if (count === 2) {
        return true;
    }
    return false;
};