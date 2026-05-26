/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lowercase = new Set();
    let uppercase = new Set();

    for(let char of word){
        if(char == char.toLowerCase()){
            lowercase.add(char);
        }
        else{
            uppercase.add(char)
        }
    }

    let count = 0;
    for(let char of lowercase){
        if(uppercase.has(char.toUpperCase())){
            count++;
        }
    }
    return count;
};