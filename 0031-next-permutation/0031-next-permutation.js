/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.join(',') === [...nums].sort((a, b) => b - a).join(',')) {
        nums.reverse();
    } else {
        for (let i = nums.length - 1; i > 0; i--) {
            if (nums[i] <= nums[i - 1]) continue;
            
            let minNum = [i, nums[i]];
            for (let n = i; n < nums.length; n++) {
                if (nums[i - 1] >= nums[n]) continue;
                minNum = minNum[1] > nums[n] ? [n, nums[n]] : minNum;
            }
            
            [nums[i - 1], nums[minNum[0]]] = [nums[minNum[0]], nums[i - 1]];
            
            nums.splice(i, nums.length - i, ...nums.slice(i).sort((a, b) => a - b));
            break;
        }
    }
};
