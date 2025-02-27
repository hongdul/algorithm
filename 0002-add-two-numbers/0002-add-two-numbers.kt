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
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {

        var p1 = l1
        var p2 = l2
        var carry = false

        var prev: ListNode? = null

        while(p1 != null && p2 != null) {
            val sum = p1.`val` + p2.`val` + if (carry) 1 else 0
            p1.`val` = sum % 10
            carry = sum > 9
            prev = p1
            p1 = p1.next
            p2 = p2.next
        }

        var current = p1 ?: p2
        prev?.next = current
        while(current != null) {
            if(current != null) {
                val sum = current.`val` + if (carry) 1 else 0
                current.`val` = sum % 10
                carry = sum > 9
            }

            prev = current
            current = current.next
        }

        if(carry) {
            prev?.next = ListNode(1)
        }

        return l1
        
    }
}