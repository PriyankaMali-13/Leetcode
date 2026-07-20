/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    
    k = k % (m*n);
    
    let flat = grid.flat();
    
    let shifted = flat.slice(flat.length - k).concat(flat.slice(0, flat.length - k));
    
    let result = [];
    for(let i = 0; i < m; i++){
        result.push(shifted.slice(i*n, i*n + n));
    }
    
    return result;
};