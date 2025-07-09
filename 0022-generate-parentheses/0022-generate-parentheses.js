/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [];

    for (let i = 1; i < 2 ** (2 * n - 1); i++) {
        const binStr = i.toString(2).padStart(2 * n, '0');

        const ones = binStr.split('1').length - 1;
        if (ones !== n) continue;
        
        let zeroCount = 0;
        for (let c = 0; c < binStr.length; c++) {
            if (binStr[c] === '0') zeroCount++;
            else zeroCount--;
            if (zeroCount < 0) break;
        }
        if (zeroCount !== 0) continue;

        answer.push(binStr.replaceAll('0', '(').replaceAll('1', ')'));
    }

    return answer;
};