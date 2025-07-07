/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length, n = p.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    
    dp[0][0] = true; // 둘 다 빈 문자열이면 true

    // 패턴이 '*'로 시작할 수 있으므로 초기화
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2]; // '*'와 그 앞 문자를 제거한 결과를 본다
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*'가 이전 문자를 0번 반복하는 경우
                dp[i][j] = dp[i][j - 2];

                // '*'가 이전 문자를 1번 이상 반복하는 경우
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
}