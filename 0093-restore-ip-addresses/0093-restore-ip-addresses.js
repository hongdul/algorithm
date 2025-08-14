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
        if (numArr.length > 4) return;
        if (idx === s.length && numArr.length === 4) {
            answer.push(numArr.join('.'));
            return;
        }
        
        for (let i = 1; i <= 3; i++) {
            let slicedNum = s.slice(idx, idx + i);
            if (Number(slicedNum) > 255 
                || (slicedNum.length > 1 && slicedNum[0] === '0')
                || idx + i > s.length
            ) {
                continue;
            }
            numArr.push(slicedNum);
            dfs(idx + i, numArr);
            numArr.pop();
        }
    }
};