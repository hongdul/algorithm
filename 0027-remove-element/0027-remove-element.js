/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let answer = 0;
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
            answer++;
        }
        j++;
    }
    return answer;
};