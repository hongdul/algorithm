/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let answer = 1;
    let cur = nums[0];
    let i = 1;
    let temp = i;

    while (temp < nums.length) {
        while (cur === nums[temp]) temp++;
        if (temp >= nums.length) break;
        nums[i] = nums[temp];
        cur = nums[temp];
        temp++;
        i++;
        answer++;
    }

    return answer;
};