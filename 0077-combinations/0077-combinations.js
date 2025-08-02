/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let answer = [];
    for (let l = 1; l <= n - k + 1; l++) {
        btr([l], k - 1);
    }

    return answer;

    function btr(numArr, k) {
        if (k === 0) {
            answer.push(numArr);
            return;
        }

        for (let m = numArr[numArr.length - 1] + 1; m <= n; m++) {
            btr([...numArr, m], k - 1);
        }
    }
};