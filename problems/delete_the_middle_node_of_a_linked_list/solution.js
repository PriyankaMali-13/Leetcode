/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    //converting linkedlist to arr
    let arr = [];
    let current = head;
    while(current != null){
        arr.push(current.val);
        current = current.next;
    }
    //logic
    let mid = Math.floor(arr.length / 2);
    arr.splice(mid, 1);
    
    //converting back arr to linkedlist as return type is listNode
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let val of arr){
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
};