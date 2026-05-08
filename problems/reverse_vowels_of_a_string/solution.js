/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0;
    let right = s.length -1;
    let arr = s.split("");
    let vowels = "AEIOUaeiou"
    while(left < right){
        while(left<right && !(vowels.includes(arr[left]))){
            left++;
        }
        while(left<right && !(vowels.includes(arr[right]))){
            right--;
        }
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr.join("");

};