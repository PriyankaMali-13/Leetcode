/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let answer = "";
    for(let word of words){
        let totalWeight = 0; 
        for(let char of word){
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            let charWeight  = weights[index];
            totalWeight += charWeight;
        }
        let result = totalWeight % 26;
        let letter = String.fromCharCode('z'.charCodeAt(0) - result);
        answer += letter;

    }
    return answer;
};