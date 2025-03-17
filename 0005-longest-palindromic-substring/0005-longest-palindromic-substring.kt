class Solution {
    fun longestPalindrome(s: String): String {
        if (s.length <= 1) return s

        var longest = ""

        fun checkPalindrome(left: Int, right: Int) {
            var l = left
            var r = right
            while (l >= 0 && r < s.length) {
                if (s[l] == s[r]) {
                    l--
                    r++
                } else break
            }
            if (r - l - 1 > longest.length) {
                longest = s.substring(l + 1, r)
            }
        }
        for (i in s.indices) {
            checkPalindrome(i, i)
            checkPalindrome(i, i + 1)
        }

        return longest
    }
}