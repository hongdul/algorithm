class Solution {
    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
        val nums = (nums1 + nums2).sorted()
        val length = nums.size
        return if (length % 2 == 0) (nums[length / 2] + nums[length / 2 - 1]) / 2.0 else nums[length / 2].toDouble()
    }
}