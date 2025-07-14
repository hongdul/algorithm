/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let numsMap = new Map();

    for (let i = nums.length - 1; i > 0; i--) {
        numsMap.set(nums[i], i);
        if (nums[i] <= nums[i - 1]) continue;
        
        let numbers = numsMap.keys();
        let minNum = Math.min(...numbers.filter((n) => n > nums[i - 1]));

        let temp = nums[i - 1];
        nums[i - 1] = minNum;
        nums[numsMap.get(minNum)] = temp;

        let sortedNums = nums.slice(i).sort((a, b) => a - b);
        
        return nums.splice(i, nums.length - i, ...sortedNums);
    }
    return nums.reverse();
};
