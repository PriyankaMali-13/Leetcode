/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let start = 1000;
    let total = 0;
    let commas = 1;

    while(start <= n){
        let end = start * 1000 - 1;
        let count = Math.min(n, end) - start + 1;
        total += count * commas;
        start *= 1000;
        commas += 1;
    };

    return total;
};