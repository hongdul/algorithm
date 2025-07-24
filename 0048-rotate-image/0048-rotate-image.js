/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const l = matrix.length;

    let numbers = [];
    for (let i = 0; i < l; i++) {
        numbers.push(...matrix[i]);   
    }

    for (let i = 0; i < l; i++) {
        let temp = [];
        let n = Math.pow(l, 2) - (l - i);
        while (n >= 0) {
            temp.push(numbers[n]);
            n -= l;
        }
        matrix[i] = temp;
    }

// gpt - 대각선 원소 교환 후 각 행 뒤집기
// const n = matrix.length;

// // 1. Transpose
// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
// }

// // 2. Reverse each row
// for (let row of matrix) {
//     row.reverse();
// }
};