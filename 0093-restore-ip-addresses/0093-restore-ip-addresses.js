/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    // 1. '.' 로 구분된 (0 ~ 255) 범위의 숫자 4개
    // 2. 0 은 가능하지만 '01'은 안됨(leading zeros)
    let answer = [];
    let minLen = s.length <= 10 ? 1 : s.length % 9;
    dfs(0, []);
    return answer;

    function dfs(idx, numArr) {
        if (numArr.length > 4 || (s.length - idx) > 3 * (4 - numArr.length)) return;
        if (idx === s.length && numArr.length === 4) {
            answer.push(numArr.join('.'));
            return;
        }
        
        for (let i = minLen; i <= 3; i++) {
            if (idx + i > s.length) continue;
            let slicedNum = s.slice(idx, idx + i);
            if (Number(slicedNum) > 255 || (slicedNum.length > 1 && slicedNum[0] === '0')) {
                continue;
            }
            numArr.push(slicedNum);
            dfs(idx + i, numArr);
            numArr.pop();
        }
    }
};