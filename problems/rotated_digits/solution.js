/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (isGood(i)) count++;
    }
    return count;
};

function isGood(num) {
    const invalid   = new Set([3, 4, 7]);      
    const different = new Set([2, 5, 6, 9]);   
    let hasDifferent = false;

    while (num > 0) {
        const digit = num % 10;
        if (invalid.has(digit)) return false;           
        if (different.has(digit)) hasDifferent = true;
        num = Math.floor(num / 10);
    }

    return hasDifferent; 
}