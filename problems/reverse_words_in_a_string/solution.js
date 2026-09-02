/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    arr = s.split(" ");
    arr = arr.filter(x => x !== "");
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr.join(' ');
     
};