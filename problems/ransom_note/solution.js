/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let dict = {};
    for (let i = 0; i < magazine.length; i++) {
        if (!(magazine[i] in dict)) {
            dict[magazine[i]] = 1;
        }
        else {
            dict[magazine[i]] += 1;
        }
    }

    for(let char of ransomNote){
        if(!(char in dict)){
            return false;
        }
        else{
            dict[char] --;
            if(dict[char] < 0){
                return false;
            }
        }
    }
    return true;
};