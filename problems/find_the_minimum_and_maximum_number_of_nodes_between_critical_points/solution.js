/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let curr = head;
    let prev = null;
    let idx = 0;
    let criticalPoints = [];

    while(curr !== null){
        if(prev !== null && curr.next !== null){
            if(curr.val > prev.val && curr.val > curr.next.val){
                criticalPoints.push(idx);
            }
            else if(curr.val < prev.val && curr.val < curr.next.val){
                criticalPoints.push(idx);
            }
        }
        prev = curr;
        curr = curr.next;
        idx++;
    }

    // step 5
    if(criticalPoints.length < 2) return [-1, -1];

    let minDist = Infinity;
    let n = criticalPoints.length;

    // min = minimum of consecutive differences
    for(let i = 1; i < n; i++){
        minDist = Math.min(minDist, criticalPoints[i] - criticalPoints[i-1]);
    }

    // max = last - first
    let maxDist = criticalPoints[n-1] - criticalPoints[0];

    return [minDist, maxDist];
};