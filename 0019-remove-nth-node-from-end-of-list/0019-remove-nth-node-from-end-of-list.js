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
    const dummy = new ListNode(0, head);

    function recurse(node) {
        if (!node) return 0;
        const pos = recurse(node.next) + 1;
        if (pos === n + 1) node.next = node.next.next;
        return pos;
    }

    recurse(dummy);
    return dummy.next;
    
    // let count = 1;
    // let nodeLen = 30;

    // recur(head, count);
    
    // function recur(node, count) {
    //     let a = count;

    //     if(node.next) {
    //         count++;
    //         a = recur(node.next, count);
    //     }
    //     else nodeLen = count;

    //     if (nodeLen == n) {
    //         head = node.next;
    //         return;
    //     }

    //     if (a == nodeLen - n) {
    //         node.next = node.next.next;
    //         return;
    //     }
    //     else return a - 1;
    // }

    // return head;
};