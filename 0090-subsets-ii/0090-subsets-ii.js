/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let answer = [];
    nums.sort((a, b) => a - b);

    for(let i = 0; i <= nums.length; i++) {
        btr([], 0, i);
    }

    return answer;

    function btr(subset, index, length) {
        if (subset.length === length) {
            answer.push([...subset]);
            return;
        }
        for (let i = index; i < nums.length; i++) {
            while (i > index && nums[i] === nums[i - 1]) {
                i++;
                if (i >= nums.length) return;
            }
            subset.push(nums[i]);
            btr(subset, i + 1, length);
            subset.pop();
        }
    }
};