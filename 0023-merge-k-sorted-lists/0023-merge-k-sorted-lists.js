/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const maxNum = Math.pow(10, 4) + 1;
    if (lists.length === 0) return new ListNode().next;
    let numMap = new Map();

    for (list of lists) {
        console.log(list);
        console.log(numMap);
        while (list) {
            let val = list.val;
            let num = numMap.get(val);
            console.log(val, num);
            if (num) {
                numMap.set(val, num + 1);
            } else {
                numMap.set(val, 1);
            }
            list = list.next;
        }
    }

    let node = new ListNode(maxNum);
    let head = new ListNode(0, node);
    let nums = [...numMap.keys()].sort((a, b) => a - b);
    console.log(node);
    console.log(nums);
    for (let n = 0; n < nums.length; n++) {
        let count = numMap.get(nums[n]);
        for (let i = 0; i < count; i++) {
            node.val = nums[n];
            if (n === nums.length - 1 && i === count - 1) break;
            node.next = new ListNode();
            node = node.next;
        }
    }
    return head.next.val !== maxNum ? head.next : head.next.next;
};
