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
    let prev = new ListNode(0, head);
    let answer = new ListNode(0, prev);
    let cur = head;
    let dupFlag = false;

    while (cur) {
        if (cur.next) {
            if (cur.val === cur.next.val) {
                dupFlag = true;
            } else {
                if (dupFlag) {
                    prev.next = cur.next;
                    dupFlag = false;
                } else {
                    prev = cur;
                }
            }
        } else if (dupFlag) {
            prev.next = cur.next;
        }
        cur = cur.next;
    }
    return answer.next.next;
};