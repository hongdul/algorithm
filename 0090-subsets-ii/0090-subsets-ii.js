/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    function dfs(start, path) {
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            path.push(nums[i]);
            dfs(i + 1, path);
            path.pop();
        }
    }

    dfs(0, []);
    return res;
};