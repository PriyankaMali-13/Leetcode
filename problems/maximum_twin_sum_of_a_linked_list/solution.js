/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let arr_head = [];
    let current = head;
    while(current !== null){
        arr_head.push(current.val);  
        current = current.next;  // 
    }
    let n = arr_head.length;  
    let arr = [];   
    for(let i=0; i<n; i++){
        let sum = arr_head[i] + arr_head[n-1-i]
        arr.push(sum);
    }
    return Math.max(...arr);
};