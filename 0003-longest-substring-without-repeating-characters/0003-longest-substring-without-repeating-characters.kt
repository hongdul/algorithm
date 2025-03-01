class Solution {
    fun lengthOfLongestSubstring(s: String): Int {
        var word = ""
        var longestLength = 0

        for (c in s) {
            val charIndex = word.indexOf(c)
            if (charIndex != -1) {
                if (word.length > longestLength) {
                    longestLength = word.length
                }
                word = word.substring(charIndex + 1)
            }
            word += c
        }

        if (word.length > longestLength) {
            longestLength = word.length
        }

        return longestLength
    }
}