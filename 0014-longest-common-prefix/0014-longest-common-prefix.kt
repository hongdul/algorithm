class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        var shortestStr = strs[0]
        var longestPrefix = ""
        for (i in strs) {
            shortestStr = if (shortestStr.count() < i.count()) shortestStr else i
        }

        var i = 0
        while (i < shortestStr.length) {
            if (strs.all { it.startsWith(shortestStr.slice(0..i))}) {
                longestPrefix = shortestStr.slice(0..i)
                i++
                continue
            }
            break
        }
        return longestPrefix
    }
}