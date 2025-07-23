/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let answer = [];
    nums.sort((a, b) => a - b);
    btr([], nums);

    function btr(tempNum, rest, used) {
        if (tempNum.length === nums.length) {
            answer.push(tempNum);
            return;
        }
        for (let r = 0; r < rest.length; r++) {
            if (r > 0 && rest[r] === rest[r - 1]) continue;

            let copy = [...rest];
            let num = copy.splice(r, 1);

            btr([...tempNum, ...num], copy);
        }

    }
    return answer;
};