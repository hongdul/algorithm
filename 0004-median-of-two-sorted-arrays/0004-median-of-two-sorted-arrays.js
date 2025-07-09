/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var totalLength = nums1.length + nums2.length;
    var median = totalLength % 2 !== 0 ? Math.floor(totalLength / 2) : Math.ceil(totalLength / 2);

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

    return totalLength % 2 !== 0 
        ? mergedArr[mergedArr.length - 1] 
        : (mergedArr[mergedArr.length - 1] + mergedArr[mergedArr.length - 2]) / 2;
};

/** 이분 탐색 활용 O(log(m+n))
if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // nums1은 더 짧게
    }

    let x = nums1.length;
    let y = nums2.length;
    let low = 0, high = x;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minRightX = partitionX === x ? Infinity : nums1[partitionX];

        const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minRightY = partitionY === y ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
}
*/