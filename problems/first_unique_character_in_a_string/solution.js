/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let dict = {};
    for(let char of s){
        if(!(char in dict)){
            dict[char] =1;
        }
        else{
            dict[char]+=1;
        }
    }
    for(let key in dict){
        if(dict[key]===1){
            return s.indexOf(key);
        }
    }
    return -1;
};