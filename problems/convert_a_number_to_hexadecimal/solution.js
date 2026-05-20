/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num < 0){
        num = num >>> 0;
    }
    if(num === 0){
        return "0";
    }
    let hexChars = "0123456789abcdef";
    let result = "";
    
    while(num > 0){
        let remainder = num % 16;
        result = hexChars[remainder] + result;
        num = Math.floor(num / 16);
    }
    
    return result;
};