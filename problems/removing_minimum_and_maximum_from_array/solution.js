/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let n = nums.length;
    let maxIdx = nums.indexOf(Math.max(...nums));
    let minIdx = nums.indexOf(Math.min(...nums));

    let front = Math.max(minIdx+1, maxIdx+1);

    let end = Math.max(n-minIdx, n-maxIdx);

    let case1 = (minIdx+1) + (n-maxIdx);
    let case2 = (maxIdx+1) + (n-minIdx);

    let both = Math.min(case1, case2);

    return Math.min(front, end, both);
    
};