/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let colorsCount = [0, 0, 0];
    for (num of nums) {
        colorsCount[num]++;
    }
    let i = 0;
    let countIndex = 0;
    while (i < nums.length) {
        if (colorsCount[countIndex] > 0) {
            nums[i] = countIndex;
            colorsCount[countIndex]--;
            i++;
        } else countIndex++;
    }
};