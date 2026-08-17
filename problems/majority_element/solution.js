/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dict = {};
    let maxCount = 0;
    let majority;

    for (let num of nums) {
        dict[num] = (dict[num] || 0) + 1;

        if (dict[num] > maxCount) {
            maxCount = dict[num];
            majority = num;
        }
    }

    return majority;
};
