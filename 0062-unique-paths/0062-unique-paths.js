/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[m - 1][n - 1];

// gpt - (m - 1) + (n - 1)의 경우 중에 (m - 1) (아래)로 가는 경우의 수. 수학 공식
    // let result = 1;
    // for (let i = 1; i <= m - 1; i++) {
    //     result *= (n - 1 + i);
    //     result /= i;
    // }
    // return Math.round(result);
};