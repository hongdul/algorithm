/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n === 1) return [[1]];
    let answer = Array.from({ length: n }, () => Array(n).fill(0));
    let dirArr = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]
    let dirIndex = 0;
    let dir = dirArr[dirIndex];
    let num = 1;
    let row = 0, col = 0;
    while (num <= n * n) {
        while (row < n && row >= 0 && col < n && col >= 0) {
            console.log(row, col, num);

            if (answer[row][col] === 0) {
                answer[row][col] = num;
                num++;
                row += dir[0];
                col += dir[1];
            } else break;
        }
        row -= dir[0];
        col -= dir[1];
        dirIndex = (dirIndex + 1) % 4;
        dir = dirArr[dirIndex];
        row += dir[0];
        col += dir[1];
    }

    return answer;
};