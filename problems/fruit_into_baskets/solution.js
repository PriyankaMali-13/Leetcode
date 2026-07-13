/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let left = 0;
    let map = new Map();
    let maxLen = 0;

    for (let right = 0; right < fruits.length; right++) {
        // shortcut:
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);
        
        if (map.size > 2) {
            map.set(fruits[left], map.get(fruits[left]) - 1);
            if (map.get(fruits[left]) === 0) map.delete(fruits[left]);
            left++;
        }
        maxLen = Math.max(maxLen, right-left+1);
    }
    return maxLen;
};

//long cut:
        // if(map.has(fruits[right])){
        //     map.set(fruits[right], (map.get(fruits[right]) +1 ));
        // }
        // else{
        //     map.set(fruits[right], 1);
        // }