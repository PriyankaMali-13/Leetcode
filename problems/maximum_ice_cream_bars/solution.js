/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let count = 0;
    let sorted = costs.sort((a,b) => a-b);
    for(let i of sorted){
        if(coins >= i){
            coins -= i;
            count++;
        }
        else{
            return count;
        }
    }
    return count;
};