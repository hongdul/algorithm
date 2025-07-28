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
    
    // let answer = 1;
    // grid(m - 1, n - 1);
    // return answer;

    // function grid(x, y) {
    //     if (x * y === 0) {
    //         answer++;
    //         return;
    //     }
    //     grid(x - 1, y);
    //     grid(x, y - 1);
    // }
};