/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n < 1000) return 0;
    let diff = n - 1000;
    return (diff+1);
};