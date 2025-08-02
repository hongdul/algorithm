/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 1) return matrix[0].includes(target);

    let m = matrix.length - 1;
    let n = matrix[0].length - 1;
    
    let left = 0;
    let mMid;
    while (left <= m) {
        mMid = Math.floor((left + m) / 2);
        if (matrix[mMid][0] > target) {
            m = mMid - 1;
        } else if (matrix[mMid][0] < target) {
            if (mMid === matrix.length - 1) break;
            if (matrix[mMid + 1][0] === target) return true;
            if (matrix[mMid + 1][0] > target) break;
            left = mMid + 1;
        } else return true;
    }
    left = 0;
    let nMid;
    while (left <= n) {
        nMid = Math.floor((left + n) / 2);
        if (matrix[mMid][nMid] > target) {
            n = nMid - 1;
        } else if (matrix[mMid][nMid] < target) {
            left = nMid + 1;
        } else return true;
    }
    return false;

// gpt - m * n 배열로 한번에 이진탐색
    // let m = matrix.length, n = matrix[0].length;
    // let left = 0, right = m * n - 1;

    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2);
    //     let val = matrix[Math.floor(mid / n)][mid % n];

    //     if (val === target) return true;
    //     else if (val < target) left = mid + 1;
    //     else right = mid - 1;
    // }

    // return false;
};