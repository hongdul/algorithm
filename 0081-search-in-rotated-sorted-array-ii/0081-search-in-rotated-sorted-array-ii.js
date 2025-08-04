/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (nums.length === 1) return nums.includes(target);

    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    nums.sort((a, b) => a - b);
    // while (left < right) {
    //     mid = Math.floor((left + right) / 2);
    //     console.log('1: ', left, mid, right);
    //     if (nums[mid] > nums[right]) {
    //         left = mid + 1;
    //     } else {
    //         right = mid - 1;
    //     }
    // }
    // let pivot = mid;
    // if (target <= nums[right]) {
    //     left = pivot;
    //     right = nums.length - 1;
    // } else {
    //     left = 0;
    //     right = pivot;
    // }

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) return true;
        else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};