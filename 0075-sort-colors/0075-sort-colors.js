/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    while (i < nums.length - 1) {
        let num = nums[i];
        let minNum = num;
        let minIndex = i;
        for (let n = i + 1; n < nums.length; n++) {
            if (minNum >= nums[n]) {
                minNum = nums[n];
                minIndex = n;
            }
        }
       [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
       i++;
    }
};