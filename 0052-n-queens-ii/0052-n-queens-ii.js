/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let result = 0;
    const board = Array.from({ length: n }, () => ".".repeat(n));

    const cols = new Set();
    const diag1 = new Set(); // row - col
    const diag2 = new Set(); // row + col

    function backtrack(row) {
        if (row === n) {
            result++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;
            }

            const rowArr = board[row].split("");
            rowArr[col] = "Q";
            board[row] = rowArr.join("");

            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            // backtrack
            rowArr[col] = ".";
            board[row] = rowArr.join("");
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return result;
};