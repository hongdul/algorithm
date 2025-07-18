/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;

    let left = 0;
    let right = nums.length - 1;
    let i = Math.floor((left + right) / 2);

    let maxCount = Math.floor(Math.log2(nums.length));
    let count = 0;

    while (count <= maxCount) {
        if (nums[i] > target) {
            right = i - 1;
            i = Math.floor((left + right) / 2);
        } else if (nums[i] < target) {
            left = i + 1;
            i = Math.floor((left + right) / 2);
        } else {
            return i;
        }
        count++;
    }
    return left;
};