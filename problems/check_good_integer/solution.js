/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let arr = String(n).split('').map(ch => Number(ch));
    let digitSum = 0;
    let squareSum = 0;
    for(let num of arr){
        digitSum +=num; 
        squareSum += num*num;
    }
    return squareSum - digitSum >= 50;
};