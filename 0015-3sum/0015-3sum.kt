class Solution {
    fun threeSum(nums: IntArray): List<List<Int>> {
        var answerList: MutableSet<List<Int>> = mutableSetOf()
        nums.sort()

        for (i in 0 until nums.size - 2) {
            var left = i + 1
            var right = nums.size - 1

            while (left < right) {
                val sum = nums[left] + nums[i] + nums[right]
                if (sum == 0) {
                    answerList.add(listOf(nums[left], nums[i], nums[right]))
                }
                if (nums[i] + nums[left] + nums[right] <= 0) left++ else right--
            }
        }
        return answerList.toList()
    }
}