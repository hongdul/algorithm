/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let slicedNum1 = nums1.slice(0, m);
    let index1 = 0;
    let index2 = 0;

    while (index1 < m || index2 < n) {
        num1 = index1 >= m ? Infinity : slicedNum1[index1];
        num2 = index2 >= n ? Infinity : nums2[index2];
        if (num1 < num2) {
            nums1[index1 + index2] = slicedNum1[index1];
            index1++;
        } else {
            nums1[index1 + index2] = nums2[index2];
            index2++;
        }
    }
};