/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return new ListNode().next;
    if (k === 0 || !head.next) return head;
    let nodes = [];
    let node = head;
    while (node) {
        nodes.push(node);
        node = node.next;
    }
    let nodeLen = nodes.length;
    let cycle = k % nodeLen;
    if (cycle === 0) return head;

    let answer = nodes[nodeLen - cycle];
    nodes[nodeLen - 1].next = nodes[0];
    nodes[nodeLen - cycle - 1].next = null;

    return answer;
};