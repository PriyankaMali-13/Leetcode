/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let set = new Set();
    let n = digits.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            for(let k=0; k<n; k++){
                if(i !== j && j !== k && i !== k){
                    if(digits[i] !== 0 && digits[k] % 2 == 0){
                        let num = digits[i] * 100 + digits[j] * 10 + digits[k];
                        set.add(num);
                    }
                }
            }
        }
    }
    return set.size;
};