/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from({ length: m }, () => Array(n).fill(1));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
                continue;
            }
            if (i === 0 && j > 0) {
                dp[i][j] = dp[i][j - 1];
            } else if (i > 0 && j === 0) {
                dp[i][j] = dp[i - 1][j];
            } else if (i === 0 && j === 0) {
                if (obstacleGrid[i][j] === 1) return 0;
            } else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            }
        }
    }

    return dp[m - 1][n - 1];
};