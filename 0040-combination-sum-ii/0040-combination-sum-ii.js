/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let answer = [];

    backtrack(0, [], 0);
    return answer;

    function backtrack(start, path, sum) {
        if (sum > target) return;
        if (sum === target) {
            answer.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            if (sum + candidates[i] > target) break;

            path.push(candidates[i]);
            backtrack(i + 1, path, sum + candidates[i]);
            path.pop();
        }
    }
};
