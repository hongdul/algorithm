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
            if (l1 == null && l2 == null && rest == 0) return null

            val first = l1?.`val` ?: 0
            val second = l2?.`val` ?: 0
            val sum = first + second + rest
            val curNode = ListNode(sum % 10)

            curNode.next = sumListNodes(l1?.next, l2?.next, sum / 10)

            return curNode
    }

    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        return sumListNodes(l1, l2, 0)
    }
}