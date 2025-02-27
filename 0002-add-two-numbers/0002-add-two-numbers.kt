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
        val sum = (l1?.`val` ?: 0) + (l2?.`val` ?: 0) + rest
        val curNode = ListNode(sum % 10)

        if (l1?.next != null || l2?.next != null || sum / 10 != 0) {
            curNode.next = sumListNodes(l1?.next, l2?.next, sum / 10)
        }

        return curNode
    }

    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        return sumListNodes(l1, l2, 0)
    }
}