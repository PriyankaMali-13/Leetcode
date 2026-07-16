/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    //find prefix of gcd
    let max = nums[0];
    let prefixGcd = [];
    for(let i=0; i<nums.length; i++){
        max = Math.max(max, nums[i]);
        prefixGcd.push(gcd(nums[i], max));
    }
    //sort 
    let sortedPrefix = prefixGcd.sort((a,b)=> a-b);
    //pair smallest and largest and cal sum
    let left = 0;
    let right = sortedPrefix.length -1;
    let sum = 0;
    while(left < right){
        let pairGcd  = gcd(sortedPrefix[left], sortedPrefix[right]);
        sum+=pairGcd;
        left++;
        right--;
    }

    return sum;
};

//cal gcd 
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}