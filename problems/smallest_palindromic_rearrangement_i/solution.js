/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let mid = Math.floor(s.length/2);
    let firstHalf = s.slice(0, mid).split('').sort().join('');
    let middle = s.length % 2 !== 0 ? s[mid] : "";
    let reversed = firstHalf.split('').reverse().join('');
    return firstHalf + middle + reversed;
};