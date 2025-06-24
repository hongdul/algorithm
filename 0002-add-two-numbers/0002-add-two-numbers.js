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
var addTwoNumbers = function(l1, l2, rest) {
    var sum = 0;
    
    if (!l1 && !l2) {
        if (rest > 0) {
            return new ListNode(1);
        } else return;
    }
    
    sum = ((l1?.val || 0) + (l2?.val || 0) + (rest || 0)) % 10;
    rest = (l1?.val || 0) + (l2?.val || 0) + (rest || 0) > 9 ? 1 : 0;
    
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    return new ListNode(sum, addTwoNumbers(l1, l2, rest));
};