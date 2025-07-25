/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let answer = [];
    let nMap = new Map();
    for (let i = 0; i < n; i++) {
        nMap.set(i, '.'.repeat(n));
    }
    btr(nMap, 0);
    return answer;

    function btr(map, row) {
        if (row === n) {
            answer.push([...map.values()]);
            return;
        }
        let cur = map.get(row);
        let posIndex = cur
            .split("")
            .map((char, idx) => (char === "." ? idx : -1))
            .filter(idx => idx !== -1);
        for (let i = 0; i < posIndex.length; i++) {
            let temp = new Map(map);
            cur = cur.split("").map((value, idx) => {
                if (idx === posIndex[i]) return 'Q';
                else return '.';
            }).join("");
            temp.set(row, cur);
            block(temp, row, posIndex[i]);
            btr(temp, row + 1);
        }
    }
    function block(map, row, index) {
        for (let i = 1; i + row < n; i++) {
            let nextRow = map.get(row + i).split("");
            for (let r = 0; r < nextRow.length; r++) {
                if (r === index - i || r === index + i || r === index) {
                    nextRow[r] = 'X';
                }
            }
            map.set(row + i, nextRow.join(""));
        }
    }
};