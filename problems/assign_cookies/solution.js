/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let i = 0;
    let j = 0;
    let count = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            count += 1;
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    return count;
};
/*

 */
