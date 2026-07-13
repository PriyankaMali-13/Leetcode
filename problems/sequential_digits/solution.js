/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let result = [];
    let digits = "123456789";

    for (let length = 2; length <= 9; length++) {
        for (let start = 0; start <= 9 - length; start++) {
            let num = parseInt(digits.substring(start, start + length));
            if (num > high) break;     // stop checking this length!
            if (num >= low) result.push(num);  // only add if >= low
        }
    }

    return result;
};