/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    let sorted_intervals = intervals.sort((a, b) => a[0] - b[0]);
    let count = new Set();
    
    for(let i=0; i<sorted_intervals.length; i++){
        for(let j=0; j<sorted_intervals.length; j++){
            if(i==j) continue;
            let [a,b] = intervals[i];
            let [c,d] = intervals[j];
            if(c<=a && b<=d){
                count.add(i);
            }
        }
    }

    return intervals.length - count.size;
};