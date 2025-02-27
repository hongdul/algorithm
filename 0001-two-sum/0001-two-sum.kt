class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val numberMap: MutableMap<Int, Int> = mutableMapOf()

        for ((index, value) in nums.withIndex()) {
            numberMap[target-value]?.let { return intArrayOf(numberMap[target-value]!!, index) }

            numberMap[value] = index
        }
        return intArrayOf()
    }
}