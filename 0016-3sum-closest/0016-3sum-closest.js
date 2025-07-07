/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let answer = nums[0] + nums[1] + nums[2];

    let left = 0;
    let right = 2;

    while (left < nums.length - 1) {
        while (right < nums.length) {
            for (let mid = left + 1; mid < right; mid++) {
                let sum = nums[left] + nums[mid] + nums[right];
                answer = Math.abs(sum - target) < Math.abs(answer - target) ? sum : answer;
            }
            right++;
        }   
        left++;
        right = left + 2;
    }

    return answer;
};