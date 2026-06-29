/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let arr = people.sort((a,b)=> a-b);
    let left = 0;
    let right = arr.length -1;
    let boat = 0
    while(left <= right){
        if(arr[left] + arr[right] <= limit){
            boat+=1;
            left++;
            right--;
        }
        else{
            boat+=1;
            right--;
        }
    }
    return boat;
};