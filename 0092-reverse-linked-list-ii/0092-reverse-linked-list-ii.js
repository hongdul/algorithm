/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let answer = new ListNode(0, head);
    let dummy = answer;
    let count = 0;
    let cur = head;
    let reverseArr = [];

    while (count < right && cur) {
        if (count < left - 1) {
            dummy.next = cur;
            dummy = dummy.next;
        } else {
            reverseArr.push(cur);
        }
        cur = cur.next; 
        count++;
    }
    while (reverseArr.length > 0) {
        dummy.next = reverseArr.pop();
        dummy = dummy.next;
    }
    dummy.next = cur;

    return answer.next;
};