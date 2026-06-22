/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let dict = {};
    for(let char of text){
        if(char in dict){
            dict[char] += 1;
        }
        else{
            dict[char] = 1;
        }
    }
    let instances = [
        Math.floor((dict['b'] || 0) / 1),
        Math.floor((dict['a'] || 0) / 1),
        Math.floor((dict['l'] || 0) / 2),
        Math.floor((dict['o'] || 0) / 2),
        Math.floor((dict['n'] || 0) / 1),
    ];
    return Math.min(...instances);

};
