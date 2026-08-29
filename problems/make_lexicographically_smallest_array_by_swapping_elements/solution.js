/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */

var lexicographicallySmallestArray = function(nums, limit) {
    let result = new Array(nums.length);
    
    // step 1: pair [value, originalIndex] and sort by value
    let indexed = nums.map((val, idx) => [val, idx]);
    indexed.sort((a, b) => a[0] - b[0]);
    
    let i = 0;
    while(i < indexed.length){
        let groupStart = i;
        
        // step 2: find group boundary
        while(i + 1 < indexed.length && indexed[i+1][0] - indexed[i][0] <= limit){
            i++;
        }
        
        // step 3: collect values and original indices from this group
        let groupVals = [];
        let groupIdxs = [];
        for(let j = groupStart; j <= i; j++){
            groupVals.push(indexed[j][0]);   // sorted values (already sorted!)
            groupIdxs.push(indexed[j][1]);   // original indices
        }
        
        // step 4: sort original indices, place smallest value at smallest index
        groupIdxs.sort((a, b) => a - b);
        for(let j = 0; j < groupIdxs.length; j++){
            result[groupIdxs[j]] = groupVals[j];
        }
        
        i++;
    }
    
    return result;
};