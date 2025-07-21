/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], i);
    }
    let i = 1;
    while (true) {
        if (!numMap.has(i)) return i;
        i++;
    }
};