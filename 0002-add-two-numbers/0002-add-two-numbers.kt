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
    // fun sumListNodes(l1: ListNode?, l2: ListNode?, rest: Int): ListNode? {
    //         val first = l1?.`val` ?: 0
    //         val second = l2?.`val` ?: 0
    //         val sum = first + second + rest
    //         val rest = if (sum >= 10) 1 else 0

    //         val curNode = ListNode(sum % 10)

    //         val firstNode = l1?.next ?: null
    //         val secondNode = l2?.next ?: null

    //         if (firstNode != null || secondNode != null || rest != 0) {
    //             curNode.next = sumListNodes(firstNode, secondNode, rest)
    //         }

    //         return curNode
    // }

    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        var firstNode = l1
        var secondNode = l2
        var carry = 0

        val dummyHead = ListNode(0)  // 결과 리스트의 시작을 위한 더미 노드
        var current = dummyHead  // 현재 노드

        while (firstNode != null || secondNode != null || carry != 0) {
            val first = firstNode?.`val` ?: 0
            val second = secondNode?.`val` ?: 0
            val sum = first + second + carry
            carry = sum / 10  // 10 이상일 경우 자리 올림 처리

            // 새로운 노드 생성 및 연결
            current.next = ListNode(sum % 10)
            current = current.next!!  // 현재 위치를 업데이트

            // 다음 노드로 이동
            firstNode = firstNode?.next
            secondNode = secondNode?.next
        }

        return dummyHead.next  // 더미 헤드 다음 노드가 실제 결과 리스트의 시작
    }
}