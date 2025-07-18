/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let answer = [-1, -1];
    if (nums.length === 0) return answer;
    
    let left = 0;
    let right = nums.length - 1;
    let i = Math.floor((left + right) / 2);
    let maxCount = Math.floor(Math.log2(nums.length));
    let count = 0;

    while (count <= maxCount) {
        if (nums[i] < target) {
            left = i + 1;
            i = Math.floor((left + right) / 2);
        } else if (nums[i] > target) {
            right = i - 1;
            i = Math.floor((left + right) / 2);
        } else {
            for (let n = i; n >= 0; n--) {
                if (nums[n] === target) {
                    answer[0] = n;
                } else break;
            }
            for (let n = i; n < nums.length; n++) {
                if (nums[n] === target) {
                    answer[1] = n;
                } else break;
            }
            break;
        }
        count++;
    }
    return answer;
};