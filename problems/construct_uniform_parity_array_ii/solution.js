/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let oddCount = 0;
    let minOdd = Infinity;

    for(let num of nums1){
        if(num % 2 !== 0){
            oddCount++;
            minOdd = Math.min(minOdd, num);
        }
    }

    // all even already
    if(oddCount === 0) return true;
    
    // all odd already
    if(oddCount === nums1.length) return true;

    // mix — allEven always false (min odd can never become even)
    // allOdd — every even must be > minOdd
    for(let num of nums1){
        if(num % 2 === 0 && num <= minOdd) return false;
    }
    return true;
};
