/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = '', num2 = '';

    // Step 1: Convert linked lists to strings (already in reverse, so prepend)
    while (l1) {
        num1 = l1.val + num1;
        l1 = l1.next;
    }
    while (l2) {
        num2 = l2.val + num2;
        l2 = l2.next;
    }

    // Step 2: Add using BigInt (handles very large numbers safely)
    let sum = (BigInt(num1) + BigInt(num2)).toString();

    // Step 3: Convert result back to linked list (in reverse)
    let dummy = new ListNode(0);
    let current = dummy;

    for (let i = sum.length - 1; i >= 0; i--) {
        current.next = new ListNode(Number(sum[i]));
        current = current.next;
    }

    return dummy.next;
};