/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let answer = [];

    for (let l = 0; l < candidates.length; l++) {
        backtrack([candidates[l]], l);
    }

    return answer;
    
    function backtrack(numbers, l) {
        let sum = getSum(numbers);
        if (sum > target) return;
        if (sum === target) {
            answer.push(numbers);
            return;
        }

        for(let i = l; i < candidates.length; i++) {
            if (candidates[i] > target) continue;
            let temp = [...numbers, candidates[i]];
            backtrack(temp, i);
        }
    }
    function getSum(numbers) {
        console.log(numbers);
        return numbers.reduce((a, b) => a + b, 0);
    }
};