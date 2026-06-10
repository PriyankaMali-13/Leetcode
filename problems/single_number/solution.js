/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let dict = {};
    for(let i of nums){
        if(i in dict){
            dict[i]++;
        }
        else{
            dict[i] = 1;
        }
    }

    for(let key in dict){
        if(dict[key] == 1){
            return Number(key);
        }
    }
};

