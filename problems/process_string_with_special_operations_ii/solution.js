/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function(s, k) {
    // Step 1: record lengths after each operation
    let lengths = [0];
    for(let char of s){
        let len = lengths[lengths.length-1];
        if(/[a-z]/.test(char)) lengths.push(len + 1);
        else if(char == '*') lengths.push(Math.max(0, len - 1));
        else if(char == '#') lengths.push(len * 2);
        else if(char == '%') lengths.push(len);
    }

    // check if k is out of bounds
    if(k >= lengths[lengths.length-1]) return '.';

    // Step 2: go backwards to find character at position k
    for(let j = s.length-1; j >= 0; j--){
        let len = lengths[j];      // length BEFORE this operation
        let char = s[j];

        if(char == '#'){
            k = k % len;           // map back to first half
        }
        else if(char == '%'){
            k = lengths[j+1]-1-k;  // flip position
        }
        else if(char == '*'){
            // k stays same
        }
        else{
            if(k == len){          // this letter is at position len
                return char;
            }
        }
    }

    return '.';
};

/*
var processStr = function (s, k) {
    let res = "";
    for (let i of s) {
        if (/[a-z]/.test(i)) {
            res += i;
        }
        else if (i == '*') {
            res = res.slice(0, res.length - 1);
        }
        else if (i == '#') {
            res += res;
        }
        else if (i == '%') {
            let reverse = "";
            for (let i = res.length - 1; i >= 0; i--) {
                reverse += res[i];
            }
            res = reverse;
        }
    }
    if(k > res.length-1 ){
        return '.';
    }
    else{
        return res[k];
    }
};
*/