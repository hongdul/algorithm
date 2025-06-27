/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var totalLength = nums1.length + nums2.length;
    var median = totalLength % 2 != 0 ? Math.floor(totalLength / 2) : Math.ceil(totalLength / 2);

    var nums1Index = 0;
    var nums2Index = 0;
    var mergedArr = [];

    for (var i = 0; i <= median; i++) {
        if (nums1[nums1Index] < nums2[nums2Index] || nums2Index >= nums2.length) {
            mergedArr.push(nums1[nums1Index]);
            nums1Index++;
        }
        else if (nums1[nums1Index] >= nums2[nums2Index] || nums1Index >= nums1.length) {
            mergedArr.push(nums2[nums2Index]);
            nums2Index++;
        }
    }

    return totalLength % 2 != 0 
        ? mergedArr[mergedArr.length - 1] 
        : (mergedArr[mergedArr.length - 1] + mergedArr[mergedArr.length - 2]) / 2;
};