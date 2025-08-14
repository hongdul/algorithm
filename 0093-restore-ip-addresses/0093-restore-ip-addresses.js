/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    // 1. '.' 로 구분된 (0 ~ 255) 범위의 숫자 4개
    // 2. 0 은 가능하지만 '01'은 안됨(leading zeros)
    let answer = [];
    dfs(0, []);
    return answer;

    function dfs(idx, numArr) {
        if (numArr.length > 4 || (s.length - idx) > 3 * (4 - numArr.length)) return;

        const remain = 4 - numArr.length;
        const rest = s.length - idx;
        if (rest < remain) return;

        if (idx === s.length && numArr.length === 4) {
            answer.push(numArr.join('.'));
            return;
        }
        if (numArr.length === 4) return;

        const maxLen = (s[idx] === '0') ? 1 : 3;

        for (let i = 1; i <= maxLen && idx + i <= s.length; i++) {
            const slicedNum = s.slice(idx, idx + i);
            
            if (Number(slicedNum) > 255) break;

            numArr.push(slicedNum);
            dfs(idx + i, numArr);
            numArr.pop();
        }
    }
};