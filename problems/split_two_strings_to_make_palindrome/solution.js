/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    return check(a, b) || check(b, a);
};

function check(a, b) {
    let l = 0, r = a.length - 1;
    
    // Step 1: Match outer characters from a (left) and b (right)
    while (l < r && a[l] === b[r]) {
        l++;
        r--;
    }
    
    // Step 2: Check if remaining middle part of either a or b is a palindrome
    return isPalindrome(a, l, r) || isPalindrome(b, l, r);
}

function isPalindrome(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}