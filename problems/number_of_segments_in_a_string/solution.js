/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arr = s.split(' ').filter(Boolean);
    return arr.length;
};