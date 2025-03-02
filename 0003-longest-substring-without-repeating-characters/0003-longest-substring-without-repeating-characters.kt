class Solution {
    fun lengthOfLongestSubstring(s: String): Int {
        var left = 0
        var maxLength = 0
        var charMap = mutableMapOf<Char, Int>()

        for (right in s.indices) {
            if (charMap.contains(s[right]) && charMap[s[right]]!! >= left) {
                left = charMap[s[right]]!! + 1
            }
            charMap[s[right]] = right
            maxLength = maxOf(maxLength, right - left + 1)
        }

        return maxLength
    }
}