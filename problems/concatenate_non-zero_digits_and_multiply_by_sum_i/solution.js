/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let str = n.toString();
    let x = '';
    let sum = 0;
    for(let char of str ){
        if(char != '0'){
            x += char;
            sum += Number(char);
        }
    }
    return Number(x) * sum;   
    
};