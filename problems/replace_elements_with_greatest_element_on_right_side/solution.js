/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let maxSoFar = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let original = arr[i];   // save original
        arr[i] = maxSoFar;       // replace with current max
        maxSoFar = Math.max(maxSoFar, original);  // update max
    }
    return arr;
};