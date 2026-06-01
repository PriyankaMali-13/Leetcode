    /**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
  //  2 2 5 6 7 9  
  cost.sort((a, b) => b - a);
  let total = 0;
  for(let i=0; i<cost.length; i++){
    if((i+1)%3 !==0){
        total += cost[i];
    }
  }
  return total;
};