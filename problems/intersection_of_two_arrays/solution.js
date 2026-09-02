/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums2);
    let result = new Set();
    for(let ele of nums1){
        if(set.has(ele)){
            result.add(ele);
        }
    }
    return [...result];
};