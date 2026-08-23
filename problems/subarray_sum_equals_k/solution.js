/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// BRUTE FORCE APPROACH
// var subarraySum = function(nums, k) {
//     let count = 0;
//     let sum = 0;
//     for(let i=0; i<nums.length; i++){
//         sum = 0;
//         for(let j=i; j<nums.length; j++){
//             sum += nums[j];
//             if(sum === k){
//                 count+=1;
//             }
//         }
//     }
//     return count;
// };

//USING PREFIX SUM
var subarraySum = function(nums, k) {
    let prefixSum = 0;
    let count = 0;
    let map = {0: 1};
    
    for(let num of nums){
        prefixSum += num;
        if((prefixSum - k) in map){
            count += map[prefixSum - k];
        }
        map[prefixSum] = (map[prefixSum] || 0) + 1;
    }
    return count;
};