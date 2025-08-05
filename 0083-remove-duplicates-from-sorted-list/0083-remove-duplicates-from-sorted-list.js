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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head);
    let cur = head;
    let prev = dummy;
    while (cur) {
        if (cur.next && cur.val === cur.next.val) {} 
        else {
            prev.next = cur;
            prev = prev.next;
        }
        cur = cur.next;
    }
    return dummy.next;
};