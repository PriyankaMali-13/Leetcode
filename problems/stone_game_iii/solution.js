/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    //build prefix
    let prefix = [];
    prefix[0] = 0;
    for(let i=1; i<=stoneValue.length; i++){
        prefix[i] = prefix[i-1] + stoneValue[i-1];
    }

    //build dp
    let n = stoneValue.length;
    let dp = new Array(n+1).fill(0);
    for(let i=n-1; i>=0; i--){
        // take 1 stone - always valid
        let option1 = stoneValue[i] - dp[i+1];

        // take 2 stones - valid if i+1 < n
        let option2 = i+1 < n ? (prefix[i+2] - prefix[i]) - dp[i+2] : -Infinity;

        // take 3 stones - valid if i+2 < n
        let option3 = i+2 < n ? (prefix[i+3] - prefix[i]) - dp[i+3] : -Infinity;

        dp[i] = Math.max(option1, option2, option3); 
    }

    //check who wins
    if(dp[0] > 0) return "Alice";
    else if(dp[0] < 0) return "Bob";
    else return "Tie";
};