/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let dict = {};
    for (let char of s) {
        if (char in dict) {
            dict[char] += 1;
        }
        else {
            dict[char] = 1;
        }
    }
    let count = 0;
    let hasOdd = false;
    for(let key in dict){
        if(dict[key] % 2== 0){
            count += dict[key]
        }
        else{
            count += dict[key]-1;
            hasOdd = true;
        }
    }

    if(hasOdd){
        count +=1;
    }
    return count;
};