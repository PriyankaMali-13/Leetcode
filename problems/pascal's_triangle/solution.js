/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp = [];
    
    for(let i=0; i<numRows; i++){
        let row = new Array(i+1).fill(1);  // inside loop!
        for(let j=1; j<i; j++){            // middle elements only
            row[j] = dp[i-1][j-1] + dp[i-1][j];
        }
        dp.push(row);
    }
    
    return dp;
};