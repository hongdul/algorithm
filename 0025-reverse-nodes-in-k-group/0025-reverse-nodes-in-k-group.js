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
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let answer = dummy;

    // 노드를 k개만큼 찾고, swap 실행
    while (dummy) {
        let prevNode = dummy;
        let nodeArr = [];

        for (let i = 0; i < k; i++) {
            dummy = dummy.next;
            if (!dummy) return answer.next;
            nodeArr.push(dummy);
        }
        let nextNode = dummy.next;
        prevNode.next = nodeArr[k - 1];

        for (let i = k - 1; i > 0; i--) {
            let node = nodeArr[i];
            node.next = nodeArr[i - 1];
        }
        nodeArr[0].next = nextNode;
        dummy = nodeArr[0];
    }

    return answer.next;
};