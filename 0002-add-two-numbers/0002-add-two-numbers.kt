/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun sumListNodes(l1: ListNode?, l2: ListNode?, rest: Int): ListNode? {
            var firstNode = l1
            var secondNode = l2
            var first = firstNode?.`val` ?: 0
            var second = secondNode?.`val` ?: 0
            var sum = first + second + rest
            var rest = if (sum >= 10) 1 else 0

            var curNode = ListNode(sum % 10)

            firstNode = firstNode?.next ?: null
            secondNode = secondNode?.next ?: null

            if (firstNode != null || secondNode != null || rest != 0) {
                curNode.next = sumListNodes(firstNode, secondNode, rest)
            }

            return curNode
    }

    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        return sumListNodes(l1, l2, 0)
    }
}