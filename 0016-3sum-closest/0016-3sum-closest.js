/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let answer = nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            answer = Math.abs(target - sum) < Math.abs(target - answer) ? sum : answer;

            if (sum == target) return sum;
            else if (sum < target) {
                do { left++ } while (nums[left] == nums[left - 1])
            } else right--;
        }
    }

    return answer;
};