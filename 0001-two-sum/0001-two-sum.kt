class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        for (i in nums.indices) {
            val index = nums.indexOf(target - nums[i])
            if (index == i) continue
            if (index != -1) {
                return intArrayOf(i, index)
            }
        }
        return intArrayOf()
    }
}