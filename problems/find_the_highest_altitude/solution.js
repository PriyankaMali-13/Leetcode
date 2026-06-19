/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr = [0];
    let n = gain.length;
    for(let i=0; i<n; i++){
        let sum = arr[i] + gain[i];
        arr.push(sum);
    }
    return Math.max(...arr);
};

/*
optimal code if n is million value without using memory 

var largestAltitude = function (gain) {
    let currentAltitude = 0;
    let maxAltitude = 0;
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        if (currentAltitude > maxAltitude) {
            maxAltitude = currentAltitude;
        }
    }
    return maxAltitude;
};

*/