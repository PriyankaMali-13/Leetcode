/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const hasOutgoing = new Set(paths.map(([a, b]) => a));
    
    for (let [a, b] of paths) {
        if (!hasOutgoing.has(b)) return b;
    }
};