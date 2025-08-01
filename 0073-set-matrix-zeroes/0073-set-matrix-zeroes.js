/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroMap = new Map([
        ['row', []],
        ['col', []],
    ]);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroMap.get('row').push(i);
                zeroMap.get('col').push(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (zeroMap.get('row').includes(i) || zeroMap.get('col').includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};