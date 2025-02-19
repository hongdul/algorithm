class Solution {
    fun romanToInt(s: String): Int {
        var value = 0
        var addValue = 0
        var i = 0
        while (i < s.length) {
            var char = s[i]

            when (char) {
                'I' -> {
                    if (s.getOrNull(i+1) == 'V') {
                        addValue = 4
                        i++
                    } else if (s.getOrNull(i+1) == 'X') {
                        addValue = 9
                        i++
                    } else { addValue = 1 }
                }
                'V' -> addValue = 5
                'X' -> {
                    if (s.getOrNull(i+1) == 'L') {
                        addValue = 40
                        i++
                    } else if (s.getOrNull(i+1) == 'C') {
                        addValue = 90
                        i++
                    } else { addValue = 10 }
                }
                'L' -> addValue = 50
                'C' -> {
                    if (s.getOrNull(i+1) == 'D') {
                        addValue = 400
                        i++
                    } else if (s.getOrNull(i+1) == 'M') {
                        addValue = 900
                        i++
                    } else { addValue = 100 }
                }
                'D' -> addValue = 500
                'M' -> addValue = 1000
                else -> addValue = 0
            }
            value += addValue
            i++
        }

        return value
    }
}