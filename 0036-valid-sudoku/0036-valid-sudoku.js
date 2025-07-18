/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let numMap = new Map();
    let key;

    for (let i = 0; i < board.length; i++) {
        let line = board[i];
        
        for (let n = 0; n < line.length; n++) {
            if (line[n] === '.') continue;

            // 가로
            key = `row${i}_${line[n]}`;
            if (numMap.has(key)) return false;
            numMap.set(key, true);
            
            // 세로
            key = `col${n}_${line[n]}`;
            if (numMap.has(key)) return false;
            numMap.set(key, true);

            // 3x3
            key = `box${Math.floor(n / 3)}${Math.floor(i / 3)}_${line[n]}`;
            if (numMap.has(key)) return false;
            numMap.set(key, true);
        }
    }

    return true;
};