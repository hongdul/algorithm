/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 1;
    let nodeLen = 30;

    recur(head, count);
    
    function recur(node, count) {
        let a = count;

        if(node.next) {
            count++;
            a = recur(node.next, count);
        }
        else nodeLen = count;

        if (nodeLen == n) {
            head = node.next;
            return;
        }

        if (a == nodeLen - n) {
            node.next = node.next.next;
            return;
        }
        else return a - 1;
    }

    return head;
};