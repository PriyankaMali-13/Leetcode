/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let original = n;
    let product = 1;
    let sum = 0;
    while(n > 0){
        let lastDigit = n % 10;
        sum += lastDigit;
        product *= lastDigit;
        n = Math.floor(n/10);
    };
    let total = product + sum;
    return original%total === 0;
};