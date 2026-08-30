/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let map = {};
    
    for(let char of s) map[char] = (map[char] || 0) + 1;  // increment for s
    for(let char of t) map[char] = (map[char] || 0) - 1;  // decrement for t
    
    for(let val of Object.values(map)){
        if(val !== 0) return false;  // any non-zero = not anagram
    }
    return true;
};

/* my approach
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;
    
    let dict_s = {};
    let dict_t = {};

    for(let i of s){
        if(i in dict_s){
            dict_s[i] += 1;
        }
        else{
            dict_s[i] = 1;
        }
    }

    for(let j of t){
        if(j in dict_t){
            dict_t[j] += 1;
        }
        else{
            dict_t[j] = 1;
        }
    }
    

    for(let [key, val] of Object.entries(dict_s)){
        if(dict_t[key] !== val) return false;
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
 */