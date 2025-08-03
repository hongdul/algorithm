/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let answer = false;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                btr(i, j, []);
                if (answer) return answer;
            }
        }
    }
    return answer;

    function btr(i, j, path) {
        if (path.includes(`${i}-${j}`)) return;
        else path.push(`${i}-${j}`);

        if (path.length === word.length) {
            answer = true;
            return;
        }

        if (board[i - 1] && board[i - 1][j] === word[path.length]) btr(i - 1, j, [...path]);
        if (board[i + 1] && board[i + 1][j] === word[path.length]) btr(i + 1, j, [...path]);
        if (board[i][j - 1] && board[i][j - 1] === word[path.length]) btr(i, j - 1, [...path]);
        if (board[i][j + 1] && board[i][j + 1] === word[path.length]) btr(i, j + 1, [...path]);
        return;
    }
};