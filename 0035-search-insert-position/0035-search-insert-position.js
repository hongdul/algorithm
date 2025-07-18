/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let i = Math.floor((left + right) / 2);
        if (nums[i] > target) {
            right = i - 1;
        } else if (nums[i] < target) {
            left = i + 1;
        } else {
            return i;
        }
    }
    return left;
};