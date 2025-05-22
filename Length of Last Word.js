/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let cleanStr = s.trim().split(/\s+/);
    let last_ele = cleanStr[cleanStr.length-1];
    return last_ele.length;
};