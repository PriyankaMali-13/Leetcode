/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");
    if(words.length !== pattern.length){
        return false;
    }
    let dict = {};

    for(let i = 0; i < pattern.length; i++){
        if(pattern[i] in dict){
            if(dict[pattern[i]] !== words[i]){
                return false;
            }
        } else {
            if(Object.values(dict).includes(words[i])){
                return false;
            }
            dict[pattern[i]] = words[i];;
        }
    }
    return true;
};