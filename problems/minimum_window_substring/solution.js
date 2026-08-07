/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let tMap = new Map();
    for(let char of t){
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }
    
    let need = tMap.size;
    let have = 0;
    let winMap = new Map();
    let left = 0;
    let minLen = Infinity;
    let minStart = 0;

    for(let right = 0; right < s.length; right++){
        winMap.set(s[right], (winMap.get(s[right]) || 0) + 1);
        
        if(tMap.has(s[right]) && winMap.get(s[right]) === tMap.get(s[right])){
            have++;
        }

        while(have === need){
            if(right - left + 1 < minLen){
                minLen = right - left + 1;
                minStart = left;
            }
            winMap.set(s[left], winMap.get(s[left]) - 1);
            if(winMap.get(s[left]) === 0) winMap.delete(s[left]);
            if(tMap.has(s[left]) && (winMap.get(s[left]) || 0) < tMap.get(s[left])){
                have--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};