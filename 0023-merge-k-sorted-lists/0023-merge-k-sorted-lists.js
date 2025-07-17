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
    const heap = [];

    for (let node of lists) {
        if (node) heap.push(node);
    }

    heap.sort((a, b) => a.val - b.val); // 초기 정렬

    const dummy = new ListNode();
    let current = dummy;

    while (heap.length > 0) {
        const node = heap.shift(); // 가장 작은 값 꺼냄
        current.next = node;
        current = current.next;

        if (node.next) {
            // 삽입 후 정렬 유지
            let i = 0;
            while (i < heap.length && heap[i].val < node.next.val) i++;
            heap.splice(i, 0, node.next);
        }
    }

    return dummy.next;


    // const maxNum = Math.pow(10, 4) + 1;
    // if (lists.length === 0) return new ListNode().next;
    // let numMap = new Map();

    // for (list of lists) {
    //     while (list) {
    //         let val = list.val;
    //         let num = numMap.get(val);
    //         if (num) {
    //             numMap.set(val, num + 1);
    //         } else {
    //             numMap.set(val, 1);
    //         }
    //         list = list.next;
    //     }
    // }

    // let node = new ListNode(maxNum);
    // let head = new ListNode(0, node);
    // let nums = [...numMap.keys()].sort((a, b) => a - b);

    // for (let n = 0; n < nums.length; n++) {
    //     let count = numMap.get(nums[n]);
    //     for (let i = 0; i < count; i++) {
    //         node.val = nums[n];
    //         if (n === nums.length - 1 && i === count - 1) break;
    //         node.next = new ListNode();
    //         node = node.next;
    //     }
    // }
    // return head.next.val !== maxNum ? head.next : head.next.next;
};
