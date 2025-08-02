/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let answer = [];
    for (let i = 0; i <= nums.length; i++) {
        btr([], 0, i);        
    }
    return answer;

    function btr(numArr, start, subLen) {
        if (numArr.length === subLen) {
            answer.push([...numArr]);
            return;
        }
        for (let n = start; n < nums.length; n++) {
            numArr.push(nums[n]);
            btr(numArr, n + 1, subLen);
            numArr.pop();
        }
    }
};