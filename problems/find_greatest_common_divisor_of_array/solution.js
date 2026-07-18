/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return gcd(min, max);
};

function gcd(a,b){
    while(b!=0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}