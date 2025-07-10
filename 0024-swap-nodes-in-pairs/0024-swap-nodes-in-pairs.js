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
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let answer = dummy;
    
    // jump 2
    while (dummy.next && dummy.next.next) {
        swap(dummy);
        dummy = dummy.next.next;
    }
    
    return answer.next;

    // swap nodes
    function swap(prev) {
        let cur = prev.next;
        let next = cur.next;
        cur.next = next.next;
        prev.next = next;
        next.next = cur;
    }
};