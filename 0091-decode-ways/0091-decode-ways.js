/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
// 1. dp bottom-up
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[n] = 1; // 빈 문자열은 1가지 경우

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            dp[i] = 0;
        } else {
            dp[i] = dp[i + 1];
            if (i + 1 < n && parseInt(s.slice(i, i + 2)) <= 26) {
                dp[i] += dp[i + 2];
            }
        }
    }

    return dp[0];

// top-down, memoization
    const memo = new Map();

    function dfs(index) {
        if (index === s.length) return 1;
        if (s[index] === '0') return 0;
        if (memo.has(index)) return memo.get(index);

        let res = dfs(index + 1); // 한 자리
        if (index + 1 < s.length && parseInt(s.slice(index, index + 2)) <= 26) {
            res += dfs(index + 2); // 두 자리
        }

        memo.set(index, res);
        return res;
    }

    return dfs(0);
};