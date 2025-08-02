/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var subsets = function(nums) {
    let answer = [];

    function backtrack(start, path) {
        answer.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return answer;
};