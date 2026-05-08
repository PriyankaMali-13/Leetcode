/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    let dict = {};
    
    for(let char of s){
        if(char in dict){
            dict[char]++;
        }
        else{
            dict[char] = 1;
        }
    }

    for(let char of t){
        if(!(char in dict)){
            return false;
        }
        dict[char]--;
        if(dict[char] < 0){
            return false;
        }
    }

    return true;

    
};