/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let lastIndex = {};
    for(let i=0; i<s.length; i++){
        lastIndex[s[i]] = i;
    }

    let stack = [];
    let inStack = new Set();

    for(let i=0; i<s.length; i++){
        let char = s[i];
        if(inStack.has(char)) continue;
        while(stack.length > 0 
            && stack[stack.length -1] > char
            && lastIndex[stack[stack.length-1]] > i ){
                inStack.delete(stack.pop());
        }
        stack.push(char);
        inStack.add(char);
    }

    return stack.join('');
};