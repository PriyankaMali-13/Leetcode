/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let dict_s = {};
    let dict_t = {};

    //build dict_s
    for(let char of s){
        dict_s[char] = (dict_s[char] || 0) + 1;
    }
    //build dict_t
    for(let char of t){
        dict_t[char] = (dict_t[char] || 0) + 1;
    }
    //checking the letter newly added
    for(let key in dict_t){
        if(!(key in dict_s) || dict_t[key] !== dict_s[key]){
            return key;
        }
    }
};