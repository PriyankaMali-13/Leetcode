/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1; //the slowest speed
    let right = Math.max(...piles); //the max speed
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let totalHours = 0;
        for(let pile of piles){ 
            totalHours = totalHours + Math.ceil(pile/mid);
        }
        if(totalHours <= h){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
    return left;
};