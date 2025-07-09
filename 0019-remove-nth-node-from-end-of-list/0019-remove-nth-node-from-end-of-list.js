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
    let fast = dummy;
    let slow = dummy;

    // fast를 n+1칸 먼저 보냄
    for (let i = 0; i <= n; i++) fast = fast.next;

    // fast와 slow가 같이 움직임
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    // slow의 next를 삭제
    slow.next = slow.next.next;
    return dummy.next;

// gpt - 재귀 
    // const dummy = new ListNode(0, head);

    // function recurse(node) {
    //     if (!node) return 0;
    //     const pos = recurse(node.next) + 1;
    //     if (pos === n + 1) node.next = node.next.next;
    //     return pos;
    // }

    // recurse(dummy);
    // return dummy.next;


// 내 풀이 - 재귀 
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