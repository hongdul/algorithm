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
};