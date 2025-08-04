/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 1) return 1;

    let i = 1;
    let p = 1;
    let dupCount = 1;
    while (p < nums.length) {
        if (nums[p] === nums[p - 1]) {
            dupCount++;
            if (dupCount <= 2) {
                nums[i] = nums[p];
                i++;
            }
        } else {
            dupCount = 1;
            nums[i] = nums[p];
            i++;
        }
        p++;
    }
    return i;
};