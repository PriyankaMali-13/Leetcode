/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    // Step 1: Count degree of each city
    const degree = new Array(n).fill(0);
    const connected = new Set();
    
    for (let [a, b] of roads) {
        degree[a]++;
        degree[b]++;
        connected.add(`${a},${b}`);
        connected.add(`${b},${a}`);
    }
    
    // Step 2: Check all pairs of cities
    let maxRank = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let rank = degree[i] + degree[j];
            // If directly connected, subtract 1 (road counted twice)
            if (connected.has(`${i},${j}`)) rank--;
            maxRank = Math.max(maxRank, rank);
        }
    }
    
    return maxRank;
};