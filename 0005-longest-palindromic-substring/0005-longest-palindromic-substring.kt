class Solution {
    fun longestPalindrome(s: String): String {
        var longest = ""

        for ((i, v) in s.withIndex()) {
            val charMap = s.mapIndexedNotNull { index, c -> if (c == v) index else null }
                .filter { it > i }
            if (charMap.isEmpty()) {
                longest = longest.ifEmpty { v.toString() }
                continue
            }

            for (j in charMap) {
                val sub = s.substring(i, j + 1)
                if (sub == sub.reversed()) {
                    longest = if (sub.length > longest.length) sub else longest
                }
            }
        }
        return longest
    }
}