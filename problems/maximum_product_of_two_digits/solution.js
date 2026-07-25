/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let arr = [];
    while(n != 0){
        let lastDigit = n%10;
        arr.push(lastDigit)
        n = Math.floor(n/10);
    }
    arr.sort((a,b)=> b-a);
    return arr[0]*arr[1];   
};