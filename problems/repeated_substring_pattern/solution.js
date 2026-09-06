/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;
    
    for(let k = 1; k <= n/2; k++){
        if(n % k === 0){  // k must divide n evenly
            let sub = s.slice(0, k);
            if(sub.repeat(n/k) === s) return true;
        }
    }
    return false;
};