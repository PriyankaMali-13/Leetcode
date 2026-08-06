/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let left = 0;
    let k = s1.length;
    let s1map = new Map();
    let winMap = new Map();
    
    //build a map for s1 string
    for(let i=0; i<s1.length; i++){
        s1map.set(s1[i], (s1map.get(s1[i]) || 0) + 1);    
    };

    //build a map for window size and compare it with s1 map
    for(let right=0; right<s2.length; right++){
        //add right to winmap
        winMap.set(s2[right], (winMap.get(s2[right]) || 0) + 1);


        //check if the winsize is equals to s1 length
        if(right - left + 1 === k){
            //if winmap === s1map -> true
            if(mapsEqual(winMap, s1map)) return true;

            //else we shrink from left
            winMap.set(s2[left], (winMap.get(s2[left])) - 1);
            if(winMap.get(s2[left]) === 0){
                winMap.delete(s2[left]);
            }
            left++;
        }
    }
    return false;  
};

//helper function to check if 2 map's are equals
function mapsEqual(map1, map2){
    if(map1.size !== map2.size) return false;
    for(let [key, val] of map1){
        if(map2.get(key) !== val) return false;
    }
    return true;
}