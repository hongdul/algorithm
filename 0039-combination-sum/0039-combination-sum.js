/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let answer = [];

    for (let l = 0; l < candidates.length; l++) {
        backtrack([candidates[l]], l, candidates[l]);
    }

    return answer;
    
    function backtrack(numbers, l, sum) {
        if (sum > target) return;
        if (sum === target) {
            answer.push(numbers);
            return;
        }

        for(let i = l; i < candidates.length; i++) {
            backtrack([...numbers, candidates[i]], i, sum + candidates[i]);
        }
    }
};