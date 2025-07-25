/**
 * @param {matrix[col][row]ber[][]} matrix
 * @return {matrix[col][row]ber[]}
 */
var spiralOrder = function(matrix) {
    let answer = [];
    let row = 0;
    let col = 0;
    let passed = new Map();
    let key = `${col}_${row}`;

    while (answer.length < matrix.length * matrix[0].length) {
        while (row < matrix[0].length && !passed.has(key)) {
            answer.push(matrix[col][row]);
            passed.set(key, true);
            row++;
            key = `${col}_${row}`;
        }
        row--;
        col++;
        key = `${col}_${row}`;

        while (col < matrix.length && !passed.has(key)) {
            answer.push(matrix[col][row]);
            passed.set(key, true);
            col++;
            key = `${col}_${row}`;
        }
        col--;
        row--;
        key = `${col}_${row}`;

        while (row >= 0 && !passed.has(key)) {
            answer.push(matrix[col][row]);
            passed.set(key, true);
            row--;
            key = `${col}_${row}`;
        }
        row++;
        col--;
        key = `${col}_${row}`;

        while (col >= 0 && !passed.has(key)) {
            answer.push(matrix[col][row]);
            passed.set(key, true);
            col--;
            key = `${col}_${row}`;
        }
        col++;
        row++;
        key = `${col}_${row}`;
    }
    return answer;
};