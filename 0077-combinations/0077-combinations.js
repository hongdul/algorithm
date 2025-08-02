/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let answer = [];
    
    btr([], 1);
    return answer;

    function btr(numArr, start) {
        if (numArr.length === k) {
            answer.push([...numArr]);
            return;
        }

        for (let m = start; m <= n; m++) {
            numArr.push(m);
            btr(numArr, m + 1);
            numArr.pop();
        }
    }
};