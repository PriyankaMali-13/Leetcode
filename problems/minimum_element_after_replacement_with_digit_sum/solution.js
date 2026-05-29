/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let new_arr = [];
    for(let ele of nums){
        let arr = String(ele).split('');
        let count = 0;
        for(let char of arr){
            count += Number(char);
            
        }
        new_arr.push(count);
    }
    return Math.min(...new_arr);
};