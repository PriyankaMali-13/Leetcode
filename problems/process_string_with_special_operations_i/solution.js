/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let res = "";
    
    for(let i of s){
        if(/[a-z]/.test(i)){
            res += i;
        }
        else if(i == '*'){
            res = res.slice(0, res.length-1);
        }
        else if(i == '#'){
            res+=res;
        }
        else if(i == '%'){
            let reverse = "";
            for(let i= res.length-1; i>=0; i--){
                reverse += res[i];
            }
            res = reverse;
        }
    }
    return res;
};