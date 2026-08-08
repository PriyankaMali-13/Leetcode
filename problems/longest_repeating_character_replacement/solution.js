/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;
    let map = new Map();
    for(let right=0; right<s.length; right++){
        //map.set(key, value);
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(s[right]));

        if((right-left+1) - maxFreq > k){
            //shrink 
            map.set(s[left], map.get(s[left])-1);
            if(map.get(s[left]) ===0 ){
                map.delete(s[left]);
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
    
};