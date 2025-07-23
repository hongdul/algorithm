/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer = [];

    btr([], nums);

    function btr(tempNum, rest) {
        if (tempNum.length === nums.length) {
            answer.push(tempNum);
            return;
        }
        for (let r = 0; r < rest.length; r++) {
            let copy = [...rest];
            let num = copy.splice(r, 1);
            btr([...tempNum, ...num], copy);
        }
    }
    return answer;
};