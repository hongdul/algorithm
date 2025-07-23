/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let answer = 0;
    let i = 0;
    while (i < nums.length - 1) {
        if (i + nums[i] >= nums.length - 1) return answer + 1;
        let j = nums[i];
        let maxJ = j;
        let maxI = i + 1;
        for (let a = 1; a <= j; a++) {
            let tempJ = nums[i + a] + a;
            if (tempJ > maxJ) {
                maxJ = tempJ;
                maxI = i + a;
            }
        }
        i = maxI;
        answer++;
    }
    return answer;
};