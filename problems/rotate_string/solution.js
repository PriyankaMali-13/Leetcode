/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length){
        return false;
    }
    
    for(let i=0; i<s.length; i++){
        let shifted = s.slice(1) + s[0];
        s = shifted;
        if(s === goal){
            return true;
        }
    }
    return false;
};