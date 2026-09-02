/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i=1; i<strs.length; i++){
        let k = 0;
        while(k < prefix.length && k < strs[i].length){
            //strs[i][k] cmp with curr str of chars
            if(prefix[k] === strs[i][k]){
                k++;
            }
            else{
                break;
            }
        }
        prefix = prefix.slice(0, k);
    }

    return prefix;

};

/**
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(!strs[i].startsWith(prefix)){
            prefix = prefix.slice(0, prefix.length - 1);  // shrink by 1
            if(prefix === "") return "";
        }
    }
    return prefix;
};
 */