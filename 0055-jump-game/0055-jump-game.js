/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true;
    let answer = false;
    let falseMap = new Map();
    btr(0);

    return answer;

    function btr(i) {
        if (falseMap.has(i)) return;
        for (let j = nums[i]; j > 0; j--) {
            if (i + j >= nums.length - 1) {
                answer = true;
                return;
            }
            btr(i + j);
            if (answer === true) return;
            else falseMap.set(i, false);
        }
    }
};