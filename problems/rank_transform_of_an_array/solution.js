/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = [...arr].sort((a,b)=> a-b);
    let map = new Map();
    let rank = 1;
    for(let i=0; i<sorted.length; i++){
        if(!map.has(sorted[i])){
            map.set(sorted[i], rank);  // assign rank
            rank++;                     // increment for next unique value
        }
    }

    for(let i=0; i<arr.length; i++){
        arr[i] = map.get(arr[i]);
    }
    return arr;
};