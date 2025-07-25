/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let tempSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (tempSum < 0) {
            if (tempSum < nums[i]) {
                tempSum = 0;
            }
        }
        tempSum += nums[i];
        maxSum = maxSum > tempSum ? maxSum : tempSum;
    }

    return maxSum;
};