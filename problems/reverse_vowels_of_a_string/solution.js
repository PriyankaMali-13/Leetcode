/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arr = s.split('');
    let left = 0;
    let temp = 0;
    let right = arr.length -1;
    while(left < right){
        if(vowels.includes(arr[left]) && vowels.includes(arr[right])){
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        else if(!(vowels.includes(arr[left]))){
            left++;
        }
        else if(!(vowels.includes(arr[right]))){
            right--;
        }
    }
    return arr.join('');
};